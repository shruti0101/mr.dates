"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Check() {
  const sectionRef = useRef(null);

  const imgMain = useRef(null);
  const imgMid = useRef(null);
  const imgBack = useRef(null);

  const [spacerHeight, setSpacerHeight] = useState(0);

  // ✅ exact duration like "+=180%"
  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      setSpacerHeight(Math.round(vh * 1.8)); // ✅ 180%
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      gsap.set([imgMain.current, imgMid.current, imgBack.current], {
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "check-sticky-pin",
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${Math.round(window.innerHeight * 1.8)}`, 
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(imgMain.current, { x: -320, y: 620, rotate: 160, scale: 0.9, ease: "none" }, 0);
      tl.to(imgMid.current, { x: 240, y: 700, rotate: -120, scale: 0.9, ease: "none" }, 0);
      tl.to(imgBack.current, { x: -120, y: 200, rotate: 80, scale: 0.8, ease: "none" }, 0);
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getById("check-sticky-pin")?.kill(true);
      ScrollTrigger.refresh();
    };
  }, [spacerHeight]);

  return (
    <section ref={sectionRef} className="block lg:hidden xl:block relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ sticky pin */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full py-16">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#c6a647]/20 text-[#7a5c2e] text-sm tracking-wide">
                Premium Dates Trading 🌍
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-black">
                Nature’s Finest <br /> Dates Collection
              </h1>

              <p className="text-base sm:text-xl leading-relaxed max-w-md text-black">
             As a trusted <strong>dates supplier</strong>  , <strong> Mr. Dates  </strong>offers premium dates such as Medjoul Dates , Kalmi Dates , and Tunisian Dates , hand-selected for richness, purity, and exceptional taste. Our collection also includes Dry Fruits Mix , Almonds, Cashews , Walnuts , Pistachios , and wholesome healthy snacks, perfect for daily use, gifting, or bulk orders.
              </p>
            </div>

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
        </div>

       
        <div className="hidden lg:block" style={{ height: spacerHeight }} />
      </div>
    </section>
  );
}
