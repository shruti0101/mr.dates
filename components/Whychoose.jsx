"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";

const images = [
  "/banner/1.png",
  "/banner/2.png",
  "/banner/31.png",
  "/banner/41.png",
  "/banner/5.png",
];

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

export default function AboutStoreSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT – IMAGE CAROUSEL */}
          <motion.div
            variants={imageAnim}
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
    
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center px-8 py-12 lg:px-14"
          >
            {/* Overlay */}


            <div className="relative z-20 max-w-xl">
              <motion.h2
                variants={fadeUp}
                className="text-black  text-3xl lg:text-5xl font-bold mb-5"
              >
                Why Choose Mr. Dates as a Dates Supplier
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-black text-[19px] leading-7 mb-5"
              >
                At <strong>Mr. Dates</strong>, we are dedicated to delivering
                superior quality and authentic taste in every product. As a
                trusted <strong>dates supplier</strong>, we carefully source
                premium dates and dry fruits to meet the highest standards of
                freshness, nutrition, and consistency.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-black text-[19px] leading-7 mb-4"
              >
                What sets us apart:
              </motion.p>

              <motion.ul
                variants={container}
                className="text-black text-[19px] leading-7 mb-8 space-y-2"
              >
                {[
                  "Premium dates sourced from trusted global farms",
                  "Hygienic processing & quality-controlled packaging",
                  "Ideal for daily use, gifting & bulk requirements",
                  "Trusted by customers for freshness & authenticity",
                  "Bulk & Wholesale Availability",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                  >
                    • {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  cursor-pointer group relative inline-flex items-center gap-3
                  px-7 py-3 rounded-full bg-[#7A4A2E]
                  text-white text-md md:text-xl font-bold overflow-hidden
                  transition-colors duration-300 hover:bg-[#6A3F25]
                "
              >
                {/* Chocolate wave */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                    <path
                      d="M0,0 C20,20 20,80 0,100 L100,100 L100,0 Z"
                      fill="#4E2A1A"
                    />
                  </svg>
                </span>

                {/* Date Image */}
                <span className="relative z-10 flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <img src="/date.png" alt="Date fruit" className="h-9 w-9 object-contain" />
                </span>

                <Link href="/about" className="relative z-10 font-poppins">
                  Explore Mr. Dates
                </Link>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
