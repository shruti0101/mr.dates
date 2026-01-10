"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

import "swiper/css";

const categories = [
  { title: "Mejdool Dates", image: "/slider/mejdooldates.png" },
  { title: "Sagai Dates", image: "/slider/sukkaridates.png" },
  { title: "Ajwa Dates", image: "/slider/ajwadates.png" },
  { title: "Sukkari Dates", image: "/slider/rabbidates.png" },
  { title: "Fard Dates", image: "/slider/farddates.png" },
  { title: "Chocolate Dates", image: "/slider/chocodate.png" },
  { title: "Cashew", image: "/slider/cashew.png" },
  { title: "Walnut", image: "/slider/walnut.webp" },
  { title: "Almond", image: "/slider/almond.webp" },
  { title: "Raisin", image: "/slider/raisin.png" },
];

export default function CategorySlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-18 bg-white">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-extrabold text-black">
          Timeless Taste of Authentic Dates
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={40}
          grabCursor
          onSlideChange={(s) => setActive(s.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 5 },
          }}
          className="!overflow-visible"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} className="[perspective:1600px]">
              <Card3D item={item} isActive={index === active} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= 3D CARD ================= */

function Card3D({ item, isActive }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        backgroundColor: "#ffffff",
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isActive ? 1.05 : 0.96,
        y: isActive ? -12 : 0,
      }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="
        relative h-[220px] rounded-[36px]
        shadow-[0_35px_60px_rgba(0,0,0,0.18)]
        transform-gpu
        border border-gray-200
      "
    >
      {/* DEPTH BASE */}
      <div className="absolute inset-0 rounded-[36px] bg-black/5 translate-z-[-60px]" />

      {/* IMAGE */}
      <motion.div
        className="
          absolute inset-0 flex items-center justify-center
          translate-z-[60px]
          pointer-events-none
          z-10
        "
        animate={{ y: isActive ? -22 : -8 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      {/* TITLE */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-z-[120px] z-20">
        <motion.h3
          animate={{ letterSpacing: isActive ? "0.08em" : "0.02em" }}
          className="text-black text-xl font-semibold text-center"
        >
          {item.title}
        </motion.h3>
      </div>
    </motion.div>
  );
}
