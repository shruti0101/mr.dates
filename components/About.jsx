"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
  
      className="
        relative bg-[#F4EBEF] overflow-hidden
        py-16 
   
      "
    >
    

      <div className="relative  z-10 mx-auto w-full px-4 sm:px-6 md:px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 gap-6
              perspective-[1200px]
            "
          >
            {/* BACK IMAGE */}
            <div
              className="
                hidden md:block relative h-[260px] sm:h-[360px] lg:h-[420px]
                w-full overflow-hidden rounded-lg shadow-lg
              "
            >
              <Image
                src="/banner/2.webp"
                alt="Premium Dates"
                fill
                className="max-w-full h-auto object-cover"
              />
            </div>

            {/* FRONT IMAGE */}
            <div
              className="
                relative h-[260px] sm:h-[360px] lg:h-[420px]
                w-full overflow-hidden rounded-lg shadow-lg
              "
            >
              <Image
                src="/about2.avif"
                alt="Luxury Dates"
                fill
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Luxury Tag */}
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="h-[1px] w-10 bg-black" />
              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-black">
                About Mr. Dates
              </span>
              <Image src="/date.png" width={45} height={45} alt="Dates icon" />
            </div>

            <h2 className="mb-6 font-bold text-black text-2xl sm:text-3xl md:leading-16 md:text-5xl">
              Experience The Finest: Sweet, Healthy, And Nutrient-Rich
            </h2>

            <p className="mb-5 max-w-3xl text-lg sm:text-xl md:text-2xl tracking-wide text-black">
              <strong>Mr. Dates</strong> is a trusted{" "}
              <strong>dates supplier</strong> and{" "}
              <strong>dry fruits supplier</strong>, offering premium dates such as{" "}
              <strong>Medjool Dates</strong>, <strong>Kalmi Dates</strong>, and{" "}
              <strong>Tunisian Dates</strong>, along with a nutritious{" "}
              <strong>Dry Fruits Mix</strong>. Our range also includes{" "}
              <strong>Almonds</strong>, <strong>Cashews</strong>,{" "}
              <strong>Walnuts</strong>, and <strong>Pistachios</strong>, making us a
              reliable source for wholesome and <strong>healthy snacks</strong>.
              <br />
              <br />
              We cater to <strong>bulk dates</strong> and{" "}
              <strong>wholesale dates</strong> requirements, ensuring every product is
              handpicked and hygienically processed to preserve natural taste,
              freshness, and nutritional value.
            </p>

            {/* CTA BUTTON — UNCHANGED */}
            <button
              className="
                group relative inline-flex items-center gap-3
                px-7 py-3 rounded-full
                bg-[#4E2A1A]
                 text-md font-medium tracking-wide
                overflow-hidden transition-colors duration-300
                hover:bg-[#9c735a] text-white
              "
            >
              <span className="pointer-events-none absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out">
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

              <span className="relative z-10 flex h-7 w-7">
                <img
                  src="/date_1.webp"
                  alt="Date fruit"
                  className="h-10 w-10 object-contain"
                />
              </span>

              <Link
                href="/products"
                className="relative z-10 text-md md:text-xl font-bold"
              >
                Shop Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}