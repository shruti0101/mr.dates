"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BestsellerSection() {
  const flowers = [
    {
      name: "AJWA DATES",
      image: "/banner/2.png",
      color: "linear-gradient(to bottom right, #2B1B12, #6B091D)",
      desc: `Premium Ajwa Dates known for their rich taste, soft texture, and
      natural nutritional benefits. A customer favorite for daily consumption,
      gifting, and wellness-focused buyers.`,
    },
    {
      name: "MEDJOOL DATES",
      image:  "/banner/1.png",
      color: "linear-gradient(to bottom right, #3A1F12, #8A4F2A)",
      desc: `Often called the “King of Dates”, Medjool Dates are large, juicy,
      and naturally sweet. Perfect for premium gifting, retail shelves, and
      bulk supply.`,
    },
    {
      name: "MABROOM DATES",
      image:  "/banner/3.png",
      color: "linear-gradient(to bottom right, #1F1A16, #4A2E1F)",
      desc: `Mabroom Dates offer a mildly sweet flavor with a firm yet chewy
      texture. A popular choice among customers who prefer authentic and
      traditional dates.`,
    },
    {
      name: "SAFAWI DATES",
      image:  "/banner/4.png",
      color: "linear-gradient(to bottom right, #2A1E1A, #2A1E1A)",
      desc: `Dark, soft, and rich in flavor, Safawi Dates are ideal for everyday
      use. Known for their long shelf life and consistent quality.`,
    },
    {
      name: "KALMI DATES",
      image:  "/banner/1.png",
      color: "linear-gradient(to bottom right, #3B2315, #7A4A2E)",
      desc: `Kalmi Dates are valued for their balanced sweetness and soft bite.
      Hygienically processed and carefully packed for retail and wholesale
      buyers.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const current = flowers[index];

  /* ================= AUTO CHANGE ================= */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % flowers.length);
    }, 4000); // ⏱️ auto change time

    return () => clearInterval(timerRef.current);
  }, []);

  /* ================= MANUAL CLICK ================= */
  const handleNext = () => {
    clearInterval(timerRef.current); // reset timer
    setIndex((prev) => (prev + 1) % flowers.length);

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % flowers.length);
    }, 4000);
  };

  return (
    <section className="w-full">
      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
        <span className="uppercase tracking-[0.35em] text-sm text-[#6B091D] font-medium">
          Our Bestsellers
        </span>

        <h2 className="font-['IBM_Plex_Serif'] text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-[#111]">
          Customer Favorite Collection
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-[#444] text-[16px] leading-7">
          Discover our most loved selections, chosen for quality, authenticity,
          and consistency.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <div
        className="
          w-full flex flex-col text-white
          font-[Poppins] overflow-hidden
          transition-[background] duration-[600ms] ease-in-out
        "
        style={{ background: current.color }}
      >
        <div className="flex-1 flex items-center justify-between">
          {/* LEFT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ y: 450, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -450, opacity: 0 }}
              transition={{ duration: 0.99, ease: "easeInOut" }}
              className="
                max-w-[520px]
                ml-[60px]
                space-y-6
                max-lg:ml-0
                max-lg:max-w-[90%]
              "
            >
              <span className="block text-sm tracking-[0.3em] uppercase text-white/70">
                Best Sellers
              </span>

              <h1 className="font-serif text-[4.1rem] font-bold tracking-[1.5px] leading-tight">
                {current.name}
              </h1>

              <p className="text-[1.1rem] leading-[1.85] text-white">
                {current.desc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center
                  bg-black/90 text-white
                  px-[34px] py-[14px]
                  rounded-full
                  font-semibold
                  tracking-wide
                  shadow-lg shadow-black/30
                  hover:bg-black
                "
              >
                Explore More
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}
          <div className="relative flex-1 flex flex-col items-center justify-center">
            <div className="relative w-[480px] h-screen flex items-center justify-center overflow-hidden max-lg:w-[350px] max-lg:h-[550px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 250, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -250, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="
                    absolute w-full h-[590px]
                    bg-white/12
                    border border-white/30
                    backdrop-blur-[12px]
                    shadow-[0_40px_80px_rgba(0,0,0,0.25)]
                  "
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  initial={{ scale: 0.99 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.99 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  className="
                    absolute z-[2]
                    w-[600px]
                    object-cover
                    pointer-events-none
                    left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    max-lg:w-[200px]
                  "
                />
              </AnimatePresence>
            </div>

            {/* CLICK */}
            <div
              onClick={handleNext}
              className="
                absolute bottom-[32px]
                w-[62px] h-[62px]
                rounded-full
                bg-white/10
                border border-white/40
                backdrop-blur-md
                flex items-center justify-center
                cursor-pointer
                transition
                hover:bg-white/80
                hover:translate-y-[2px]
                group
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                className="w-[26px] h-[26px] transition group-hover:stroke-black group-hover:scale-110"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
