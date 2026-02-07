"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Cta = () => {
  return (
    <div>
      {/* ================= PREMIUM CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative md:py-20 pt-0 pb-10 bg-[#36040e] text-white overflow-hidden"
      >
        {/* FLOATING DATE IMAGE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Image
            src="/cta.png"
            alt="Date fruit"
            width={200}
            height={200}
            className="object-cover absolute -top-15 hidden md:block"
          />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-9 text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 leading-tight"
          >
            Experience Premium Dates,
            <br className="hidden md:block" />
            Crafted with Care
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-[19px] leading-7 text-white/85"
          >
            From everyday nutrition to premium gifting and reliable wholesale
            supply,
            <span className="font-semibold text-[#D6B37C]"> Mr. Dates </span>
            delivers authentic taste, quality, and consistency you can trust.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            {/* BUTTON 1 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                cursor-pointer
                group relative inline-flex items-center gap-2 justify-center
                px-5 py-3
                rounded-full
                bg-gradient-to-b from-[#8B5536] to-[#75442e]
                text-white text-md md:text-xl font-bold tracking-wide
                overflow-hidden
                transition-colors duration-300
                hover:bg-[#9c735a]
              "
            >
              {/* Chocolate wave */}
              <span className="pointer-events-none absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out">
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

              {/* Date Icon */}
              <span className="relative z-10 flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <img
                  src="/date.png"
                  alt="Date fruit"
                  className="h-10 w-10 object-contain"
                />
              </span>

              <Link href="/contact" className="relative z-10 font-poppins">
                Contact Us
              </Link>
            </motion.button>

            {/* BUTTON 2 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 rounded-full border border-white text-md md:text-xl text-white font-bold transition hover:border-white hover:bg-white/10"
            >
              Bulk & Wholesale Enquiry
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Cta;
