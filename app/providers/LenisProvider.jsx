"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // ✅ prevent multiple instances
    if (lenisRef.current) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
