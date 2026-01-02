"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const megaProducts = [
  {
    title: "Premium Kalmi Dates",
    image: "/img2.png",
    tag: "Best Seller",
  },
  {
    title: "Ajwa Dates",
    image: "/img6.png",
    tag: "Export Quality",
  },
  {
    title: "Healthy Dates",
    image: "/img1.png",
    tag: "Daily Nutrition",
  },
  {
    title: "Dry Fruits Mix",
    image: "/img5.png",
    tag: "Premium Blend",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl " : "bg-[#8A5436]/20"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-3">

          {/* LOGO */}
          <Image
            src="/logo.webp"
            alt="Brand Logo"
            width={120}
            height={40}
            className="object-contain"
          />

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 relative">

       

            {["Home", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-md font-medium text-black hover:text-black transition"
              >
                {item}
              </a>
            ))}



     {/* MEGA MENU */}
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <button className="text-md font-medium text-black hover:text-black transition">
                Our Products
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-full mt-8 w-[880px] -translate-x-1/2 rounded-3xl bg-white p-10 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.3)]"
                  >
                    {/* GRID */}
                    <div className="grid grid-cols-4 gap-8">
                      {megaProducts.map((item) => (
                        <motion.div
                          key={item.title}
                          whileHover={{ y: -6 }}
                          className="group cursor-pointer"
                        >
                          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain p-6 transition-transform duration-500 group-hover:scale-150"
                            />
                            <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                              {item.tag}
                            </span>
                          </div>

                          <h4 className="mt-4 text-sm font-semibold text-gray-900">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs text-gray-500">
                            View product →
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-10 flex items-center justify-between border-t pt-6">
                      <p className="text-xs text-gray-500">
                        Premium quality • Farm sourced • Export ready
                      </p>
                      <button className="text-sm font-semibold text-gray-900 hover:underline">
                        View All Products →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


     {["Blogs","Bulk Order", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-md font-medium text-black hover:text-black transition"
              >
                {item}
              </a>
            ))}


          </nav>

{/* CTA */}



<button
  className=" cursor-pointer
    group relative inline-flex items-center gap-3
    px-7 py-3
    rounded-full
      bg-gradient-to-b from-[#8B5536] to-[#75442e]
    text-white text-sm font-medium tracking-wide
   
   
    overflow-hidden
    transition-colors duration-300
    hover:bg-[#9c735a]
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
      className="h-10 w-10 object-contain"
    />
  </span>

  {/* Text */}
  <span className="relative z-10 font-poppins">
   Get a Quote
  </span>
</button>


        </div>
      </motion.div>
    </header>
  );
}
