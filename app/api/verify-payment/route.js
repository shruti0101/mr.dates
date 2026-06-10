import crypto from "crypto";
import { NextResponse } from "next/server";

import { connect } from "@/Database/db";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    const body = await req.json();

    const generated =
      crypto
        .createHmac(
          "sha256",
          process.env.RAZORPAY_KEY_SECRET
        )
        .update(
          body.razorpay_order_id +
            "|" +
            body.razorpay_payment_id
        )
        .digest("hex");

    if (
      generated !==
      body.razorpay_signature
    ) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    await connect();

    await Order.create({
      customer: body.customer,
      items: body.items,
      amount: body.amount,
      razorpayOrderId:
        body.razorpay_order_id,
      razorpayPaymentId:
        body.razorpay_payment_id,
      paymentStatus: "paid",
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}