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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

  {category.products.map((product) => (
    <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="group block"
    >
      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-black/20 border-1 border-[#6b1f2b]">

        {/* Badge (optional) */}
        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 px-4 py-2 text-xs tracking-widest uppercase text-white
            ${
              product.badge === "bestseller"
                ? "bg-[#8b2d36]"
                : "bg-black/50"
            }`}
          >
            {product.badge === "bestseller" ? "Best Seller" : "Limited"}
          </span>
        )}

        <Image
          src={product.image.src}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* TEXT */}
      <div className="mt-6 text-center">
        <h3 className="text-[22px] font-serif text-[#6b1f2b]">
          {product.name}
        </h3>

        <p className="mt-2 text-xs tracking-[0.25em] uppercase text-[#8b7b6a]">
          {product.variety || "Premium Selection"}
        </p>
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
