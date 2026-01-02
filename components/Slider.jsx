"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Almond", image: "/slider/almond.webp", bg: "#8C6A5D" },
  { title: "Cashew", image: "/slider/cashew.png", bg: "#0E6B82" },
  { title: "Dates", image: "/date.png", bg: "#6F775F" },
  { title: "Walnut", image: "/slider/walnut.webp", bg: "#8A1D3D" },
    { title: "Almond", image: "/slider/almond.webp", bg: "#8C6A5D" },
  { title: "Raisin", image: "/slider/raisin.png", bg: "#B48A63" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CategorySlider() {
  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={28}
          navigation
          grabCursor
          speed={700}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide
              key={index}
              className="overflow-visible [perspective:1200px]"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  rotateX: 4,
                  rotateY: -4,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ backgroundColor: item.bg }}
                className="group relative h-[180px]  rounded-3xl
                           flex flex-col justify-end
                           overflow-visible
                           "
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0
                                opacity-80 group-hover:opacity-100 transition" />

                {/* Light sweep */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <span className="absolute -left-full top-0 h-full w-1/2
                                   bg-gradient-to-r from-transparent via-white/25 to-transparent
                                   opacity-0 group-hover:opacity-100
                                   group-hover:translate-x-[400%]
                                   transition-all duration-700 ease-out" />
                </span>

                {/* IMAGE – REAL POP OUT */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  whileHover={{ y: -22, scale: 1.12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={190}
                    height={190}
                    className="object-contain 
                               drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]"
                  />
                </motion.div>

                {/* Title */}
                <div className="relative z-10 p-6">
                  <motion.h3
                    whileHover={{ letterSpacing: "0.04em" }}
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
