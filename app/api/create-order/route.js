import { NextResponse } from "next/server";
import razorpay from "@/utils/razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    console.log(
      "Creating Razorpay order using key:",
      process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID : "<missing>",
    );

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    console.log(
      "Razorpay order created:",
      order && order.id ? order.id : order,
    );

    return NextResponse.json(order);
  } catch (err) {
    console.error("Create-order error:", err?.message || err);
    // If Razorpay provided a structured error, log it for debugging
    if (err?.errors) console.error("Razorpay errors:", err.errors);
    if (err?.response) console.error("Razorpay response:", err.response);

    return NextResponse.json(
      { error: err?.message || "Order creation failed" },
      { status: 500 },
    );
  }
}
