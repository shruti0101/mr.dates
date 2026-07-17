"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  const category = [
    {
      title: "Ajwa Dates",
      image: "/products/ajwa3.webp",
      link: "/categories/ajwa-dates",
    },
    {
      title: "Barari Dates",
      image: "/products/brarichocolate.webp",
      link: "/categories/barari-dates",
    },
    {
      title: "Kimia Dates",
      image: "/products/kimia5.webp",
      link: "/categories/kimia-dates",
    },
    {
      title: "Kalmi Dates",
      image: "/products/kalmi3.webp",
      link: "/categories/kalmi-dates",
    },
    {
      title: "Medjool Dates",
      image: "/products/mediumMedjool.webp",
      link: "/categories/medjool-dates",
    },
    {
      title: "Mebroom Dates",
      image: "/products/dateCrownMabroom.webp",
      link: "/categories/mabroom-dates",
    },
    {
      title: "California Almonds",
      image: "/products/independentAlmondsPouch.webp",
      link: "/categories/california-almonds",
    },
    {
      title: "Dry Figs",
      image: "/products/afgan-figs.webp",
      link: "/categories/dry-figs",
    },
  ];

  return (

        <section className="relative py-20 overflow-hidden bg-[#decdfc]">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Decorative Images */}
      <div className="pointer-events-none absolute top-0 left-0 w-20 sm:w-28 md:w-44">
        <img
          src="/aboutimg.webp"
          alt="decorative leaf"
          className="w-full h-auto"
        />
      </div>

      <div className="pointer-events-none absolute top-0 right-0 w-16 sm:w-24 md:w-50">
        <img
          src="/check/gg.webp"
          alt="decorative leaf"
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative w-full mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-black mb-3">
          Our Categories
        </h2>

        <p className="mx-auto text-black mb-10 text-sm sm:text-2xl">
          Discover our best sellers featuring <strong>premium dates,</strong>{" "}
          and <strong>healthy snacks</strong> crafted by a trusted{" "}
          <strong>dates supplier.</strong>
        </p>

        {/* Categories */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-8 sm:gap-10 mt-16 max-w-7xl mx-auto
          "
        >
          {category.map((item, index) => (
            <Link key={index} href={item.link} className="block">
              <div
                className="
                  group relative
                  bg-gradient-to-b from-[#F3E8D8] to-[#E9D2B9]
                  rounded-3xl
                  px-6 pt-14 pb-6
                  text-center
                  shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]
                  overflow-hidden
                "
              >
                {/* Border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />

                {/* Image */}
                <div
                  className="
                    relative mx-auto mb-6
                    w-[170px] h-[170px]
                    flex items-center justify-center
                    bg-white/60
                    backdrop-blur-sm
                    rounded-full
                    shadow-inner
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={320}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-10 text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-5
                    w-full
                    bg-[#072143]
                    text-white
                    text-md
                    font-medium
                    py-2.5
                    rounded-full
                    shadow-md
                  "
                >
                  Visit Category
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <button className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black text-lg md:text-xl font-bold">
            <span className="flex h-7 w-7">
              <img
                src="/date_1.webp"
                alt="Date"
                className="h-9 w-9 object-contain"
              />
            </span>

            <Link href="/products">
              Explore All Categories
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;