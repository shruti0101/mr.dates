import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: Object,

    items: Array,

    amount: Number,

    razorpayOrderId: String,

    razorpayPaymentId: String,

    paymentStatus: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);