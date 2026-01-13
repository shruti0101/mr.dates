"use client";
import React, { useState } from "react";
import { categories } from "@/Data/data";

import Head from "next/head";
// import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";



import Image from "next/image"
import { Star } from "lucide-react"
export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
// const [successMessage, setSuccessMessage] = useState("");
// const [loading, setLoading] = useState(false);


  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  return (
    
      <>
  <Head>
    <title>{product.metaTitle || product.name}</title>
    <meta
      name="description"
      content={product.metaDescription || product.name}
    />
  </Head>

   {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/bg3.png')",
        }}
      >
      <div className="absolute inset-0 bg-black/30 "></div>
<div className="relative z-10 text-white px-6 ">
  <h2 className="max-w-4xl  text-center font-serif tracking-wide text-2xl md:text-[85px] font-medium z-10 ">
            {product.name}
          </h2>


   

</div>

      
      </div>
   

  {/* MAIN */}



    <section className="bg-[#FDFBF7] py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-start">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative">
          {/* Badge */}
          <div className="absolute top-6 left-6 z-10 space-y-2">
            <span className="block bg-[#7a1f2b] text-white text-xs tracking-wide px-4 py-2">
              Grand Reserve
            </span>
            <span className="block bg-white text-black text-xs tracking-widest px-4 py-2 border">
              GRADE A
            </span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <Image
              src={product.image.src}
              alt="Imperial Medjool Dates"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="pt-4">

          {/* Reviews */}
          <div className="flex items-center gap-3 text-sm text-[#9c9c9c]">
            <div className="flex gap-[2px] text-[#c9a24d]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="uppercase tracking-widest text-xs">
              128 Reviews
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-[85px] leading-[1.05] font-serif text-[#6b1f2b]">
    {product.name}
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-lg italic text-[#7a7a7a] ">
            “The Diamond of Dates”
          </p>

          {/* Description */}
          <p className="mt-8 max-w-xl text-[23px] leading-[1.5] text-black">
        {product.excerpt}
          </p>

          {/* Divider */}
          <div className="mt-10 w-full h-px bg-[#e6e1da]" />

          {/* ================= ORDER QUANTITY ================= */}
<div className="mt-8 bg-[#f6efe5] rounded-2xl p-8 max-w-xl">

  {/* Quantity Row */}
  <div className="flex items-center justify-between">
    <span className="text-base text-[#3b3b3b]">
      Contact to Order
    </span>

    <div className="flex items-center border border-[#e2d6c6] rounded-lg overflow-hidden bg-white">
      {/* <button className="w-12 h-12 flex items-center justify-center text-xl text-[#7a1f2b]">
        –
      </button>

      <span className="w-16 text-center text-xl font-medium text-[#7a1f2b]">
        50
      </span> */}

      {/* <button className="w-12 h-12 flex items-center justify-center text-xl text-[#7a1f2b]">
        +
      </button> */}
    </div>
  </div>

  {/* Divider */}
  <div className="my-6 h-px bg-[#e2d6c6]" />

  {/* CTA Button */}
  <button className="w-full cursor-pointer bg-[#8b2d36] text-white py-4 rounded-xl text-md tracking-[0.25em] flex items-center justify-center gap-4 hover:bg-[#7a1f2b] transition">
    REQUEST QUOTE
    <span className="text-xl">→</span>
  </button>

  <button className="w-full cursor-pointer mt-2 bg-[#1c7e26] text-white py-4 rounded-xl text-md tracking-[0.25em] flex items-center justify-center gap-4  transition">
   WHATSAPP US
    <span className="text-xl">→</span>
  </button>
</div>


{/* ================= PRODUCT HIGHLIGHTS ================= */}
<div className="mt-10 pt-10 border-t border-[#e6e1da]">
  <div className="grid grid-cols-3 items-center text-center">

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
      <span className="text-xs tracking-[0.25em] text-[#6b170d]">
        ORGANIC
      </span>
    </div>

    {/* Divider */}
    <div className="absolute left-1/3 h-10 w-px bg-[#e6e1da]" />

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
      <span className="text-xs tracking-[0.25em] text-[#6b170d]">
        GRADE A
      </span>
    </div>

    {/* Divider */}
    <div className="absolute left-2/3 h-10 w-px bg-[#e6e1da]" />

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
      <span className="text-xs tracking-[0.25em] text-[#6b170d]">
        GLOBAL SHIP
      </span>
    </div>

  </div>
</div>



        </div>
      </div>
    </section>


    {/* ================= PRODUCT DETAILS ================= */}
<section className="bg-[#F5F2EC] py-24">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20">

    {/* ================= LEFT CONTENT ================= */}
    <div>
      <span className="block text-xs tracking-[0.25em] text-[#8b7b6a] uppercase mb-4">
        The Details
      </span>

      <h2 className="text-[52px] leading-tight font-serif text-[#6b1f2b]">
        Exquisite Profile
      </h2>

      <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-[#6f6f6f]">
        Each Medjool date is a testament to the rich soils of the Jordan
        Valley. With a skin that yields to a creamy, fibrous flesh, the
        taste profile balances deep molasses with subtle hints of cinnamon.
      </p>

      {/* Meta Info */}
      <div className="mt-14 grid grid-cols-2 gap-x-16 gap-y-12">

        <div className="flex gap-4">
          <div className="w-px bg-[#d2b48c]" />
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-[#8b7b6a]">
              Variety
            </span>
            <span className="block mt-2 text-xl font-serif text-[#6b1f2b]">
              Jumbo Medjool
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-px bg-[#d2b48c]" />
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-[#8b7b6a]">
              Origin
            </span>
            <span className="block mt-2 text-xl font-serif text-[#6b1f2b]">
              Jordan Valley
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-px bg-[#d2b48c]" />
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-[#8b7b6a]">
              Harvest
            </span>
            <span className="block mt-2 text-xl font-serif text-[#6b1f2b]">
              Sept – Oct
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
    </div>

    {/* ================= RIGHT CARD ================= */}
    <div className="bg-white rounded-3xl p-12 relative shadow-sm">

      {/* Decorative Icon */}
      <div className="absolute top-8 right-8 opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#6b1f2b" strokeWidth="1.5">
          <path d="M12 2C7 7 4 10 4 14a8 8 0 0 0 16 0c0-4-3-7-8-12Z" />
        </svg>
      </div>

      <h3 className="text-[34px] font-serif text-[#6b1f2b]">
        Nutritional Composition
      </h3>

      <p className="mt-2 text-sm text-[#8b7b6a]">
        Per 100g Serving
      </p>

      <div className="mt-10 space-y-6 text-[16px]">

        <div className="flex justify-between border-b border-dotted pb-2">
          <span>Energy</span>
          <span className="font-medium text-[#6b1f2b]">277 kcal</span>
        </div>

        <div className="flex justify-between border-b border-dotted pb-2">
          <span>Carbohydrates</span>
          <span className="font-medium text-[#6b1f2b]">75g</span>
        </div>

        <div className="flex justify-between text-[#7a7a7a]">
          <span>Dietary Fiber</span>
          <span>7g</span>
        </div>

        <div className="flex justify-between text-[#7a7a7a]">
          <span>Natural Sugars</span>
          <span>66g</span>
        </div>

        <div className="flex justify-between border-b border-dotted pb-2">
          <span>Potassium</span>
          <span className="font-medium text-[#6b1f2b]">696mg</span>
        </div>

        <div className="flex justify-between">
          <span>Protein</span>
          <span className="font-medium text-[#6b1f2b]">1.8g</span>
        </div>

      </div>
    </div>

  </div>
</section>

 
</>

    
  );
}
