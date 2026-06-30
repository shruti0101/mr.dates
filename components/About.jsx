"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Leaf,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">

      {/* PREMIUM GLOW */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#ff4d8d]/10 blur-3xl" />
      {/* <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#ff4d8d]/10 blur-3xl" /> */}

      {/* GRAIN TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-12 left-10 h-40 w-40 rounded-full border-[18px] border-black/5"
      />

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-10 h-24 w-24 rounded-[30px] bg-[#ff4d8d]/10"
      />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative">

            {/* FUNKY FLOATING TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -8,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [-8, -5, -8],
              }}
              className="
                absolute 
                -top-50
                right-[100px] 
                z-30 
                hidden 
                xl:block
              "
            >
              <div className="absolute inset-0 rounded-full bg-[#ff4d8d]/20 blur-3xl scale-125" />

              <div
                className="
                  relative rounded-[30px]
                  border border-white/50
                 
                  p-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                "
              >
                <img
                  src="/test.webp"
                  alt="Snack Smart Live Sweet"
                  className="w-[280px] object-contain drop-shadow-2xl"
                />

                {/* MINI BADGE */}
                <motion.div
                  animate={{
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="
                    absolute 
                    -bottom-5 
                    -left-5
                    rounded-full 
                    bg-black 
                    px-5 
                    py-3 
                    text-xs 
                    font-black 
                    tracking-[0.2em]
                    text-white
                    shadow-2xl
                  "
                >
                  CLEAN SNACK ✦
                </motion.div>
              </div>
            </motion.div>

            {/* IMAGES GRID */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {/* BACK IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -80,
                  rotate: -5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: -2,
                }}
                transition={{ duration: 0.9 }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                }}
                className="hidden md:block"
              >
                <div
                  className="
                    relative 
                    h-[260px] 
                    sm:h-[360px] 
                    lg:h-[440px]
                    overflow-hidden 
                    rounded-[32px]
                    border border-white/40
                    bg-white/20
                    shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                  "
                >
                  <Image
                    src="/cc.webp"
                    alt="Premium Dates"
                    width={400}
                    height={400}
                    className="object-contain transition-transform duration-700 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                </div>
              </motion.div>

              {/* FRONT IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                  rotate: 5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 2,
                }}
                transition={{ duration: 0.9 }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                }}
              >
                <div
                  className="
                    relative 
                    h-[260px] 
                    sm:h-[360px] 
                    lg:h-[440px]
                    overflow-hidden 
                    rounded-[32px]
                    border border-white/40
                    bg-white/20
                    shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                  "
                >
                  <Image
                    src="/about2.avif"
                    alt="Luxury Dates"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* FLOATING PILL */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute 
                -bottom-6 
                left-10
                hidden md:flex
                items-center gap-3
                rounded-full
                bg-black
                px-6 py-4
                text-white
                shadow-2xl
              "
            >
              <Sparkles className="h-4 w-4 text-[#ffb703]" />

              <span className="text-sm font-bold tracking-wide">
                PREMIUM • NATURAL • CLEAN
              </span>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* TOP TAG */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-black/10
                bg-white/70
                px-5 py-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-5 w-5 text-[#ff4d8d] animate-pulse" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
                About Mr. Dates
              </span>

              <Image
                src="/date.png"
                width={32}
                height={32}
                alt="Dates"
              />
            </motion.div>

           
       {/* HEADING */}
<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="relative mt-8"
>

  {/* FLOATING STICKER IMAGE */}
  <motion.img
    animate={{
      y: [0, -10, 0],
      rotate: [-6, -2, -6],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    src="/stars.png"
    alt="Snack Smart Live Sweet"
    className="
      absolute
      -top-20
      right-0
      hidden
      w-[180px]
      rotate-[-8deg]
      drop-shadow-2xl
      xl:block
    "
  />

  <h2
    className="
      text-4xl
      font-black
      leading-[0.95]
      tracking-[-1px]
      text-black
      sm:text-5xl
      lg:text-6xl
    "
  >
    Healthy
    <br />
    snacking never
    <br />
    looked this good.
  </h2>

</motion.div>
            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-8
                text-black
              "
            >
              At <strong>Mr. Dates</strong>, we believe healthy food
              should feel indulgent. Our premium collection of
              Medjool, Kalmi, and Tunisian dates delivers natural
              sweetness, antioxidants, fiber, and essential minerals
              in every bite.
             
              Carefully sourced and hygienically packed, our dates
              are free from unnecessary additives and refined sugar —
              making them the perfect clean snack for modern living.
            </motion.p>

            {/* FEATURE CARDS */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              <FeatureCard
                icon={<Leaf className="h-5 w-5" />}
                text="Rich In Fiber"
              />

              <FeatureCard
                icon={<Heart className="h-5 w-5" />}
                text="Heart Healthy"
              />

              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                text="No Added Sugar"
              />

              <FeatureCard
                icon={<Sparkles className="h-5 w-5" />}
                text="Clean Energy"
              />

            </div>

            {/* BUTTON */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-12"
            >
              <button
                className="
                  group relative inline-flex items-center gap-4
                  overflow-hidden rounded-full
                  bg-[#4E2A1A]
                  px-8 py-4
                  text-white
                  shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:bg-[#9c735a]
                "
              >
                {/* HOVER BG */}
                <span className="absolute left-0 top-0 h-full w-0 bg-[#8d2957] transition-all duration-700 ease-out group-hover:w-full" />

                {/* ICON */}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <img
                    src="/date_1.webp"
                    alt="Date fruit"
                    className="h-6 w-6 object-contain"
                  />
                </span>

                {/* TEXT */}
                <Link
                  href="/products"
                  className="relative z-10 text-lg font-bold"
                >
                  Shop Premium Dates
                </Link>

                {/* ARROW */}
                <ArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD */

function FeatureCard({ icon, text }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="
        flex items-center gap-3
        rounded-2xl
        border border-white/40
        bg-white/70
        px-5 py-4
        shadow-lg
        backdrop-blur-xl
      "
    >
      <div className="text-[#ff4d8d]">
        {icon}
      </div>

      <span className="font-semibold text-black/80">
        {text}
      </span>
    </motion.div>
  );
}