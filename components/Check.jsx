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

  /* ---------------- GSAP (DESKTOP ONLY) ---------------- */
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

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

      tl.to(
        imgMain.current,
        {
          x: -320,
          y: 620,
          rotate: 160,
          scale: 0.9,
          ease: "none",
        },
        0
      );

      tl.to(
        imgMid.current,
        {
          x: 240,
          y: 700,
          rotate: -120,
          scale: 0.9,
          ease: "none",
        },
        0
      );

      tl.to(
        imgBack.current,
        {
          x: -120,
          y: 200,
          rotate: 80,
          scale: 0.8,
          ease: "none",
        },
        0
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="
        relative overflow-hidden bg-white
        min-h-[auto] lg:h-screen
      "
    >
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-0 h-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* TEXT */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-[#c6a647]/20 text-[#7a5c2e] text-sm tracking-wide">
            Premium Dates Trading
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-black">
            Nature’s Finest <br /> Dates Collection
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-md text-black">
            As a trusted <strong>dates supplier, Mr. Dates</strong> offers premium
            dates hand-selected for richness, purity, and exceptional taste.
            Our collection is ideal for <strong>wholesale dates</strong>, luxury
            consumption, and elegant gifting.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* PRIMARY CTA */}
            <button
              className="
                group relative inline-flex items-center gap-3
                px-7 py-3 rounded-full
                bg-[#7A4A2E] text-white text-md font-medium
                overflow-hidden transition-colors duration-300
                hover:bg-[#6A3F25]
              "
            >
              <span className="pointer-events-none absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                  <path
                    d="M0,0 C20,20 20,80 0,100 L100,100 L100,0 Z"
                    fill="#4E2A1A"
                  />
                </svg>
              </span>

              <span className="relative z-10 flex h-7 w-7">
                <img src="/date.png" alt="Date" className="h-9 w-9 object-contain" />
              </span>

              <span className="relative z-10 text-md">
                Explore More
              </span>
            </button>

            {/* SECONDARY CTA */}
            <button className=" border border-[#4a2e1f] px-8 py-3 rounded-full text-black hover:bg-[#4a2e1f]/10 transition text-md">
              Contact Sales
            </button>
          </div>
        </div>

        {/* IMAGE STACK */}
        <div className="relative h-[360px] sm:h-[440px] md:h-[560px] w-full">
          <img
            ref={imgBack}
            src="/dateside.png"
            className="absolute left-0 sm:left-10 w-full h-full object-contain"
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
            className="absolute right-0 sm:-right-8 -top-3 w-28 sm:w-40 h-28 sm:h-40 object-cover"
            alt="Premium Date"
          />
        </div>

      </div>
    </section>
  );
}
