import crypto from "crypto";
import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("BODY:", body);
    console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
    console.log(process.env.RAZORPAY_KEY_SECRET);
    // Validate required fields
    if (!body.razorpay_order_id || !body.razorpay_payment_id) {
      console.error("Missing order_id/payment_id in verify payload", body);
      return NextResponse.json(
        { success: false, error: "Missing order_id or payment_id" },
        { status: 400 },
      );
    }

    if (!body.razorpay_signature) {
      console.error("Missing razorpay_signature in verify payload", body);
      return NextResponse.json(
        { success: false, error: "Missing razorpay_signature" },
        { status: 400 },
      );
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${body.razorpay_order_id}|${body.razorpay_payment_id}`)
      .digest("hex");

    console.log("Generated:", generatedSignature);
    console.log("Received :", body.razorpay_signature);

    if (generatedSignature !== body.razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid Signature",
        },
        { status: 400 },
      );
    }

    await connect();

    const order = await Order.create({
      customer: body.customer,
      items: body.items,
      amount: body.amount,
      razorpayOrderId: body.razorpay_order_id,
      razorpayPaymentId: body.razorpay_payment_id,
      paymentStatus: "paid",
    });

    console.log("Order Saved:", order);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}
