"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ✅ Register only once, in correct order
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const products = [
  {
    title: "Healthy Dates",
    main: "/products/kimia6.webp",
    thumb: "/img1.png",
    desc: "As a reliable Healthy dates supplier, we offer naturally sweet, soft-textured Healthy Dates, carefully selected for everyday nourishment. A clean source of energy, rich in fiber and essential nutrients—perfect for a healthy, balanced lifestyle.",
  },
  {
    title: "Kalmi Dates",
    main: "/products/anjeer.webp",
    thumb: "/img2.png",
    desc: "As a leading Kalmi dates supplier, we offer rich-tasting Kalmi Dates, handpicked at peak ripeness. Nothing added, nothing artificial—just pure flavor, authentic texture, and uncompromised quality.",
  },
  {
    title: "Ajwa Dates",
    main: "/testimg.png",
    thumb: "/img6.png",
    desc: "Carefully sourced Ajwa dates known for their deep natural sweetness and traditional value. Revered for wellness benefits, these dates offer a refined taste",
  },
  {
    title: "Classic Dates",
    main: "/testimg3.png",
    thumb: "/img4.png",
    desc: "As a trusted dates supplier, we bring you these Classic Dates, perfect for daily consumption. They deliver balanced sweetness and a satisfying chew, naturally fresh and versatile—ideal for snacking or culinary use.",
  },
  {
    title: "Dry Fruits Mix",
    main: "/products/self3.webp",
    thumb: "/img5.png",
    desc: "As a trusted dates supplier, we also bring you a premium Dry Fruits Mix —a thoughtfully curated blend of wholesome dry fruits. Packed with nutrients to support immunity and overall wellness, perfect for mindful snacking.",
  },
];

export default function HeroDatesExact() {
  const thumbRefs = useRef([]);
  const driver = useRef({ progress: 0 });
  const imageRef = useRef(null);
  const isAnimating = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const bgImages = [
    "/check10.png",
    "/check11.png",
    "/check12.png",
    "/check13.png",
    "/check12.png",
  ];

  /* ✅ GSAP THUMBS */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const spacing = 0.2;
      let lastActive = -1;

      gsap.to(driver.current, {
        progress: 1,
        duration: 16,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          if (isAnimating.current) return;

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
            });

            if (Math.abs(p - 0.5) < 0.012 && lastActive !== i) {
              lastActive = i;
              setActiveIndex(i);
            }
          });
        },
      });

      thumbRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, {
          rotate: 360,
          duration: 30,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  /* ✅ LENIS (proper RAF cancel) */
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf); // ✅ IMPORTANT
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  /* ✅ MAIN IMAGE EXIT */
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
  }, [activeIndex, visibleIndex]);

  /* ✅ MAIN IMAGE ENTER */
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    gsap.killTweensOf(img);

    gsap.fromTo(
      img,
      { opacity: 0, x: 300, rotate: 16, scale: 0.9 },
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
    <section
      style={{ backgroundImage: `url(${bgImages[activeIndex]})` }}
      className="h-[70vh] md:h-[110vh] relative md:bg-center bg-cover flex items-center justify-center transition-all duration-1000"
    >
      <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full z-10  py-14 mt-15 md:mt-25 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* LEFT CONTENT */}
            <div className=" md:px-10">
              <div className="p-8 md:p-10 ">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`tag-${activeIndex}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.9 }}
                    className="inline-block mb-4 rounded-full  px-4 bg-[#EFDECC] py-1 text-sm font-semibold tracking-wide text-black"
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
                    transition={{ duration: 0.9 }}
                    className="  text-[42px] sm:text-[56px] md:text-[82px] uppercase tracking-wide font-bold text-white "
                  >
                    {products[activeIndex].title}
                  </motion.h1>
                </AnimatePresence>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9 }}
                  className="mt-4 h-[3px] w-20 origin-left  "
                />

                <div className="max-w-md">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`desc-${products[activeIndex].desc}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.6 }}
                      className="md:text-[22px]  text-white font-medium leading-[1.75]"
                    >
                      {products[activeIndex].desc}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-7 flex items-center gap-8">
                  <button
                    className=" cursor-pointer
    group relative inline-flex items-center gap-3
    px-7 py-3
    rounded-full
      bg-white
    text-black text-sm font-medium tracking-wide
   
   
    overflow-hidden
    transition-colors duration-300
    hover:bg-white
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
                      Explore More
                    </span>
                  </button>

                  <motion.span
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-white transition cursor-pointer"
                  >
                    View Details →
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold text-white"
                >
                  <span>✓ 100% Natural</span>
                  <span className="h-1 w-1 rounded-full bg-white" />
                  <span>✓ Hygienically Packed</span>
                  <span className="h-1 w-1 rounded-full bg-white" />
                  <span>✓ Pan India Delivery</span>
                </motion.div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden xl:flex relative h-[460px] items-center justify-end">
              <Image
                width={650}
                height={760}
                className="absolute  z-30 right-20 -top-20 animate-pulse"
                src="/leaf2.png"
                alt=""
              />

              <svg
                viewBox="0 0 500 500"
                className="absolute left-[-210px] z-10 top-1/2 -translate-y-1/2 w-[600px]"
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
                <Image
                  src="/dateside.png"
                  alt="dates"
                  width={150}
                  height={160}
                  className="absolute -bottom-17 right-0 z-30"
                ></Image>
              </div>

              <motion.div
                className="relative z-10 w-[570px]"
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <img
                  ref={imageRef}
                  src={products[visibleIndex].main}
                  className=" w-[700] will-change-transform"
                  alt=""
                  draggable={false}
                />
              </motion.div>

              {/* <motion.div
              className="w-[900px] h-[600px] absolute left-1/2 -translate-x-1/2 rounded-full bg-[#F1F9F5]/30 z-5"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            /> */}
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
