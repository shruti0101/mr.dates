import { NextResponse } from "next/server";
import razorpay from "@/utils/razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const order =
      await razorpay.orders.create({
        
        amount: amount * 100,
        currency: "INR",
        receipt:
          "receipt_" + Date.now(),
      });

    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}