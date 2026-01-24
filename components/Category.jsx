'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

const Category = () => {

  const cardVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const category = [
    { title: "Ajwa Dates", image: "/products/ajwa3.webp",link:"/categories/ajwa-dates" },
 
    { title: "Barari Dates", image: "/products/brarichocolate.webp" , link:"/categories/barari-dates" },
    { title: " Kimia Dates", image: "/products/kimia1.webp",link:"/categories/kimia-dates" },
    { title: "Kalmi Dates", image: "/products/kalmi3.webp",link: "/categories/kalmi-gold-dates" },
    // { title: "sukkari Dates", image: "/category/2.png" },
  ];

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const leafYLeft = useTransform(scrollYProgress, [0, 1], [-120, 0]);
  const leafYRight = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const leafRotateLeft = useTransform(scrollYProgress, [0, 1], [-18, 0]);
  const leafRotateRight = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const leafScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: "url(/texture.jpg)" }}
      className="relative py-20 overflow-hidden [perspective:1200px] bg-cover bg-center"
    >

  <div className="absolute inset-0 bg-black/25 "></div>

      {/* Decorative Leaves */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-20 sm:w-28 md:w-44"
        animate={{ y: [0, -10, 0], rotateZ: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="/aboutimg.png"
          alt="decorative leaf"
          style={{
            y: leafYLeft,
            rotateZ: leafRotateLeft,
            scale: leafScale,
            opacity: leafOpacity,
          }}
          className="transform-gpu will-change-transform"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute top-0 right-0 w-16 sm:w-24 md:w-50"
        animate={{ y: [0, -14, 0], rotateZ: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="/check/gg.png"
          alt="decorative leaf"
          style={{
            y: leafYRight,
            rotateZ: leafRotateRight,
            scale: leafScale,
            opacity: leafOpacity,
          }}
          className="transform-gpu will-change-transform"
        />
      </motion.div>

      {/* Content */}
      <div className="w-full relative mx-auto px-4 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl font-bold text-white mb-3"
        >
          Our Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-white mb-10 text-sm sm:text-lg"
        >
          Discover our best sellers featuring <strong>premium dates, dry fruits,</strong>{" "}
          and <strong>healthy snacks</strong> crafted by a trusted{" "}
          <strong>dates supplier.</strong>
        </motion.p>

        {/* Cards */}
        
        <motion.div

          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-20"
        >
          {category.map((item, index) => (
            <Link key={index} href={item.link} className="block">
            <motion.div
            link={item.link}
             
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, rotateX: 4, rotateY: -4, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#EFDECC] rounded-2xl px-6 pt-14 pb-5"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />

              {/* Image */}
              <div className="relative mx-auto -mt-[80px] sm:-mt-[100px] mb-5 border-[5px] border-white max-w-[230px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="object-cover bg-white"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-[#62493e] hover:bg-[#584339] text-white text-md font-medium py-2.5 rounded-full shadow-sm "
              >
                Visit Category
              </motion.button>
            </motion.div>
            </Link>
          ))}
        </motion.div>


        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <button className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black text-lg font-medium overflow-hidden cursor-pointer">
            <span className="relative z-10 flex h-7 w-7">
              <img src="/date.png" alt="Date" className="h-9 w-9 object-contain" />
            </span>
            <Link href="/products" className="relative z-10 ">
              Explore All Categories
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
