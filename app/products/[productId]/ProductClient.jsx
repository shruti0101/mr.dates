"use client";
import React, { useState } from "react";
import { categories } from "@/Data/data";
import Image from "next/image";
import Head from "next/head";
// import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";


export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
// const [successMessage, setSuccessMessage] = useState("");
// const [loading, setLoading] = useState(false);


  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  return (
    
      <>
  <Head>
    <title>{product.metaTitle || product.name}</title>
    <meta
      name="description"
      content={product.metaDescription || product.name}
    />
  </Head>

   {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/footerbg.webp')",
        }}
      >
   
<div className="relative z-10 text-white px-6 ">
  <h2 className="max-w-4xl  text-center font-serif  text-2xl md:text-5xl font-bold z-10 ">
            {product.name}
          </h2>


   

</div>

         <div className="absolute inset-0 bg-black/70 h-[91vh]"></div>
      </div>
   

  {/* MAIN */}
  <section className="max-w-7xl mx-auto px-6 py-10 space-y-20">

    {/* TOP: IMAGE + CTA */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

      {/* IMAGE */}
      <div className=" ">
        <div className="rounded-2xl overflow-hidden border shadow-sm">
          <Image
            src={product.image.src}
            alt={product.image.src}
            width={600}
            height={600}
            className="object-contain bg-white"
            unoptimized
          />
        </div>
      </div>

      {/* INFO */}
      <div className="space-y-8">

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black">
            {product.name}
          </h2>
          <p className="text-black mt-2">
            Premium modular furniture solution by DK Modulars
          </p>
        </div>

      

        {/* SPECS */}
        <div className="border rounded-2xl overflow-hidden">
          <h3 className="px-6 py-3 text-lg font-semibold border-b bg-amber-500/30">
            Specifications
          </h3>
          <table className="w-full text-sm">
            <tbody>
              {product.specs?.map((spec, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="px-6 py-4 font-bold text-black w-1/2">
                    {spec.label}
                  </td>
                  <td className="px-6 py-4 font-medium text-black">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




  {/* CTA */}
        <div className="flex gap-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition"
          >
            Enquire Now
          </button>

          <a
            href={`https://wa.me/+919999402424?text=Hello, I am interested in ${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-300 text-white font-medium bg-green-500 hover:bg-green-400 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="bg-white border rounded-2xl p-8 ">
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black mb-8">
        Product Description
      </h2>

      <div className="space-y-8 text-black leading-relaxed">
        {product.description.map((block, i) => {
          if (block.type === "h2")
            return (
              <h3 key={i} className="text-xl font-semibold text-black">
                {block.text}
              </h3>
            );

          if (block.type === "p")
            return <p key={i}>{block.text}</p>;

          if (block.type === "ul")
            return (
              <ul key={i} className="list-disc ml-6 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
        })}
      </div>
    </div>

    {/* RELATED */}
    <div>
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black mb-10">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories
          .find((c) => c.products.some((p) => p.id === product.id))
          ?.products.filter((p) => p.id !== product.id)
          .slice(0, 4)
          .map((item) => (
            <a
              key={item.id}
              href={`/products/${item.id}`}
              className="group border rounded-2xl p-4 hover:shadow-md transition"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={item.image.src}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-black">
                {item.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-sm text-amber-600 mt-2">
                View Details <ArrowUpRight size={14} />

             
              </span>
            </a>
          ))}
      </div>
    </div>

    {/* {isFormOpen && (
      <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    )} */}

  </section>
</>

    
  );
}
