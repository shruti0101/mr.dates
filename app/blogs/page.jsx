'use client'

import React from 'react'
import { motion } from 'framer-motion'

const page = () => {

  const heroAnim = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <motion.div
        variants={heroAnim}
        initial="hidden"
        animate="show"
        className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/bg3.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">
          <span className="inline-block mb-4 text-sm md:text-base tracking-[0.3em] uppercase text-white/80">
            Insights • Trends • Stories
          </span>

          <h1 className="max-w-6xl mx-auto tracking-tight text-3xl md:text-[85px] font-medium leading-tight">
            Our Blogs
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
            Discover expert insights, product knowledge, sourcing guides, and
            industry trends from the world of premium dates & dry fruits.
            Crafted to inform, inspire, and elevate your buying decisions.
          </p>

     
        </div>
      </motion.div>
    </div>
  )
}

export default page
