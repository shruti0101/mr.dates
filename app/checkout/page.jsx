"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ShoppingBag, Truck, ShieldCheck } from "lucide-react";

import toast from "react-hot-toast";

import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(String(item.price).replace(/[^\d]/g, "")) || 0;

    return acc + price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
        }),
      });

      const order = await orderRes.json();

      // Ensure server created an order successfully before opening Razorpay
      if (!orderRes.ok || !order || !order.id) {
        console.error("Create order failed:", order);
        toast.error("Unable to create order. Please try again later.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_xxxxxxxx",

        amount: order.amount || totalPrice * 100,

        currency: order.currency,

        name: "Your Brand Name",

        description: "Product Purchase",

        order_id: order.id,

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: "#072143",
        },
        modal: {
          ondismiss: () => {
            toast.error("Payment was not completed. Please try again.");
          },
        },

        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,

                razorpay_payment_id: response.razorpay_payment_id,

                razorpay_signature: response.razorpay_signature,

                customer: {
                  name: formData.name,
                  phone: formData.phone,
                  email: formData.email,
                  address: formData.address,
                  city: formData.city,
                  state: formData.state,
                  pincode: formData.pincode,
                },

                items: cart,

                amount: totalPrice,
              }),
            });

 const result = await verifyRes.json();

console.log("Verify Status:", verifyRes.status);
console.log("Verify Result:", result);

if (!verifyRes.ok || !result.success) {
  alert(JSON.stringify(result, null, 2));
  return;
}

            const orderMessage = `
🛍️ NEW PAID ORDER

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

📍 Address:
${formData.address}
${formData.city},
${formData.state}
${formData.pincode}

━━━━━━━━━━━━━━━

${cart
  .map(
    (item, index) => `
${index + 1}. ${item.name}
Pack: ${item.pack?.weight || "-"}
Qty: ${item.quantity}
Price: ${item.price}
`,
  )
  .join("\n")}

━━━━━━━━━━━━━━━

💰 Total Paid: ₹${totalPrice}

Payment ID:
${response.razorpay_payment_id}
`;

            const whatsappURL = `https://wa.me/917065650411?text=${encodeURIComponent(
              orderMessage,
            )}`;

            window.open(whatsappURL, "_blank");

            clearCart();

            toast.success("Payment Successful");

            setFormData({
              name: "",
              phone: "",
              email: "",
              address: "",
              city: "",
              state: "",
              pincode: "",
            });

            window.location.href = "/order-success";
          } catch (err) {
            console.error(err);

            toast.error("Verification failed");
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      console.log(razorpay)

      razorpay.on("payment.failed", function (response) {
        console.error("Razorpay payment failed", response);
        toast.error("Payment failed. Please try again.");
        window.location.href = "/order-failure";
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("Payment Failed");
      toast.error(error);
      window.location.href = "/order-failure";
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#072143]">
            Secure Checkout
          </p>

          <h1 className="text-5xl md:text-7xl text-[#072143] mt-3">Checkout</h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm">
            <h2 className="text-3xl text-[#072143]">Your cart is empty</h2>

            <p className="mt-3 text-gray-500">Add products before checkout.</p>

            <Link
              href="/products"
              className="inline-flex mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-[#072143] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_430px] gap-10">
            {/* LEFT */}
            <form
              onSubmit={handleOrder}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#eee]"
            >
              <h2 className="text-3xl text-[#072143] mb-8">Billing Details</h2>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black md:col-span-2"
                />

                <textarea
                  name="address"
                  placeholder="Full Address"
                  required
                  rows={5}
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black md:col-span-2"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  className="border border-[#ddd] rounded-xl px-5 py-4 outline-none focus:border-black"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full bg-black text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#072143] transition text-lg disabled:opacity-50"
              >
                {loading ? "Processing..." : "Place Order"}

                <ShoppingBag size={22} />
              </button>
            </form>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eee] h-fit sticky top-32">
              <h2 className="text-3xl text-[#072143]">Order Summary</h2>

              {/* PRODUCTS */}
              <div className="mt-8 space-y-5">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg text-[#072143]">{item.name}</h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.pack || "-"}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <span>Qty: {item.quantity}</span>

                        <span className="font-semibold text-[#072143]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="border-t mt-8 pt-6">
                <div className="flex items-center justify-between text-2xl font-semibold">
                  <span>Total</span>

                  <span className="text-[#072143]">₹{totalPrice}</span>
                </div>
              </div>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck size={18} />
                  Free Delivery Available
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck size={18} />
                  Safe & Secure Checkout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
