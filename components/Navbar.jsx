"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { categories } from "@/Data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

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
  
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logooo.png"
              alt="Brand Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 font-poppins font-medium">

            {["Home", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-[18px] tracking-widest uppercase font-bold text-white hover:text-[#F8CC19] transition`}
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
              <Link
                href="/products"
                className={`text-[18px] uppercase tracking-widest font-bold  text-white hover:text-[#F8CC19] transition`}
              >
                Our Products
              </Link>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-full mt-8 w-[880px]
                               -translate-x-1/2 rounded-3xl bg-white p-10
                               shadow-[0_40px_90px_-25px_rgba(0,0,0,0.3)]"
                  >
                    <p className="text-white pb-3">Our Category Range</p>

                    <div className="grid grid-cols-4 gap-8">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/categories/${cat.id}`}
                          className="group"
                        >
                          <div className="relative aspect-square rounded-2xl bg-gray-100 overflow-hidden">
                            <Image
                              src={cat.image}
                              alt={cat.name}
                              fill
                              className="object-contain p-6 transition-transform
                                         duration-500 group-hover:scale-125"
                            />
                            {cat.badge && (
                              <span className="absolute top-3 left-3
                                               rounded-full bg-black/80
                                               px-3 py-1 text-[10px]
                                               uppercase tracking-wide text-white">
                                {cat.badge}
                              </span>
                            )}
                          </div>

                          <h4 className="mt-4 text-sm text-center font-semibold text-black">
                            {cat.name}
                          </h4>
                          <p className="text-xs text-center text-black">
                            View product →
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Blogs", "Bulk Order", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-[18px] tracking-widest font-bold uppercase text-white hover:text-[#F8CC19] transition`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button className={`group relative cursor-pointer inline-flex items-center gap-3
                             px-7 py-3 rounded-full bg-[#F8CC19]]
                          bg-[#FFF8C6]
                          text-md font-medium tracking-wide
                             overflow-hidden`}>


            <span className="relative z-10 flex h-7 w-7">
              <img src="/date.png" alt="Date" className="h-10 w-10 object-contain" />
            </span>

            <Link href="/contact" className="relative  z-10">Get a Quote</Link>
          </button>
        </div>
      </motion.div>
    </header>
  );
}
