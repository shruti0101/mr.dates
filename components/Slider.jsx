"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Chocolate Dates", image: "/slider/chocodate.png", bg: "#0E6B82" },
  { title: "Sagai Dates", image: "/slider/sagai.png", bg: "#6F775F" },
  { title: "Ajwa Dates", image: "/slider/ajwa.png", bg: "#6F775F" },
  { title: "Sukkari Dates", image: "/slider/sukari.png", bg: "#6F775F" },
  { title: "Cashew", image: "/slider/cashew.png", bg: "#8C6A5D" },
  { title: "Walnut", image: "/slider/walnut.webp", bg: "#8A1D3D" },
  { title: "Almond", image: "/slider/almond.webp", bg: "#8C6A5D" },
  { title: "Raisin", image: "/slider/raisin.png", bg: "#B48A63" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CategorySlider() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={36}
          navigation
          grabCursor
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            640: { slidesPerView: 2.4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide
              key={index}
              className="[perspective:1400px] overflow-visible"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  y: -14,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ backgroundColor: item.bg }}
                className="
                  relative h-[200px] rounded-[32px]
                  transform-gpu
                  [transform-style:preserve-3d]
                  shadow-[0_30px_50px_rgba(0,0,0,0.25)]
                  overflow-visible
                  group
                "
              >
                {/* BASE DEPTH */}
                <div
                  className="
                    absolute inset-0 rounded-[32px]
                    bg-black/20
                    translate-z-[-40px]
                  "
                />

                {/* LIGHT GLOW */}
                <div
                  className="
                    absolute inset-0 rounded-[32px]
                    bg-gradient-to-br from-white/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                />

                {/* FLOATING IMAGE */}
                <motion.div
                  className="
                    absolute inset-0 flex items-center justify-center
                    translate-z-[60px]
                    pointer-events-none
                  "
                  whileHover={{ y: -28, scale: 1.15 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="
                      object-contain
                      drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]
                    "
                  />
                </motion.div>

                {/* CONTACT SHADOW */}
                <div
                  className="
                    absolute bottom-6 left-1/2 -translate-x-1/2
                    w-32 h-6 bg-black/30 blur-xl
                    rounded-full
                  "
                />

                {/* TITLE */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-z-[30px]">
                  <motion.h3
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-xl font-semibold"
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
