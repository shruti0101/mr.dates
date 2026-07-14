"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const updateQuantity = useCartStore(
    (state) => state.updateQuantity
  );

  const totalPrice = cart.reduce((acc, item) => {
    const price =
      Number(
        String(item.price).replace(/[^\d]/g, "")
      ) || 0;

    return acc + price * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#072143]">
            Your Order
          </p>

          <h1 className="text-5xl md:text-7xl text-[#072143] mt-3">
            Shopping Cart
          </h1>
        </div>

        {/* EMPTY */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm">
            <h2 className="text-3xl text-[#072143]">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add products to continue shopping.
            </p>

            <Link
              href="/products"
              className="inline-flex mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-[#072143] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_420px] gap-10">

            {/* LEFT */}
            <div className="space-y-6">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-5 flex gap-5 shadow-sm border border-[#eee] max-md:flex-col"
                >
                  {/* IMAGE */}
                  <Link
                    href={`/products/${item.id}`}
                    className="relative w-[180px] h-[180px] rounded-2xl overflow-hidden shrink-0 max-md:w-full"
                  >
                    <Image
                      src={item.image.src}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>
                      <h2 className="text-3xl text-[#072143]">
                        {item.name}
                      </h2>

                      {item.pack?.weight && (
                        <p className="mt-2 text-sm tracking-widest uppercase text-gray-500">
                          {item.pack.weight} Pack
                        </p>
                      )}

                      <p className="mt-4 text-2xl font-semibold text-[#072143]">
                        {item.price}
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between mt-6 flex-wrap gap-4">

                      {/* QUANTITY */}
                      <div className="flex items-center gap-4 bg-[#f5f5f5] rounded-xl px-4 py-3">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.pack?.weight,
                              "dec"
                            )
                          }
                          className="border rounded-md p-1 hover:bg-white transition"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="font-semibold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.pack?.weight,
                              "inc"
                            )
                          }
                          className="border rounded-md p-1 hover:bg-white transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.pack?.weight
                          )
                        }
                        className="text-red-500 hover:text-red-700 transition flex items-center gap-2"
                      >
                        <Trash2 size={18} />

                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eee] h-fit sticky top-32">

              <h3 className="text-3xl text-[#072143]">
                Order Summary
              </h3>

              {/* SUMMARY */}
              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between text-lg">
                  <span>Items</span>

                  <span>{cart.length}</span>
                </div>

                <div className="flex items-center justify-between text-lg">
                  <span>Shipping</span>

                  <span>Free</span>
                </div>

                <div className="border-t pt-5 flex items-center justify-between text-2xl font-semibold">
                  <span>Total</span>

                  <span className="text-[#072143]">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <Link
                href="/checkout"
                className="mt-8 w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#072143] transition text-lg"
              >
                Proceed To Checkout

                <ShoppingBag size={22} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}