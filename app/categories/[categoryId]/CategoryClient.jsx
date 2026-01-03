import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
        style={{ backgroundImage: "url('/banner/slider4.png')" }}
        className="relative h-[75vh] w-full bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
       

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              {category.name}
            </h1>

            <p className="mt-6 text-sm md:text-base text-white max-w-2xl mx-auto">
              Hand-selected premium dates crafted for export quality, freshness,
              and rich taste.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#faf7ef] to-[#f4efe2]">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {category.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative rounded-3xl bg-white/70 backdrop-blur
                           border border-[#ead9b0]
                           shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                           hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                           transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-[240px] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#fff6df] to-[#f7e7b4]">
                  <Image
                    src={product.image[0]?.src || "/placeholder.png"}
                    alt={product.image[0]?.alt || product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-700
                               group-hover:scale-110"
                    unoptimized
                  />

                  {/* Floating Icon */}
                  <div
                    className="absolute top-5 right-5 flex h-10 w-10 items-center
                               justify-center rounded-full bg-black/70 text-white
                               backdrop-blur opacity-0 scale-75
                               group-hover:opacity-100 group-hover:scale-100
                               transition-all duration-300"
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-base font-semibold text-[#3b2a10] tracking-wide">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-widest text-[#9c7c2e]">
                    Premium • Export Grade
                  </p>

                  {/* Divider */}
                  <div className="mt-4 mx-auto h-[1px] w-12 bg-gradient-to-r from-transparent via-[#d8b85c] to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
