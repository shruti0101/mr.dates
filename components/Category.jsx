'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import Image from 'next/image';
const Category = () => {




const cardVariants = {
  hidden: {
    opacity: 0,
    x: 80,       // 👈 comes from right
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};





const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const categories = [
  
  {
    title: "Organic Dates",
    image: "/category/1.png",
  },
  {
    title: "Chocolate Dates",
    image: "/category/2.png",
  },


    {
    title: "Gift Packs",
    image: "/category/3.png",
  },

    {
    title: "Gift Packs",
    image: "/category/4.png",
  },
];





const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "start center"],
});



const leafYLeft = useTransform(scrollYProgress, [0, 1], [-120, 0]);
const leafYRight = useTransform(scrollYProgress, [0, 1], [-80, 0]);

const leafRotateLeft = useTransform(scrollYProgress, [0, 1], [-18, 0]);
const leafRotateRight = useTransform(scrollYProgress, [0, 1], [18, 0]);

const leafScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
const leafOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div>

{/* // category */}




<section
  ref={sectionRef}
  className="bg-gradient-to-b from-[#eef7f3] to-[#f8fcfa]
             py-22 overflow-hidden relative
             [perspective:1200px] "
>

  {/* Decorative Leaves */}
<motion.div
  className="pointer-events-none absolute top-0 left-0 w-28 md:w-44"
  animate={{
    y: [0, -10, 0],
    rotateZ: [-2, 2, -2],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <motion.img
    src="/check/plant1.png"
    alt="decorative leaf"
    style={{
      y: leafYLeft,
      rotateZ: leafRotateLeft,
      scale: leafScale,
      opacity: leafOpacity,
    }}
    className="transform-gpu will-change-transform rotate-630"
  />
</motion.div>

<motion.div
  className="pointer-events-none absolute top-0 right-0 w-24 md:w-50"
  animate={{
    y: [0, -14, 0],
    rotateZ: [2, -2, 2],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <motion.img
    src="/check/gg.png"
    alt="decorative leaf"
    style={{
      y: leafYRight,
      rotateZ: leafRotateRight,
      scale: leafScale,
      opacity: leafOpacity,
    }}
    className="transform-gpu will-change-transform"
  />
</motion.div>



  {/* EXISTING CONTENT */}
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* your existing code stays EXACTLY the same */}


    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-5xl font-serif font-bold text-[#4A2E1F] mb-3"
    >
      Our Categories
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl mx-auto text-black mb-15 text-sm sm:text-base"
    >
      Discover our best sellers crafted with fresh ingredients and rich flavors.
    </motion.p>


    {/* Cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-27"
    >
      {categories.map((item, index) => (
<motion.div
  key={index}
  variants={cardVariants}
  whileHover={{
    y: -10,
    rotateX: 4,
    rotateY: -4,
    scale: 1.02,
  }}
  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  className="relative bg-[#EFDECC] rounded-2xl px-6 pt-12 pb-5
      "
>

          {/* subtle highlight */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />

          {/* Image */}
          <div className="relative  mx-auto -mt-25 mb-5 border-[5px] border-white ">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            {item.title}
          </h3>










          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#62493e] hover:bg-[#584339]
                       text-white text-sm font-medium py-2.5
                       rounded-full shadow-sm"
          >
        Visit Product
          </motion.button>
        </motion.div>
      ))}





      
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10"
    >
    <button
  className=" cursor-pointer
    group relative inline-flex items-center gap-3
    px-7 py-3
    rounded-full
    bg-[#7A4A2E]
    text-white text-sm font-medium
    overflow-hidden
    transition-colors duration-300
    hover:bg-[#6A3F25]
  "
>
  {/* Chocolate wave */}
  <span
    className="
      pointer-events-none absolute left-0 top-0 h-full w-0
      group-hover:w-full
      transition-all duration-700 ease-out
    "
  >
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full"
    >
      <path
        d="M0,0 C20,20 20,80 0,100 L100,100 L100,0 Z"
        fill="#4E2A1A"
      />
    </svg>
  </span>

  {/* Date Image */}
  <span
    className="
      relative z-10 flex h-7 w-7 items-center justify-center
      transition-transform duration-300
      group-hover:translate-x-1
    "
  >
    <img
      src="/date.png"
      alt="Date fruit"
      className="h-9 w-9 object-contain"
    />
  </span>

  {/* Text */}
  <span className="relative z-10">
    Explore All Categories
  </span>
</button>
    </motion.div>

  </div>
</section>

    </div>
  )
}

export default Category