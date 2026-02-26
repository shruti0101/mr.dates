"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import "swiper/css";

const categories = [
  { title: "Mejdool Dates", image: "/slider/mejdooldates.webp", bg: "#3B1F1A", link: "//categories/medjool-dates" },
  { title: "Kalmi Dates", image: "/slider/kalmi.webp", bg: "#6B3E2E", link: "/categories/kalmi-dates" },
  { title: "Ajwa Dates", image: "/slider/ajwadates.webp", bg: "#1F1A16", link: "/categories/ajwa-dates" },
  { title: "Kimia Dates", image: "/slider/rabbidates.webp", bg: "#8C5A2E", link: "/categories/kimia-dates" },
  { title: "Fard Dates", image: "/slider/farddates.webp", bg: "#4A2E1F", link: "/categories/fard-dates" },
  { title: "Chocolate Dates", image: "/slider/chocodate.png", bg: "#2A140F", link: "/categories/chocolate-dates" },
  { title: "Zahidi Dates", image: "/slider/zahidi.webp", bg: "#2A140F", link: "/categories/zahidi-dates" },
  { title: "Mabroom Dates", image: "/slider/mabroom.webp", bg: "#2A140F", link: "/categories/mabroom-dates" },
  { title: "Medjool Dates", image: "/slider/mejdool.webp", bg: "#2A140F", link: "/categories/medjool-dates" },
  { title: "Rabbi Dates", image: "/slider/rabbidates.webp", bg: "#2A140F", link: "/categories/rabbi-dates" },
  { title: "Sukkari Dates", image: "/slider/sukkari.webp", bg: "#2A140F", link: "/categories/sukkari-dates" },
  { title: "Tunisian Dates", image: "/slider/tunisian.webp", bg: "#2A140F", link: "/categories/tunisian-dates" },

  { title: "Seedless Dates", image: "/slider/seedles.webp", bg: "#2A140F", link: "/categories/seedless-dates" },
  { title: "Dry Apricot", image: "/slider/dry.webp", bg: "#1C1814", link: "/categories/dry-apricot" },
  { title: "Cashew Nuts", image: "/slider/cashew.webp", bg: "#C9A26A", link: "/categories/cashew-nuts" },
  { title: "California Almond", image: "/slider/almond.webp", bg: "#D1B07C", link: "/categories/california-almond" },
];

export default function CategorySlider() {
  const [active, setActive] = useState(0);

  return (

    <>


      <section className="md:py-18 py-10 bg-white overflow-hidden">


        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-[66px] uppercase font-extrabold text-black">
            Timeless Taste of Authentic Dates 🌿
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
            className="md: !overflow-visible"
          >
           {categories.map((item, index) => (
  <SwiperSlide key={index} className="[perspective:1600px]">
    <Link href={item.link} className="block">
      <Card3D item={item} isActive={index === active} />
    </Link>
  </SwiperSlide>
))}
          </Swiper>
        </div>
      </section>
    </>
  );
}



function Card3D({ item }) {
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
        backgroundColor: item.bg,
        transformStyle: "preserve-3d",
      }}
    
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="
        relative h-[220px] rounded-[36px]
      
        transform-gpu
      "
    >
      {/* DEPTH BASE */}
      <div className="absolute inset-0 rounded-[36px] bg-black/25 translate-z-[-60px]" />

      {/* IMAGE (MID LAYER) */}
      <motion.div
        className="
          absolute inset-0 flex items-center justify-center
          translate-z-[60px]
          pointer-events-none
          z-10
        "
       
        transition={{ type: "spring", stiffness: 180 }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
        />
      </motion.div>


      <div className="absolute bottom-0 left-0 right-0 p-6 translate-z-[120px] z-20">
        <motion.h3
        
          className="text-white text-xl font-semibold text-center"
        >
          {item.title}
        </motion.h3>
      </div>
    </motion.div>
  );
}
