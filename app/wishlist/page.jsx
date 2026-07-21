"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";

import { useCartStore } from "@/store/cartStore";

export default function WishlistPage() {
  const wishlist = useCartStore(
    (state) => state.wishlist
  );

  const removeFromWishlist = useCartStore(
    (state) => state.removeFromWishlist
  );

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <section className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#072143]">
            Your Favorites
          </p>

          <h1 className="text-5xl md:text-7xl text-[#072143] mt-3">
            Wishlist
          </h1>
        </div>

        {/* EMPTY */}
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm">
            <h2 className="text-3xl text-[#072143]">
              Your wishlist is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Save products you love here.
            </p>

            <Link
              href="/products"
              className="inline-flex mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-[#072143] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {wishlist.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#eee]"
                >
                  {/* IMAGE */}
                  <Link href={`/products/${item.id}`}>
                    <div className="relative h-[350px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain hover:scale-105 transition duration-700"
                      />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h2 className="text-3xl text-[#072143]">
                      {item.name}
                    </h2>

                    {item.pack?.weight && (
                      <p className="mt-2 text-sm text-gray-500 uppercase tracking-widest">
                        {item.pack.weight} Pack
                      </p>
                    )}

                    <p className="mt-4 text-2xl font-semibold text-[#072143]">
                      {item.price}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex gap-3 mt-6">

                      {/* ADD TO CART */}
                      <button
                        onClick={() =>
                          addToCart(
                            item,
                            1,
                            item.pack
                          )
                        }
                        className="flex-1 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#072143] transition"
                      >
                        Add To Cart

                        <ShoppingCart size={20} />
                      </button>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          removeFromWishlist(
                            item.id,
                            item.pack?.weight
                          )
                        }
                        className="w-14 flex items-center justify-center rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}