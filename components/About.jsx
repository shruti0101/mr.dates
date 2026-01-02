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
      className="relative bg-cover bg-center py-16 lg:py-20 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#c6a647]/60 z-0"></div>

      <div className="relative z-10 mx-auto w-full px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1,x:-40,y:20 }}
          transition={{ duration: 2 }}  
          exit={{ opacity: 0, scale: 0.9 }}
          

          
          className="grid grid-cols-2 gap-6 perspective-[1200px]">
            {/* BACK IMAGE */}
            <div
              ref={imgBack}
              className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/about1.jpg"
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
            <p className="mb-3 text-lg italic font-medium tracking-wide text-white">
              About Us
            </p>

            <h2 className="mb-6  font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Experience The Finest: Sweet, Healthy, And Nutrient-Rich
            </h2>

            <p className="mb-8 max-w-xl text-2xl text-black">
              Galaxy Premium Dates Trading LLC is a Dubai-based dates trading
              company delivering exceptional quality dates sourced from Saudi
              Arabia, Palestine, and Jordan.
            </p>

            <button className="bg-black px-8 py-3 text-white hover:bg-gray-900 transition">
              View More
            </button>
          </div>

        </div>
      </div>
    </section>






    </>









  );
}
