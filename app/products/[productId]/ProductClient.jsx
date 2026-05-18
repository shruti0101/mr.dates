"use client";

import React, { useState, useEffect } from "react";
import { categories } from "@/Data/data";
import { useCartStore } from "@/store/cartStore";
import CartDrawer from "@/store/cartDrawer";
import { toast } from "react-hot-toast";

import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
} from "lucide-react";

import Head from "next/head";
import Image from "next/image";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);

  const allProducts = categories.flatMap((c) => c.products);

  const product = allProducts.find(
    (p) => p.id === productId
  );

  const [cartOpen, setCartOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [selectedPack, setSelectedPack] = useState(
    product?.packaging?.[0] || null
  );

  // ================= STORE =================

  const cart = useCartStore((state) => state.cart);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const addToWishlist = useCartStore(
    (state) => state.addToWishlist
  );

  const loadStorageData = useCartStore(
    (state) => state.loadStorageData
  );

  useEffect(() => {
    loadStorageData();
  }, []);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">
        Product not found
      </h2>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPack);

    setCartOpen(true);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product, selectedPack);

    toast.success("Added to wishlist");
  };

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>

        <meta
          name="description"
          content={
            product.metaDescription || product.name
          }
        />
      </Head>

      {/* MAIN */}
      <section className="bg-[#FDFBF7] my-15 md:mt-18">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10 items-start max-md:grid-cols-1 max-md:px-4 max-md:gap-0">

          {/* LEFT IMAGE */}
          <div className="md:sticky top-0 mt-11 overflow-hidden max-md:mt-6">
            <Image
              src={product.image.src}
              alt={product.image.alt || product.name}
              width={450}
              height={200}
              className="object-cover max-md:w-full max-md:h-auto"
              priority
            />
          </div>

          {/* RIGHT */}
          <div className="mt-10">

            {/* TITLE */}
            <h1 className="mt-8 text-[60px] text-[#6b1f2b]">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl text-[20px] leading-[1.5] text-black max-md:text-[16px]">
              {product.excerpt}
            </p>

            {/* PRICE */}
            <div className="flex items-center gap-3 mt-5">
              <p className="text-red-600 text-2xl font-semibold">
                {selectedPack?.price || product.price}
              </p>

              {selectedPack?.weight && (
                <p className="text-md text-red-600 capitalize">
                  ({selectedPack.weight} pack)
                </p>
              )}
            </div>

            {/* PACKAGING */}
            <div className="md:mt-8 mt-4 max-w-xl">

              <h3 className="text-sm tracking-[0.25em] uppercase text-black mb-4">
                Select Packaging 📦
              </h3>

              {Array.isArray(product.packaging) &&
                product.packaging.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {product.packaging.map(
                      (pack, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setSelectedPack(pack)
                          }
                          className={`rounded-xl py-3 transition
                          ${
                            selectedPack?.weight ===
                            pack.weight
                              ? "border-2 border-[#8b2d36] bg-[#f6efe5]"
                              : "border border-[#e2d6c6] bg-white"
                          }`}
                        >
                          <span className="text-2xl font-serif text-[#6b1f2b]">
                            {pack.weight}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                )}
            </div>

            {/* QUANTITY */}
            <div className="mt-6">

              <h3 className="font-bold mb-3">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <div className="flex bg-gray-200 w-fit p-3 rounded-md items-center gap-4">

                  <button
                    onClick={() =>
                      setQuantity((prev) =>
                        Math.max(1, prev - 1)
                      )
                    }
                    className="p-1 border rounded-md"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="text-md font-medium">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(
                        (prev) => prev + 1
                      )
                    }
                    className="p-1 border rounded-md"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-7 bg-[#f6efe5] rounded-2xl p-6 max-w-xl">

              <div className="flex flex-row gap-4 max-md:flex-col">

                {/* ADD TO CART */}
                <button
                  onClick={handleAddToCart}
                  className="w-full cursor-pointer bg-black text-white py-3 rounded-xl text-lg tracking-[0.18em] flex items-center justify-center gap-3 hover:bg-[#7a1f2b] transition relative"
                >
                  Add To Cart

                  <ShoppingCart size={22} />

                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* WISHLIST */}
                <button
                  onClick={handleAddToWishlist}
                  className="w-full cursor-pointer bg-[#8b2d36] text-white py-3 rounded-xl text-lg tracking-[0.18em] flex items-center justify-center gap-3 transition hover:bg-black"
                >
                  Add To Wishlist

                  <Heart size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#FDFBF7] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-[36px] md:text-[56px] font-serif text-[#6b1f2b] mb-10">
            You May Also Desire
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {categories
              .find((c) =>
                c.products.some(
                  (p) => p.id === product.id
                )
              )
              ?.products.filter(
                (p) => p.id !== product.id
              )
              .slice(0, 4)
              .map((item) => (
                <a
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-[#6b1f2b]">

                    <Image
                      src={item.image.src}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 text-center">

                    <h3 className="text-[22px] font-serif text-[#6b1f2b]">
                      {item.name}
                    </h3>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CART DRAWER */}
      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
      />
    </>
  );
}