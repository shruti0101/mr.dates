"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

const images = [
  "/banner/1.png",
  "/banner/2.png",
  "/banner/3.png",
  "/banner/4.png",
    "/banner/5.png",
];

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function AboutStoreSection() {
  return (
    <section className="relative w-full bg-[#fbf6eb] overflow-hidden">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT – IMAGE CAROUSEL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-[420px] lg:h-[680px] overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img}
                    alt="Mr. Dates Premium Store"
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
          style={{backgroundImage:"url(/mock.webp)"}}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center px-8 py-12 lg:px-14
                      
                       "
          >

 <div className="absolute inset-0 bg-white/60 z-10"></div>


            <div className="max-w-xl z-20">
              <motion.h2
                variants={fadeUp}
                className="text-[#4A2E1F] font-serif text-3xl lg:text-4xl font-bold mb-5"
              >
                WHY CHOOSE MR. DATES
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-black text-[18px] leading-7 mb-5"
              >
                Mr. Dates brings you premium-quality dates and dry fruits sourced
                directly from the world’s finest farms, including Saudi Arabia,
                Iran, and select global origins. Every product is carefully
                handpicked and hygienically processed to preserve natural taste,
                freshness, and nutrition.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-black text-[18px] leading-7 mb-6"
              >
                With a strong focus on quality and authenticity, we ensure that
                every pack meets the highest standards of freshness. From daily
                consumption to festive gifting and corporate requirements,
                Mr. Dates delivers products you can rely on for taste, purity,
                and consistency.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                className="text-black text-[18px] leading-7 mb-8 space-y-2"
              >
                <li>• Premium dates sourced from trusted global farms</li>
                <li>• Hygienic processing & quality-controlled packaging</li>
                <li>• Ideal for daily use, gifting & bulk requirements</li>
                <li>• Trusted by customers for freshness & authenticity</li>
              </motion.ul>

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
    Explore Mr. Dates
  </span>
</button>




            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
