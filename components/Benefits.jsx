"use client";

import Image from "next/image";
const items = [
  {
    title: "Fitness",
    desc: "Power your workouts with energy-rich dates and premium Dates that support strength and endurance.",
    icon: "/slider/benefit1.avif",
    bg: "bg-[#DCEAD8]",
  },
  {
    title: "Maternity",
    desc: "Naturally nourish mothers-to-be with iron-rich dates and carefully selected Dates.",
    icon: "/slider/benefit2.avif",
    bg: "bg-[#EAE4D4]",
  },
  {
    title: "Kids",
    desc: "A healthy and tasty alternative to sweets, packed with natural energy and nutrients for growing kids.",
    icon: "/slider/benefit3.avif",
    bg: "bg-[#DDEAE6]",
  },
  {
    title: "Elder Care",
    desc: "Soft, easy-to-digest dates and Dates that support daily nutrition and overall well-being.",
    icon: "/slider/benefit4.avif",
    bg: "bg-[#E9DADA]",
  },
];


export default function UseCaseSection() {
  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 text-center sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              
              {/* Icon Circle */}
              <div
                className={`flex h-36 w-36 items-center justify-center rounded-full ${item.bg}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain  transition-all"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-xs text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
