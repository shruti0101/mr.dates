"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* Images */
const desktopImages = [
  "/banner/slider1.png",
  "/banner/slider2.png",
  "/banner/slider3.png",
];

const mobileImages = [
  "/mobile1.webp",
  "/mobile2.webp",
  "/mobile3.webp",
  "/mobile4.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <section className="relative hidden md:block w-full h-[80vh] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={desktopImages[index % desktopImages.length]}
              alt="Hero banner"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* MOBILE */}
      <section className="relative md:hidden w-full h-[50vh] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={`mobile-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={mobileImages[index % mobileImages.length]}
              alt="Mobile banner"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}
