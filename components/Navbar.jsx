"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { categories } from "@/Data/data";
import { usePathname } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";
import { ShoppingBag, BookOpen } from "lucide-react";


import {
  Menu,
  X,
  ShoppingCart,
  Heart,
} from "lucide-react";

import CartDrawer from "@/store/cartDrawer";

import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  // cart store

  const [cartOpen, setCartOpen] = useState(false);

const cart = useCartStore((state) => state.cart);

const wishlist = useCartStore(
  (state) => state.wishlist
);

const loadStorageData = useCartStore(
  (state) => state.loadStorageData
);




useEffect(() => {
  loadStorageData();
}, []);
  
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*  Lock background scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const pathname = usePathname();

  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;

  const isSingleProduct =
    pathname.startsWith("/products/") && pathname !== "/products" ||
    pathname.startsWith("/checkout/") && pathname !== "/products";
  const navTextClass = isSingleProduct ? "text-black" : "text-black";

  const mobicon = isSingleProduct ? "text-black" : "text-white";


  return (
    <header className="fixed top-0 left-0 z-50 w-full">

   {/*  TOPBAR  */}


<div className="w-full bg-[#f3ecef] border-b border-black/10">
  <div className="relative flex items-center justify-between h-[54px] overflow-hidden">
    
    {/* SHOP TAB */}
    <Link
      href="/products"
      className="relative w-1/2 h-full flex items-center justify-center bg-[#f3ecef] group hover:bg-black transition-colors duration-150 text-black font-extrabold uppercase tracking-[0.2em] text-lg z-10"
    >
      {/* angled shape */}
      <div
        className="absolute right-[-40px] transition-colors duration-150 group group-hover:bg-black top-0 h-full w-[80px] bg-[#f3ecef]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <span className="relative flex items-center gap-2">
        <ShoppingBag size={20} className="group-hover:text-[#f3ecef]" strokeWidth={2.5} />
        <span className=" group-hover:text-[#f3ecef] ">Shop</span>
      </span>
    </Link>

    {/* LEARN TAB */}
    <Link
      href="/learn"
      className="relative w-1/2 h-full flex items-center justify-center group bg-[#8d2957] transition-colors duration-150 hover:bg-[#f3ecef] text-white font-extrabold uppercase tracking-[0.2em] text-lg"
    >
      <span className="flex items-center gap-2">
        <BookOpen size={20} className="group-hover:text-[#8d2957] transition-colors duration-150" strokeWidth={2.5} />
        <span className="underline group-hover:text-[#8d2957] transition-colors duration-150 underline-offset-4">
          Learn
        </span>
      </span>
    </Link>

  </div>
</div>

      {/* ===================== NAVBAR ===================== */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          transition-colors duration-500
          ${isSingleProduct
            ? "bg-[#FDFBF7] text-black shadow-lg"
            : scrolled
              ? "bg-white/70 backdrop-blur-md shadow-lg"
              : "bg-white"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between  py-2">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo-black.webp" 
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

            {/* ===== MEGA MENU (NOW IN THE MIDDLE) ===== */}
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
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.35 }}
  onWheel={(e) => e.stopPropagation()}
  className="
    absolute top-full mt-6
    -translate-x-1/4
    w-[1280px]
    max-h-[80vh]
    overflow-y-auto
    overflow-x-hidden
    rounded-[32px]
    bg-white/95
    backdrop-blur-xl
    border border-[#8d2957]/10
    shadow-[0_35px_80px_rgba(0,0,0,0.12)]
    z-50
  "
>
      <div className="grid grid-cols-12 min-h-[580px]">
        
        {/* LEFT FEATURED SECTION */}
        <div className="col-span-3 relative bg-[#f8f2f5] p-8">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8d2957] via-[#d89ab8] to-transparent" />

          <span className="uppercase tracking-[0.3em] text-xs text-[#8d2957]">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl font-serif leading-tight text-black">
            Discover
           
            Timeless Beauty of Dates
          </h2>

          <p className="mt-3 text-gray-700 text-md leading-relaxed">
            Explore our premium skincare and wellness
            collections crafted for modern lifestyles.
          </p>

       <div className="relative  flex justify-center">
  <div className="plate-spin">
    <Image
      src="/img4.webp"
      alt="Plate"
      width={700}
      height={700}
      className="w-[270px] h-[270px] object-cover"
    />
  </div>
</div>

          <Link
            href="/products"
            className="
              mt-8 inline-flex
              items-center gap-3
              rounded-full
              bg-[#8d2957]
              px-7 py-4
              text-white
              font-medium
              hover:scale-105
              transition
            "
          >
            Shop Collection →
          </Link>
        </div>

        {/* RIGHT CATEGORY GRID */}
        <div className="col-span-9 p-10">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold">
                Shop by Category {"   "} <span className="text-[#C03A7A] text-3xl"> {"   "} ♡</span>
              </h3>
              <p className="text-gray-700 mt-1">
                Explore our curated collections
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="group"
              >
                <div
                  className="
                    relative overflow-hidden
                    rounded-3xl
                    bg-[#faf7f8]
                    border border-transparent
                    transition-all duration-500
                    hover:border-[#8d2957]/20
                    hover:shadow-xl
                    hover:-translate-y-2
                  "
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={500}
                      height={500}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-4">
                    <h4
                      className="
                        text-center
                        font-semibold
                        text-[15px]
                        tracking-wide
                      "
                    >
                      {cat.name}
                    </h4>

                    <span
                      className="
                        block text-center
                        mt-2 text-xs
                        uppercase tracking-widest
                        text-[#8d2957]
                        opacity-0
                        transition
                        group-hover:opacity-100
                      "
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Luxury Strip */}
          <div
            className="
              mt-8 rounded-3xl
              bg-gradient-to-r
              from-[#f8f2f5]
              via-white
              to-[#f8f2f5]
              p-6
              flex items-center justify-between
            "
          >
            <div>
              <h4 className="font-semibold text-lg">
                Exclusive Online Collections
              </h4>
              <p className="text-gray-500 text-sm">
                Luxury beauty essentials curated for you.
              </p>
            </div>

            <Link
              href="/products"
              className="
                px-6 py-3
                rounded-full
                border border-[#8d2957]
                text-[#8d2957]
                font-medium
                hover:bg-[#8d2957]
                hover:text-white
                transition
              "
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
            </div>

            <Link
              href="/blogs"
              className={`text-[18px] tracking-widest font-bold uppercase ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              Newsletter
            </Link>

            <Link
              href="/contact" 
              className={`text-[18px] tracking-widest font-bold uppercase ${navTextClass} hover:text-[#F8CC19] transition`}
            >
              Contact
            </Link>
          </nav>

<div className="hidden md:flex items-center gap-6">

  {/* PHONE */}
  <a
    href="tel:+917065650411"
    className={`${navTextClass} hover:text-[#F8CC19] transition font-bold tracking-wider flex items-center gap-2 text-lg`}
  >
    <FaPhoneAlt />

    +91 - 7065650411
  </a>

  {/* WISHLIST */}
  <Link
    href="/wishlist"
    className={`relative ${navTextClass} hover:text-[#F8CC19] transition`}
  >
    <Heart size={28} />

    {wishlist.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
        {wishlist.length}
      </span>
    )}
  </Link>

  {/* CART */}
  <button
    onClick={() => setCartOpen(true)}
    className={`relative ${navTextClass} hover:text-[#F8CC19] transition`}
  >
    <ShoppingCart size={28} />

    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
        {cart.length}
      </span>
    )}
  </button>
</div>
          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className=" md:inline-flex items-center flex gap-1 md:gap-3 px-5 md:px-7 py-3 rounded-full bg-[#FFF8C6] text-md font-medium"
          >
            <img src="/date_1.webp" alt="" className="h-8 w-8 pb-1" />
            Get a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden ${mobicon}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.div>

      {/*  MOBILE MENU (OUTSIDE HEADER)  */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden 
              fixed inset-0 
              bg-white 
              flex flex-col
              z-[999]
              overflow-y-auto
            "
          >
            {/* HEADER ROW */}
            <div className="flex justify-between items-center px-6 py-4 shrink-0">
              <span className="text-black font-bold">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={26} className="text-black" />
              </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div
              className="
                px-6 pb-26 text-white 
                flex-1 max-h-[calc(110vh-64px)]
                overflow-y-auto overscroll-contain
              "
              onWheel={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold text-black mb-4 tracking-widest uppercase">
                Categories
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 border border-yellow-500/20 rounded-lg p-2"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={60}
                      height={50}
                      className="object-cover rounded-md"
                    />
                    <span className="text-base   text-black font-medium">{cat.name}</span>
                  </Link>
                ))}
              </div>

             
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <CartDrawer
  open={cartOpen}
  setOpen={setCartOpen}
/>
    </header>
  );
}
