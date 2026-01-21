"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";

import { motion } from "framer-motion";
import  Parallax  from "@/components/Parallex";
import Cta from "@/components/Cta";




const page = () => {



  




/* ================= SECTION ANIMATIONS ================= */

const heroAnim = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const introAnim = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const leftAnim = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const bottomAnim = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeOnly = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const staggerCards = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};




  

const client=[
  {
    image:"/client1.jpg"
  },

    {
    image:"/client2.jpg"
  },

    {
    image:"/client3.jpg"
  },
]
  

  return (
    <div className=" text-[#2B1B12]">
      {/* ================= HERO SECTION ================= */}
   <motion.div
  variants={heroAnim}
  initial="hidden"
  animate="show"
  className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
  style={{ backgroundImage: "url('/bg3.png')" }}
>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="max-w-5xl  tracking-wide text-3xl md:text-[85px] font-medium leading-tight">
            About Mr. Dates
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white">
            Premium Dates & Dry Fruits | Trusted Supplier | Quality You Can
            Taste
          </p>
        </div>
      </motion.div>

{/* intro */}
<motion.section
  variants={introAnim}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative py-20 bg-[#FBF7F1] overflow-hidden"
>

  
  {/* Subtle background accent */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F4EA9D]/25 via-transparent to-transparent pointer-events-none" />

  <div className="relative max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* ================= TEXT ================= */}
    <div>
      {/* Luxury Tag */}
      <div className="inline-flex items-center gap-3 mb-3">
        <span className="h-[1px] w-10 bg-[#B88A2E]" />
        <span className="uppercase  tracking-[0.25em] text-xs font-semibold text-[#6B091D]">
          About Mr. Dates
        </span>

    <Image src="/date.png" width={45} height={45} alt="Dates icon" ></Image>
      </div>

      <h2 className=" text-4xl md:text-5xl lg:text-[65px] font-semibold leading-tight mb-5 text-[#111]">
        Crafted by Nature.<br />
        Perfected by Us.🍂
      </h2>

      <p className="text-[20px] leading-[1.9] mb-4 text-black max-w-[640px]">
        <span className=" text-[#6B091D]">Mr. Dates</span> is a
        premium dates and dry fruits brand dedicated to delivering authentic
        taste, superior quality, and natural nutrition. We work closely with
        trusted farms and suppliers to bring you the finest handpicked dates —
        rich in flavor, freshness, and goodness.
      </p>

      <p className="text-[20px] leading-[1.9] text-black max-w-[640px] mb-8">
        From sourcing and processing to hygienic packaging and timely delivery,
        every step reflects our commitment to excellence. Retailers,
        wholesalers, and families trust us for consistency, transparency, and
        uncompromising quality.
      </p>

      {/* Trust Metrics */}
      <div className="flex  flex-wrap gap-10 mt-6">
        <div>
          <p className="text-3xl font-bold text-[#6B091D]">15k+</p>
          <p className="text-sm text-  mt-1">Happy Customers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#6B091D]">100%</p>
          <p className="text-sm text-[#555] mt-1">Natural Products</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#6B091D]">Trusted</p>
          <p className="text-sm text-[#555] mt-1">Retail & Wholesale</p>
        </div>
      </div>
    </div>

    {/* ================= IMAGE ================= */}
    <div className="relative flex justify-center lg:justify-end">
      
   

    

      <Image
        src="/aboutpage/1.png"
        alt="About Mr. Dates"
        width={500}
        height={500}
        className="object-cover rounded-[28px] "
      />
    </div>

  </div>
</motion.section>



      {/* best dates */}
<motion.section
  variants={leftAnim}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="bg-[#EEF1EA] py-16 px-4 md:px-12"
>

  <div className="max-w-7xl mx-auto  text-[#111]">

    {/* ================= HEADER BADGE ================= */}
    <div className="flex items-center gap-2 mb-2 bg-[#f4ea9d] text-black px-5 py-3 rounded-full text-sm font-medium w-fit ">
      <span>BEST DATES</span>
      <Image
        width={35}
        height={35}
        src="/date.png"
        alt="Dates icon"
      />
    </div>

    {/* ================= HERO CONTENT ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
      <h1 className="text-3xl sm:text-4xl lg:text-[65px] font-bold leading-tight max-w-[650px] ">
        PURE DATES. NATURAL ENERGY. REAL GOODNESS. 
      </h1>

      <div>
        <p className="text-lg sm:text-[20px] max-w-[520px] mb-6 text-[#333]">
          MR DATES brings you premium-quality dates sourced from the finest farms.
          Naturally sweet, rich in nutrients, and packed with energy — our dates
          are perfect for everyday snacking, gifting, and bulk supply.
        </p>

        <div className="flex flex-wrap items-center gap-10">
          <div>
            <span className="text-lg">⭐️⭐️⭐️⭐️⭐️</span>
            <p className="font-bold mt-2 leading-tight">
              4.8/5 <br />
              <span className="text-sm font-normal text-[#444]">
                Trusted by 15,000+ happy customers
              </span>
            </p>
          </div>

          <div className="flex items-center">
            {client.map((u, i) => (
              <img
                key={i}
                src={u.image}
                width={50}
                height={50  }
                alt="Customer"
                className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-3 first:ml-0 shadow-md"
              />
            ))}
            <div className="bg-[#6B091D] text-white px-3 py-2 rounded-full -ml-3 text-sm shadow-md">
              15k+
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ================= ROW 1 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14 items-stretch">
      {/* Image */}
      <div className="relative group">
        <Image
          width={500}
          height={500}
          src="/aboutpage/1.png"
          alt="Premium dates"
          className="w-full h-[400px] rounded-2xl object-cover shadow-lg"
        />
        <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
          Premium Dates
        </button>
      </div>

      {/* Info */}
      <div className="bg-[#8E1013] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Naturally Sweet. Purely Nutritious.
          </h3>
          <div className="h-px w-full bg-white/40 mb-4" />
          <ul className="space-y-6 text-lg">
            {[
              "100% natural dates with no added sugar or preservatives",
              "Rich source of energy, fiber, and essential minerals",
              "Carefully sourced from trusted farms for premium quality",
              "Perfect for daily snacking, gifting, and bulk supply",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCheck size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="relative group">
        <Image
          width={500}
          height={500}
          src="/banner/2.png"
          alt="Bulk dates supply"
          className="w-full h-[400px] rounded-2xl object-cover shadow-lg"
        />
        <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
          Bulk Orders
        </button>
      </div>
    </div>

    {/* ================= ROW 2 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <div className="lg:col-span-2 relative group">
        <Image
          width={1000}
          height={1000}
          src="/slider/1.png"
          alt="Handpicked dates"
          className="w-full h-[380px] rounded-2xl object-cover shadow-lg"
        />
        <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
          Handpicked Quality
        </button>
      </div>

      <div className="bg-[#8E1013] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            The Authentic Taste of Premium Dates
          </h3>
          <div className="h-px w-full bg-white/40 mb-4" />
          <ul className="space-y-6 text-lg">
            {[
              "Soft texture and rich natural sweetness in every bite",
              "Ideal for health-conscious consumers and fitness diets",
              "Trusted by retailers, wholesalers, and corporate buyers",
              "Hygienically packed to preserve freshness and quality",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCheck size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  </div>
</motion.section>





 {/* ================= MISSION / VISION ================= */}
<section
 
  style={{ backgroundImage: "url(/bg2.png)" }}
  className="relative py-20 bg-cover bg-fixed bg-center"
>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-[#111]/30" />

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* ================= MISSION ================= */}
    <div className="bg-[#FBF7F1]/95 backdrop-blur-sm rounded-[32px] p-12 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
      {/* Accent */}
      <div className="flex items-center gap-3 mb-6">
        <span className="h-[1px] w-10 bg-[#B88A2E]" />
        <span className="uppercase  tracking-[0.25em] text-xs font-semibold text-[#6B091D]">
          Our Mission
        </span>
      </div>

      <h3 className=" text-2xl md:text-4xl font-semibold mb-6 text-[#111]">
        Nourishing Lives with Nature’s Finest
      </h3>

      <p className="text-[17px] leading-[1.9] text-[#111]">
        At <span className="font-semibold text-[#6B091D]">Mr. Dates</span>, our
        mission is to deliver premium-quality dates and dry fruits that reflect
        purity, freshness, and authentic taste. We are committed to responsible
        sourcing, strict hygiene standards, and careful processing — ensuring
        every product supports healthy living and natural nutrition.
      </p>
    </div>

    {/* ================= VISION ================= */}
    <div className="bg-[#FBF7F1]/95 backdrop-blur-sm rounded-[32px] p-12 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
      {/* Accent */}
      <div className="flex items-center gap-3 mb-6">
        <span className="h-[1px] w-10 bg-[#B88A2E]" />
        <span className="uppercase  tracking-[0.25em] text-xs font-semibold text-[#6B091D]">
          Our Vision
        </span>
      </div>

      <h3 className=" text-2xl md:text-4xl font-semibold mb-6 text-[#111]">
        Setting the Standard for Premium Dates
      </h3>

      <p className="text-[17px] leading-[1.9] text-[#111]">
        Our vision is to become one of India’s most trusted and respected brands
        for premium dates and dry fruits — recognized across retail, wholesale,
        and export markets for quality, integrity, and consistency. We aim to
        build lasting relationships through transparency, reliability, and
        exceptional customer experience.
      </p>
    </div>

  </div>
</section>


      {/* parallex slider */}

   <Parallax></Parallax>

{/* ================= WHY CHOOSE US ================= */}
<section className="py-24 bg-[#efcdba]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mb-16">
      <h2 className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111] mb-4">
        Why Choose Mr. Dates 🌾
      </h2>
      <p className="text-[17px] leading-7 text-[#444]">
        Quality, consistency, and trust define everything we deliver.
      </p>
    </div>

    {/* Cards */}
  <motion.div
  variants={staggerCards}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
>

      {[
        {
          title: "Premium Quality Sourcing",
          desc: "Dates sourced from trusted farms, selected for taste, texture, and freshness.",
        },
        {
          title: "Hygienic Processing",
          desc: "Handled and packed under strict hygiene standards to preserve purity.",
        },
        {
          title: "Bulk & Wholesale Supply",
          desc: "Reliable supply for retailers, wholesalers, corporates, and institutions.",
        },
        {
          title: "Fresh & Authentic Taste",
          desc: "Naturally sweet flavor with soft texture — no compromise on authenticity.",
        },
      ].map((item, i) => (
        <div
          key={i}
            variants={cardAnim}
          className="group relative overflow-hidden border border-[#E6E1D9] rounded-2xl bg-[#6B091D] p-6 transition"
        >
          {/* TOP → BOTTOM OVERLAY */}
          <span className="absolute inset-0 bg-[#6B091D]/90 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

          {/* LEFT → RIGHT OVERLAY */}
          <span className="absolute inset-0 bg-[#6B091D]/60 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out delay-150" />

          {/* CONTENT */}
          <div className="relative z-10">
            <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-sm leading-6 text-white group-hover:text-white/90 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </motion.div>

  </div>
</section>




<Cta></Cta>


    </div>
  );
};

export default page;
