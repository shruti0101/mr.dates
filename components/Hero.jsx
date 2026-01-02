"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


gsap.registerPlugin(MotionPathPlugin);

import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);






const products = [
  {
    title: "Healthy Dates",
    main: "/img1.png",
    thumb: "/img1.png",
    desc: "Naturally sweet and soft-textured dates, carefully selected for everyday nourishment. A clean source of energy, rich in fiber and essential nutrients, perfect for a healthy and balanced lifestyle.",
  },
  {
    title: "Premium Kalmi Dates",
    main: "/img2.png",
    thumb: "/img2.png",
    desc: "Rich in taste with a premium bite, Kalmi dates are handpicked at peak ripeness. Nothing added, nothing artificial — just pure flavor, authentic texture, and uncompromised quality.",
  },
  {
    title: "Ajwa Dates",
    main: "/img6.png",
    thumb: "/img6.png",
    desc: "Carefully sourced Ajwa dates known for their deep natural sweetness and traditional value. Revered for wellness benefits, these dates offer a refined taste ",
  },
  {
    title: "Classic Dates",
    main: "/img4.png",
    thumb: "/img4.png",
    desc: "Perfect for daily consumption, these classic dates deliver balanced sweetness and a satisfying chew. Naturally fresh and versatile, ideal for snacking or culinary use.",
  },
  {
    title: "Dry Fruits Mix",
    main: "/img5.png",
    thumb: "/img5.png",
    desc: "A thoughtfully curated blend of premium dry fruits, crafted to support immunity and overall wellness. Wholesome, nourishing, and ideal for mindful snacking.",
  },
];


export default function HeroDatesExact() {
  const thumbRefs = useRef([]);
  const driver = useRef({ progress: 0 });
  const imageRef = useRef(null);
  const isAnimating = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);






  

  /* ================= ARC + THUMB POSITION ================= */
useEffect(() => {
  const spacing = 0.2;
  let lastActive = -1;

  gsap.to(driver.current, {
    progress: 1,
    duration: 16,
    repeat: -1,
    ease: "none",
    onUpdate: () => {
      if (isAnimating.current) return;

      // 🔥 FIX: smooth wrapping (no jump at last → first)
      const base = gsap.utils.wrap(0, 1, driver.current.progress);

      thumbRefs.current.forEach((el, i) => {
        if (!el) return;

        let p = base - i * spacing;
        p = gsap.utils.wrap(0, 1, p);

        gsap.set(el, {
          motionPath: {
            path: "#arcPath",
            align: "#arcPath",
            alignOrigin: [0.5, 0.5],
            start: p,
            end: p,
          },
          force3D: true,
        });

        if (Math.abs(p - 0.5) < 0.012 && lastActive !== i) {
          lastActive = i;
          setActiveIndex(i);
        }
      });
    },
  });

  return () => gsap.killTweensOf(driver.current);
}, []);

   /* ---------------- LENIS SMOOTH SCROLL ---------------- */
   useEffect(() => {
     const lenis = new Lenis({
       smooth: true,
       lerp: 0.08,
     });
 
     function raf(time) {
       lenis.raf(time);
       ScrollTrigger.update();
       requestAnimationFrame(raf);
     }
 
     requestAnimationFrame(raf);
   }, []);

  /* ================= CONTINUOUS THUMB ROTATION ================= */
  useEffect(() => {
    thumbRefs.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        force3D: true,
      });
    });

    return () => {
      thumbRefs.current.forEach((el) => el && gsap.killTweensOf(el));
    };
  }, []);

  /* ================= MAIN IMAGE EXIT ================= */
  useEffect(() => {
    if (activeIndex === visibleIndex) return;

    const img = imageRef.current;
    if (!img) return;

    isAnimating.current = true;
    gsap.killTweensOf(img);

    gsap.to(img, {
      opacity: 0,
      x: 200,
      rotate: "+=20",
      scale: 0.9,
      duration: 1.8,
      ease: "power4.in",
      onComplete: () => {
        setVisibleIndex(activeIndex);
        isAnimating.current = false;
      },
    });
  }, [activeIndex]);

  /* ================= MAIN IMAGE ENTER ================= */
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    gsap.killTweensOf(img);

    gsap.fromTo(
      img,
      {
        opacity: 0,
        x: 300,
        rotate: 16,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
        duration: 2.6,
        ease: "power4.out",
      }
    );
  }, [visibleIndex]);





  

  return (

<>




    <section className="min-h-screen pt-20 flex items-center justify-center bg-[#eef7f3]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full bg-white py-14  overflow-hidden"
      >
        <div className="grid grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="px-5">
            <div className=" p-10 ">

              <AnimatePresence mode="wait">
                <motion.span
                  key={`tag-${activeIndex}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.9 }}
                  className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold tracking-wide text-green-700"
                >
                  Premium Farm Select
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${products[activeIndex].title}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.9}}
                  className="text-5xl font-extrabold leading-tight text-gray-900"
                >
                  {products[activeIndex].title}
                </motion.h1>
              </AnimatePresence>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9 }}
                className="mt-6 h-[3px] w-20 origin-left rounded-full bg-gradient-to-r from-green-600 to-green-300"
              />

         
<div className="max-w-md">


              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${products[activeIndex].desc}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 text-[15px] text-black leading-[1.75]"
                >
                  {products[activeIndex].desc}
                </motion.p>
              </AnimatePresence>
</div>

              <div className="mt-8 flex items-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-green-600 px-10 py-4 text-white font-semibold shadow-lg"
                >
                  <span className="relative z-10">Shop Now</span>
                  <span className="absolute inset-0 bg-green-700 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </motion.button>

                <motion.span
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition cursor-pointer"
                >
                  View Details →
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex items-center gap-4 text-xs text-gray-500"
              >
                <span>✓ 100% Natural</span>
                <span className="h-1 w-1 rounded-full bg-black" />
                <span>✓ Hygienically Packed</span>
                <span className="h-1 w-1 rounded-full bg-black" />
                <span>✓ Pan India Delivery</span>
              </motion.div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[460px] flex items-center justify-end">
            <Image
              width={650}
              height={760}
              className="absolute opacity-80 z-30 right-20 -top-20 animate-pulse"
              src="/leaf2.png"
              alt=""
            />

            <svg
              viewBox="0 0 500 500"
              className="absolute left-[-200px] z-10 top-1/2 -translate-y-1/2 w-[600px]"
            >
              <path
                id="arcPath"
                d="M380 40 C 140 160, 140 340, 380 460"
                fill="none"
                stroke="#d6d6d6"
                strokeDasharray="6 8"
                strokeWidth="2"
              />
            </svg>

            {products.map((p, i) => (
              <div
                key={i}
                ref={(el) => (thumbRefs.current[i] = el)}
                className="absolute left-[-190px] top-1/2 z-10 -translate-y-1/2"
              >
                <img
                  src={p.thumb}
                  className="w-23 rounded-full shadow-lg"
                  alt=""
                  draggable={false}
                />
              </div>
            ))}
            

<div>
  <Image src="/dateside.png" alt="dates" width={150} height={160} className="absolute -bottom-17 right-0 z-30"></Image>
</div>


            <motion.div
              className="relative z-10 w-[530px]"
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <img
                ref={imageRef}
                src={products[visibleIndex].main}
                className="w-full will-change-transform"
                alt=""
                draggable={false}
              />
            </motion.div>

            <motion.div
              className="w-[900px] h-[600px] absolute left-1/2 -translate-x-1/2 rounded-full bg-green-100/30 z-5"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>


{/* <section > 
    <div style={{backgroundImage:"url(/slider/1.png)"}} className='bg-center h-[300px] bg-cover bg-fixed'></div>
</section> */}
    
</>


    
  );
}
