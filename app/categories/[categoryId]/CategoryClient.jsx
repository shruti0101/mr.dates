"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data/data";
import Slider from "@/components/Slider";


export default function CategoryPage({ category }) {
  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-20 text-xl">
        Category not found
      </h2>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        style={{ backgroundImage: "url('/bg3.png')" }}
        className="relative h-[80vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              {category.name}
            </h1>

            <p className="mt-6 text-white/90 max-w-2xl mx-auto">
              Hand-selected premium dates crafted for export quality,
              freshness, and rich taste.
            </p>
          </div>
        </div>
      </section>


<Slider></Slider>


      {/* ================= CONTENT ================= */}
      <section className="bg-[#faf7ef] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ========= SIDEBAR ========= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">

              <h3 className="font-serif text-lg tracking-wide text-[#3b2a10]">
                Categories
              </h3>

              <ul className="space-y-2">
                {categories.map((cat) => {
                  const isActive = cat.id === category.id;

                  return (
                    <li key={cat.id}>
                      <Link
                        href={`/category/${cat.id}`}
                        className={`group flex items-center justify-between
                        rounded-xl px-4 py-3 transition-all
                        ${
                          isActive
                            ? "bg-[#3b2a10] text-white shadow"
                            : "text-[#5a4320] hover:bg-[#efe3c8]"
                        }`}
                      >
                        <span className="font-medium tracking-wide">
                          {cat.name}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className={`transition-all ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* ========= PRODUCTS ========= */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">

              {category.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group rounded-3xl bg-white
                  border border-[#ead9b0]
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-[240px] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#fff6df] to-[#f7e7b4]">
                    <Image
                      src={product.image.src}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition-transform duration-700
                      group-hover:scale-110"
                      unoptimized
                    />

                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full
                    bg-black/70 text-white flex items-center justify-center
                    opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                    transition">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-sm font-semibold text-[#3b2a10] tracking-wide">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-[11px] uppercase tracking-widest text-[#9c7c2e]">
                      Premium • Export Grade
                    </p>

                    <div className="mt-4 mx-auto h-[1px] w-12 bg-gradient-to-r from-transparent via-[#d8b85c] to-transparent" />
                  </div>
                </Link>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
