import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connect();

    const orders = await Order.find().sort({ createdAt: -1 }).lean();

    const serialized = orders.map((order) => ({
      ...order,
      _id: order._id.toString(),
      createdAt: order.createdAt?.toISOString(),
      updatedAt: order.updatedAt?.toISOString(),
    }));

    return NextResponse.json(serialized);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to load orders" },
      { status: 500 },
    );
  }
}
