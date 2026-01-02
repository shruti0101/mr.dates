"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);













export default function Check() {
  const aboutRef = useRef(null);

  const imgMain = useRef(null);
  const imgMid = useRef(null);
  const imgBack = useRef(null);

  /* ---------------- LENIS ---------------- */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "+=180%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(imgMain.current, {
        x: -320,
        y: 620,
        rotate: 160,
        scale: 0.9,
        ease: "none",
      }, 0);

      tl.to(imgMid.current, {
        x: 240,
        y: 700,
        rotate: -120,
        scale: 0.9,
        ease: "none",
      }, 0);

      tl.to(imgBack.current, {
        x: -120,
        y: 200,
        rotate: 80,
        scale: 0.8,
        ease: "none",
      }, 0);
    });

    return () => ctx.revert();
  }, []);











  return (
<>


    <section
      ref={aboutRef}
      className="relative h-screen overflow-hidden
      bg-gradient-to-br from-[#f8efe6] via-[#f2e3d3] to-[#e8d1b6]"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] bg-[#c6a647]/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto h-full px-6 grid md:grid-cols-2 items-center">

        {/* TEXT */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 mt-6 rounded-full bg-[#c6a647]/20 text-[#7a5c2e] text-sm tracking-wide">
            Premium Dates Trading
          </span>

          <h1 className="text-5xl  md:text-6xl font-serif font-bold leading-tight text-[#4a2e1f]">
            Nature’s Finest <br /> Dates Collection
          </h1>

          <p className="text-lg leading-relaxed max-w-md text-[#5c4636]">
         As a trusted <strong>dates supplier,  Mr. Dates</strong>  offers premium dates hand-selected for richness, purity, and exceptional taste. Our collection is ideal for <strong>wholesale dates,</strong>  luxury consumption, and elegant gifting, delivering consistent quality in every pack.
          </p>

          <div className="flex gap-4 pt-4">
        <button
  className=" cursor-pointer
    group relative inline-flex items-center gap-3
    px-7 py-3
    rounded-full
    bg-[#7A4A2E]
    text-white text-sm font-medium
    overflow-hidden
    transition-colors duration-300
    hover:bg-[#6A3F25]
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
      className="h-9 w-9 object-contain"
    />
  </span>

  {/* Text */}
  <span className="relative z-10 font-poppins">
    Explore More
  </span>
</button>
            <button className="font-poppins border border-[#4a2e1f] px-8 py-3 rounded-full text-[#4a2e1f] hover:bg-[#4a2e1f]/10 transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* IMAGE STACK */}
        <div className="relative h-[560px] w-full">
          <img
            ref={imgBack}
            src="/dateside.png"
            className="absolute left-10 w-full h-full object-contain "
            alt="Background Dates"
          />
          <img
            ref={imgMid}
            src="/check/3.png"
            className="absolute w-full h-full rounded-3xl object-contain"
            alt="Dates Packaging"
          />
          <img
            ref={imgMain}
            src="/date.png"
            className="absolute -right-8 -top-3 w-40 h-40 object-cover "
            alt="Premium Date"
          />
        </div>
      </div>
    </section>





</>




  );
}
