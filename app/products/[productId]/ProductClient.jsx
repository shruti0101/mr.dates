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
 <section className="relative bg-[#FDFBF7] py-16 mt-18">

  {/* Background Blurs */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8921C]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7a1f2b]/10 rounded-full blur-3xl"></div>

  <div className="w-full mx-auto px-6 lg:px-22 grid lg:grid-cols-2 gap-14 items-start">

    {/* LEFT IMAGE */}
    <div className="lg:sticky top-30">

      <div className="relative bg-gradient-to-b from-[#fffaf3] to-[#f6efe5] rounded-[40px] p-8 border border-[#e8dfd2] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <span className="absolute top-5 left-5 bg-[#C8921C] text-white px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em]">
          Best Seller
        </span>

        <Image
          src={product.image.src}
          alt={product.image.alt || product.name}
          width={550}
          height={550}
          priority
          className="mx-auto object-cover hover:scale-105 transition duration-700"
        />

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div>

      <span className="inline-block bg-[#C8921C]/10 text-[#C8921C] px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em]">
        Premium Collection
      </span>

      {/* TITLE */}
      <h1 className="mt-5 text-5xl lg:text-6xl font-light text-[#072143] leading-none">
        {product.name}
      </h1>

      <p className="mt-4 text-lg italic text-[#9b7a42]">
        ✦ The Diamond of Dates
      </p>

      {/* DESCRIPTION */}
      <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-2xl">
        {product.excerpt}
      </p>

      {/* PRICE */}
      <div className="mt-8 flex items-end gap-4">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Starting From
          </p>

          <h2 className="text-4xl font-light text-[#072143]">
            {selectedPack?.price || product.price}
          </h2>
        </div>

        {selectedPack?.weight && (
          <span className="bg-[#f6efe5] px-4 py-2 rounded-full text-[#7a1f2b] font-medium">
            {selectedPack.weight}
          </span>
        )}

      </div>

      {/* PACKAGING */}
      <div className="mt-10">

        <h3 className="text-sm uppercase tracking-[0.25em] text-[#072143] mb-5">
          Select Packaging
        </h3>

        {Array.isArray(product.packaging) &&
          product.packaging.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

              {product.packaging.map((pack, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedPack(pack)}
                  className={`rounded-2xl py-5 border transition-all duration-300 hover:-translate-y-1

                  ${
                    selectedPack?.weight === pack.weight
                      ? "border-[#C8921C] bg-gradient-to-b from-[#fffaf0] to-[#f6efe5] shadow-xl"
                      : "border-[#ece2d3] bg-white hover:border-[#C8921C]/50 hover:shadow-lg"
                  }
                  `}
                >
                  <div className="text-center">

                    <span className="block text-3xl font-serif text-[#072143]">
                      {pack.weight}
                    </span>

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Pack Size
                    </span>

                  </div>
                </button>

              ))}
            </div>
          )}
      </div>

      {/* QUANTITY */}
      <div className="mt-10">

        <h3 className="font-semibold text-[#072143] mb-4">
          Quantity
        </h3>

        <div className="inline-flex items-center bg-[#f7f4ef] border border-[#ebe3d7] rounded-2xl p-2 gap-5">

          <button
            onClick={() =>
              setQuantity((prev) => Math.max(1, prev - 1))
            }
            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center"
          >
            <Minus size={16} />
          </button>

          <span className="text-xl font-medium min-w-[30px] text-center">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((prev) => prev + 1)
            }
            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center"
          >
            <Plus size={16} />
          </button>

        </div>
      </div>

      {/* CTA BOX */}
      <div className="mt-10 relative overflow-hidden rounded-[32px] border border-[#eadfce] bg-gradient-to-r from-[#fffdf9] via-[#f8f3eb] to-[#fffdf9] p-8">

        <div className="absolute right-0 top-0 h-full w-40 bg-[#C8921C]/5 blur-3xl"></div>

        <div className="flex flex-col md:flex-row gap-4 relative z-10">

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-black to-[#333] text-white py-4 rounded-2xl text-lg tracking-[0.15em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all relative"
          >
            Add To Cart

            <ShoppingCart size={22} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-6 w-6 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          <button
            onClick={handleAddToWishlist}
            className="w-full bg-gradient-to-r from-[#d2af53] to-[#072143] text-white py-4 rounded-2xl text-lg tracking-[0.15em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
          >
            Add To Wishlist
            <Heart size={22} />
          </button>

        </div>

      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-10 pt-8 border-t border-[#e8dfd4]">

        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white rounded-2xl p-5 text-center border border-[#eee4d7] shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-3">🌿</div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#072143]">
              Organic
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-center border border-[#eee4d7] shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-3">💎</div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#072143]">
              Premium Quality
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-center border border-[#eee4d7] shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-3">🚚</div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#072143]">
              Global Shipping
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>








     {/*  PRODUCT DETAILS  */}
      <section className="bg-[#F5F2EC] py-20 max-md:py-6">
        <div className="w-full mx-auto px-22 grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:px-4 max-md:gap-12">
          {/*  LEFT CONTENT  */}
          <div className="order-2 md:order-1">
            <span className="block text-sm tracking-[0.25em] text-black uppercase mb-4 max-md:text-xs">
              Crafted Details 🌿
            </span>

            <h2 className="text-[80px] leading-tight  text-[#072143] max-md:text-[44px]">
              Product Attributes
            </h2>

            {/* Meta Info */}
            <div className="relative md:mt-10 mt-2 grid grid-cols-2 gap-x-16 gap-y-12 max-md:grid-cols-1 max-md:gap-y-8">
              <div className="flex gap-4">
                <div className="w-px bg-[#d2b48c]" />
                <div>
                  <span className="block text-xs tracking-[0.2em] uppercase text-[#8b7b6a]">
                    Variety
                  </span>
                  <span className="block mt-2 text-xl font-serif text-[#072143]">
                    {product.variety}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-px bg-[#d2b48c]" />
                <div>
                  <span className="block text-xs tracking-[0.2em] uppercase text-[#8b7b6a]">
                    Texture
                  </span>
                  <span className="block mt-2 text-xl font-serif text-[#072143]">
                    Soft &amp; Fleshy
                  </span>
                </div>
              </div>
            </div>

            {/*  PRODUCT DESCRIPTION  */}
            <div className=" mt-10 space-y-8 max-w-xl">
              {product.description.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h3
                        key={index}
                        className="text-[28px] font-serif text-[#072143] leading-tight max-md:text-[22px]"
                      >
                        {block.text}
                      </h3>
                    );

                  case "p":
                    return (
                      <p
                        key={index}
                        className="text-[18px] leading-[1.8] text-black max-md:text-[16px]"
                      >
                        {block.text}
                      </p>
                    );

                  case "ul":
                    return (
                      <ul
                        key={index}
                        className="list-disc pl-6 space-y-3 text-[17px] text-black max-md:text-[15px]"
                      >
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </div>

          {/*  RIGHT CARD  */}
          <div className="order-1 md:order-2 md:sticky top-10 bg-white relative rounded-3xl p-12  shadow-sm h-270 max-md:p-6 max-md:static">
            {/* Decorative Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg
                width="90"
                height="90"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#072143"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M32 6c-8 8-14 16-14 26 0 12 6 20 14 20s14-8 14-20c0-10-6-18-14-26Z" />
                <path d="M26 18c-2 6-2 18 0 26" />
                <path d="M32 16c-1 7-1 22 0 30" />
                <path d="M38 18c2 6 2 18 0 26" />
              </svg>
            </div>

            <h3 className="text-[34px] font-serif text-[#072143] max-md:text-[26px]">
              Product Specifications
            </h3>

            <p className="mt-2 text-sm text-[#8b7b6a]">
              Key Product Details 📜
            </p>

            {/*  SPECS TABLE  */}
            <div className="mt-5 space-y-4 text-[16px]">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between max-md:flex-col max-md:gap-1 ${
                    index !== product.specs.length - 1
                      ? "border-b border-dotted pb-2"
                      : ""
                  }`}
                >
                  <span className="text-black text-lg max-md:text-base">
                    {spec.label}
                  </span>

                  <span className="font-medium text-lg text-[#072143] text-right max-w-[55%] max-md:max-w-full max-md:text-left max-md:text-base">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>







      {/* RELATED */}
     <section className="bg-[#FDFBF7]  py-20 max-md:py-14">
        <div className="max-w-7xl mx-auto px-6 max-md:px-4">
          {/* Section Header */}
          <p className="italic text-[#b0895a] mb-3">Curated Selection 🤎</p>

          <h2 className="text-[36px] md:text-[56px] font-serif text-[#072143] mb-10 max-md:text-[28px]">
            You May Also Desire
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-md:gap-6">
            {categories
              .find((c) => c.products.some((p) => p.id === product.id))
              ?.products.filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <a
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group"
                >
                  {/* Image Card */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-1 border-[#072143] bg-black/20">
                    {/* Badge */}
                    {item.badge && (
                      <span
                        className={`absolute top-4 left-4 z-10 px-4 py-2 text-xs tracking-widest uppercase text-white
                ${item.badge === "bestseller" ? "bg-[#8b2d36]" : "bg-black"}`}
                      >
                        {item.badge === "bestseller"
                          ? "Best Seller"
                          : "Limited"}
                      </span>
                    )}

                    <Image
                      src={item.image.src}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-[22px] font-serif text-[#072143] max-md:text-[18px]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs tracking-[0.25em] uppercase text-[#8b7b6a]">
                      {item.variety || "Premium Selection"}
                    </p>
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