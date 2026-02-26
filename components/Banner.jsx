"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* Images */
const desktopImages = [
  "/banner/slider1.webp",
  // "/banner/slider2.webp",
  // "/banner/slider3.webp",
];

// const mobileImages = [
//   "/mobile1.webp",
//   "/mobile2.webp",
//   "/mobile3.webp",
//   "/mobile4.webp",
// ];

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
      <section className="relative   bg-[#EFDECC] w-full h-[150px] sm:h-[40vh] md:h-[50vh] xl:h-[80vh] overflow-hidden">
      
          <Link href="/contact"
          
          >
             <Image
            src={desktopImages[index % desktopImages.length]}
            alt="Hero banner"
            width={2000}
            height={2000}
            priority
            className="max-w-full h-auto object-cover object-center "
   
          />
          </Link>
  
      </section>

      {/* MOBILE */}
      {/* <section className="relative md:hidden w-full h-[50vh] overflow-hidden">
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
      </section> */}
    </>
  );
}
