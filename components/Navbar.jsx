"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { categories } from "@/Data/data";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const isSingleProduct =
    pathname.startsWith("/products/") && pathname !== "/products";

  const navTextClass = isSingleProduct ? "text-black" : "text-white";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          transition-colors duration-500
          ${
            isSingleProduct
              ? "bg-[#FDFBF7] text-black shadow-lg"
              : scrolled
              ? "bg-black/40 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          {/* LOGO */}
          <Link href="/">
            <Image
              src={isSingleProduct ? "/logo-black.png" : "/logooo.png"}
              alt="Brand Logo"
              width={isSingleProduct ? 100 : 120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 font-poppins font-medium">
            <Link
              href="/"
              className={`text-[18px] tracking-widest uppercase font-bold ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-[18px] tracking-widest uppercase font-bold ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              About
            </Link>

            {/* MEGA MENU */}
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <Link
                href="/products"
                className={`text-[18px] uppercase tracking-widest font-bold ${navTextClass} hover:text-[#F8CC19] transition`}
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

                    // 🔥 CRITICAL FIX — keeps scroll inside dropdown
                    onWheel={(e) => e.stopPropagation()}

                    className="
                      absolute left-1/2 top-full mt-6 w-[980px]
                      max-h-[80vh] overflow-y-auto overflow-x-hidden
                      z-50
                      -translate-x-1/2 rounded-3xl bg-white p-10
                      shadow-[0_40px_90px_-25px_rgba(0,0,0,0.3)]
                    "
                  >
                    <div className="grid grid-cols-6 gap-6">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/categories/${cat.id}`}
                          className="group"
                        >
                          <div className="relative aspect-square rounded-2xl bg-gray-100">
                            <Image
                              src={cat.image}
                              alt={cat.name}
                              width={600}
                              height={600}
                              className="object-cover p-6 transition-transform duration-500 group-hover:scale-125"
                            />
                          </div>

                          <h4 className="mt-4 tracking-[1.2] text-xl text-center font-bold text-black">
                            {cat.name}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blogs"
              className={`text-[18px] tracking-widest font-bold uppercase ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              Blogs
            </Link>

            <Link
              href="/contact"
              className={`text-[18px] tracking-widest font-bold uppercase ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#FFF8C6] text-md font-medium"
          >
            <img src="/date.png" alt="" className="h-8 w-8" />
            Get a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* MOBILE MENU */}
     <AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}

      /* 🔥 IMPORTANT — full screen container but NOT scrollable */
      className="
        md:hidden 
        fixed inset-0 
        bg-black/95 backdrop-blur-lg
        flex flex-col
      "
    >
      {/* HEADER ROW */}
      <div className="flex justify-between items-center px-6 py-4 shrink-0">
        <span className="text-white font-bold">Menu</span>
        <button onClick={() => setMobileOpen(false)}>
          <X size={26} className="text-white" />
        </button>
      </div>

      {/* 🔥 SCROLLABLE CONTENT (ONLY THIS PART SCROLLS) */}
      <div
        className="
          px-6 pb-6 text-white 
          flex-1 max-h-[calc(100vh-64px)]
          overflow-y-auto overscroll-contain
        "
        onWheel={(e) => e.stopPropagation()}   // same trick as desktop
      >
        <h3 className="text-lg font-bold mb-4 tracking-widest uppercase">
          Categories
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 border border-white/20 rounded-lg p-2"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={50}
                height={50}
                className="object-cover rounded-md"
              />
              <span className="text-sm font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFF8C6] text-black"
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
