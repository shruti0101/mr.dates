"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import Lenis from "@studio-freight/lenis";

import {motion} from "framer-motion"

export default function AboutSection() {
  const aboutRef = useRef(null);

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

    return () => {
      lenis.destroy();
    };
  }, []);



  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---- BASIC DEPTH ---- */
      gsap.set([imgMid.current, imgBack.current], {
        transformStyle: "preserve-3d",
      });

      /* ---- PINNED STORY ---- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "+=140%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          pinType: "transform",
          force3D: true,
        },
      });

      /* ---- FRONT IMAGE (STRONGER PARALLAX) ---- */
      tl.to(
        imgMid.current,
        {
          y: 120,
          scale: 0.97,
          opacity: 0.85,
          ease: "none",
        },
        0
      );

      /* ---- BACK IMAGE (SUBTLE PARALLAX) ---- */
      tl.to(
        imgBack.current,
        {
          y: 60,
          opacity: 0.6,
          ease: "none",
        },
        0
      );

      /* ---- TEXT REVEAL ---- */
      gsap.from(aboutRef.current.querySelectorAll("h2, p"), {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 65%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (

    <>
    
    
    <section
      ref={aboutRef}
      style={{ backgroundImage: "url(/aboutbg.webp)" }}
      className="relative bg-cover bg-center py-16 md:py-20 h-[900px] overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#c6a647]/60 z-0"></div>

      <div className="relative z-10 mx-auto w-full px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT IMAGES */}
          <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1,x:0,y:20 }}
          transition={{ duration: 2 }}  
          exit={{ opacity: 0, scale: 0.9 }}
          

          
          className="grid grid-cols-2 gap-6 perspective-[1200px]">
            {/* BACK IMAGE */}
            <div
              ref={imgBack}
              className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/banner/2.png"
                alt="Premium Dates"
                fill
                className="object-cover"
              />
            </div>

            {/* FRONT IMAGE */}
            <div
              ref={imgMid}
              className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/about2.avif"
                alt="Luxury Dates"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>
          {/* Luxury Tag */}
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-[1px] w-10 bg-white" />
                <span className="uppercase font-['IBM_Plex_Serif'] tracking-[0.25em] text-xs font-semibold text-white">
                  About Mr. Dates
                </span>
        
            <Image src="/date.png" width={45} height={45} alt="Dates icon" ></Image>
              </div>

            <h2 className="mb-6  font-serif text-3xl sm:text-4xl  font-bold text-black">
              Experience The Finest: Sweet, Healthy, And Nutrient-Rich
            </h2>

            <p className="mb-8 max-w-xl text-2xl text-black">
             Mr. Dates is a trusted <strong>dates supplier  </strong> and <strong>dry fruits supplier, delivering premium dates, premium dry fruits,</strong>  and <strong>healthy snacks </strong> sourced from the world’s finest farms. We cater to bulk orders and <strong>wholesale dates</strong>  requirements while ensuring every product is handpicked and processed to preserve natural taste, freshness, and nutrition.
            </p>

         
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
 Shop Now
  </span>
</button>
          </div>

        </div>
      </div>
    </section>






    </>









  );
}
