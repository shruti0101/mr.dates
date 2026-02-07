"use client";
import React, { useState } from "react";
import { categories } from "@/Data/data";

import Head from "next/head";

import Image from "next/image";
import { Star } from "lucide-react";
export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  //   const [submitted, setSubmitted] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);


  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }



  const handleWhatsApp = () => {
    const phoneNumber = "+919773999082";
    const message = `Hello, I want to enquire about ${product.name}.
Packaging: ${selectedPack?.type || "Not Selected"} 
Weight: ${selectedPack?.weight || "-"}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* MAIN */}
      <section className="bg-[#FDFBF7]  mt-3">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10 items-start max-md:grid-cols-1 max-md:px-4 max-md:gap-0">
          {/* ================= LEFT IMAGE ================= */}
          <div className="md:sticky top-0 mt-11 overflow-hidden max-md:mt-6">
            <Image
              src={product.image.src}
              alt={product.image.alt || product.name}
              width={450}
              height={200}
              className="  object-cover max-md:w-full max-md:h-auto"
              priority
            />
          </div>

          {/* right content */}
          <div className="mt-17 max-md:mt-0">
            {/* Title */}
            <h1 className="mt-8 text-[85px] leading-[1.05]  text-[#6b1f2b] max-md:text-[44px] max-md:mt-0">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="mt-2 text-lg italic text-[#7a7a7a] max-md:text-base">
              “The Diamond of Dates 🌴”
            </p>

            {/* Description */}
            <p className="mt-3 max-w-xl text-[20px] leading-[1.5] text-black max-md:text-[16px] max-md:leading-[1.6]">
              {product.excerpt}
            </p>

            {/* Divider */}
            <div className="mt-6 w-full h-px bg-[#e6e1da]" />

            {/* ================= SELECT PACKAGING ================= */}
            <div className="md:mt-8 mt-4 max-w-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm tracking-[0.25em] uppercase text-black max-md:text-xs">
                  Select Packaging 📦
                </h3>
              </div>

              {Array.isArray(product.packaging) && product.packaging.length > 0 && (
                <>
                  {/* Options */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-2">
                    {product.packaging.map((pack, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPack(pack)}
                        className={`rounded-xl p-5 text-left transition
                          ${selectedPack?.weight === pack.weight
                            ? "border-2 border-[#8b2d36] bg-[#f6efe5]"
                            : "border border-[#e2d6c6] bg-white hover:border-[#8b2d36]"
                          }`}>

                        <span className="block text-xs tracking-[0.25em] uppercase text-[#8b7b6a]">
                          {pack.type}
                        </span>

                        <span className="block mt-3 text-2xl font-serif text-[#6b1f2b] text-center">
                          {pack.weight}
                        </span>

                        {pack.price && (
                          <span className="block mt-2 text-sm text-[#6b1f2b]">
                            {pack.price}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ================= ORDER QUANTITY ================= */}
            <div className="mt-7 bg-[#f6efe5] rounded-2xl p-6 max-w-xl max-md:p-4">
              {/* Quantity Row */}
              <div className="flex  items-center justify-between">
                <span className="text-base text-[#3b3b3b] max-md:text-sm">
                  Contact to Order
                </span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-[#e2d6c6]" />

              <div className="flex flex-row gap-4 max-md:flex-col">
                {/* CTA Button */}
                <a href="tel:+919773999082" className="w-full cursor-pointer bg-[#8b2d36] text-white py-3 rounded-xl text-lg tracking-[0.25em] flex items-center justify-center gap-4 hover:bg-[#7a1f2b] transition max-md:text-base max-md:tracking-[0.15em]">
                  REQUEST QUOTE
                  <span className="text-xl">→</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="w-full cursor-pointer bg-[#1c7e26] text-white py-3 rounded-xl text-lg tracking-[0.25em] flex items-center justify-center gap-4 transition"
                >
                  WHATSAPP US
                  <span className="text-xl">→</span>
                </button>

              </div>
            </div>

            {/* ================= PRODUCT HIGHLIGHTS ================= */}
            <div className="md:mt-10 mt-4 md:pt-10 pt-4 border-t border-[#e6e1da] mb-7">
              <div className="grid grid-cols-3 items-center text-center max-md:grid-cols-3 max-md:gap-2">
                {/* Organic */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b5a4a"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C7 7 4 10 4 14a8 8 0 0 0 16 0c0-4-3-7-8-12Z" />
                    </svg>
                  </div>
                  <span className="text-xs tracking-[0.25em] text-[#6b170d] max-md:text-[14px]">
                    ORGANIC
                  </span>
                </div>

                {/* Grade A */}
                <div className="flex flex-col items-center gap-4 relative">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b5a4a"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M9 14v7l3-2 3 2v-7" />
                      <path d="M12 6.5l1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 8.8l2-.3 1-2Z" />
                    </svg>
                  </div>
                  <span className="text-xs tracking-[0.25em] text-[#6b170d] max-md:text-[14px]">
                    BEST QUALTIY
                  </span>
                </div>

                {/* Global Ship */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b5a4a"
                      strokeWidth="1.5"
                    >
                      <rect x="1" y="7" width="15" height="10" rx="2" />
                      <path d="M16 10h4l3 3v4h-7z" />
                      <circle cx="5.5" cy="18.5" r="1.5" />
                      <circle cx="18.5" cy="18.5" r="1.5" />
                    </svg>
                  </div>
                  <span className="text-xs tracking-[0.25em] text-[#6b170d] max-md:text-[14px]">
                    GLOBAL SHIP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="bg-[#F5F2EC] py-20 max-md:py-6">
        <div className="w-full mx-auto px-22 grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:px-4 max-md:gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 md:order-1">
            <span className="block text-sm tracking-[0.25em] text-black uppercase mb-4 max-md:text-xs">
              Crafted Details 🌿
            </span>

            <h2 className="text-[80px] leading-tight  text-[#6b1f2b] max-md:text-[44px]">
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
                  <span className="block mt-2 text-xl font-serif text-[#6b1f2b]">
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
                  <span className="block mt-2 text-xl font-serif text-[#6b1f2b]">
                    Soft &amp; Fleshy
                  </span>
                </div>
              </div>
            </div>

            {/* ================= PRODUCT DESCRIPTION ================= */}
            <div className=" mt-10 space-y-8 max-w-xl">
              {product.description.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h3
                        key={index}
                        className="text-[28px] font-serif text-[#6b1f2b] leading-tight max-md:text-[22px]"
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

          {/* ================= RIGHT CARD ================= */}
          <div className="order-1 md:order-2 md:sticky top-10 bg-white relative rounded-3xl p-12  shadow-sm h-200 max-md:p-6 max-md:static">
            {/* Decorative Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg
                width="90"
                height="90"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#6b1f2b"
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

            <h3 className="text-[34px] font-serif text-[#6b1f2b] max-md:text-[26px]">
              Product Specifications
            </h3>

            <p className="mt-2 text-sm text-[#8b7b6a]">Key Product Details 📜</p>

            {/* ================= SPECS TABLE ================= */}
            <div className="mt-5 space-y-4 text-[16px]">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between max-md:flex-col max-md:gap-1 ${index !== product.specs.length - 1
                    ? "border-b border-dotted pb-2"
                    : ""
                    }`}
                >
                  <span className="text-black text-lg max-md:text-base">{spec.label}</span>

                  <span className="font-medium text-lg text-[#6b1f2b] text-right max-w-[55%] max-md:max-w-full max-md:text-left max-md:text-base">
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

          <h2 className="text-[36px] md:text-[56px] font-serif text-[#6b1f2b] mb-10 max-md:text-[28px]">
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
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-1 border-[#6b1f2b] bg-black/20">
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
                    <h3 className="text-[22px] font-serif text-[#6b1f2b] max-md:text-[18px]">
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
    </>
  );
}
