"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function BestsellerSection() {
const flowers = [
  {
    name: "AJWA DATES",
    image: "/banner/2.png",
    desc:
      "Premium Ajwa Dates are cherished for their deep, rich flavor, soft texture, and high nutritional value. Sourced from Madinah, they are highly sought after for daily consumption, gifting, and wellness-focused buyers.",
  },
  {
    name: "MEDJOOL DATES",
    image: "/banner/1.png",
    desc:
      "Often called the King of Dates, Medjool Dates are large, juicy, and naturally caramel-sweet. Their luxurious texture makes them perfect for premium gifting, retail displays, and bulk supply.",
  },
  {
    name: "KIMIA DATES",
    image: "/banner/31.png",
    desc:
      "Kimia Dates are known for their soft, moist texture and rich sweetness. These glossy dark dates are a favorite for snacking, desserts, and high-end retail packaging.",
  },
  {
    name: "BARARI DATES",
    image: "/banner/41.png",
    desc:
      "Barari Dates are premium quality dates valued for their freshness, natural sweetness, and soft bite. Carefully selected and hygienically packed, they are ideal for both retail and wholesale markets.",
  },
  {
    name: "ARABIAN DATES",
    image: "/banner/1.png",
    desc:
      "Arabian Dates represent a curated selection of the finest varieties from the Middle East, known for their rich taste, natural energy, and superior quality — perfect for everyday use and special occasions.",
  },
];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const current = flowers[index];

  /* AUTO SLIDE */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % flowers.length);
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <span className="uppercase tracking-[0.35em] text-sm text-[#6B091D]">
          Our Bestsellers
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
          Customer Favorite Collection
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm sm:text-base">
          Discover our most loved selections, chosen for quality, authenticity,
          and consistency.
        </p>
      </div>

      {/* SLIDER */}
      <div
        className="relative w-full text-white"
        style={{ backgroundImage: "url(/check12.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12">
          {/* LEFT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -120, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full lg:max-w-[600px] space-y-4 text-center lg:text-left"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-white/80">
                Best Sellers ⭐
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                {current.name}
              </h1>

              <p className="text-sm sm:text-lg text-white/90 leading-6 sm:leading-7">
                {current.desc}
              </p>

<Link href="/products">

  <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-auto lg:mx-0 inline-flex bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Explore More
              </motion.button>
</Link>

            
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0 w-full lg:w-auto">
            <div className="relative w-[220px] sm:w-[320px] lg:w-[460px] h-[260px] sm:h-[420px] lg:h-[85vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl"
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 m-auto w-[180px] sm:w-[300px] lg:w-[460px] object-contain"
                  alt={current.name}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
