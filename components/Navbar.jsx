"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { categories } from "@/Data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        className={`
          transition-colors duration-500
          ${scrolled ? "bg-black/40 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
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

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 font-poppins font-medium">

            {[ "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[18px] tracking-widest uppercase font-bold text-white hover:text-[#F8CC19] transition"
              >
                {item}
              </Link>
            ))}

            {/* MEGA MENU (DESKTOP ONLY) */}
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <Link
                href="/products"
                className="text-[18px] uppercase tracking-widest font-bold text-white hover:text-[#F8CC19] transition"
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
                              className="object-contain p-6 transition-transform duration-500 group-hover:scale-125"
                            />
                          </div>

                          <h4 className="mt-4 text-sm text-center font-semibold text-black">
                            {cat.name}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Blogs", "Bulk Order", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[18px] tracking-widest font-bold uppercase text-white hover:text-[#F8CC19] transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA (DESKTOP) */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#FFF8C6] text-md font-medium"
          >
            <img src="/date.png" alt="" className="h-8 w-8" />
            Get a Quote
          </Link>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg"
            >
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-white font-bold">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={26} className="text-white" />
                </button>
              </div>

              <div className="flex flex-col px-6 pb-6 gap-5 text-white font-bold tracking-widest uppercase">
                {[ "About", "Products", "Blogs", "Bulk Order", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFF8C6] text-black"
                >
                  <img src="/date.png" className="h-7 w-7" alt="" />
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
