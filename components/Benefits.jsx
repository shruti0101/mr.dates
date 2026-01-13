"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Fitness",
    desc: "Power your workouts with energy-rich dates that support stamina, muscle recovery, and long-lasting endurance.",
    icon: "/slider/benefit1.avif",
    bg: "bg-[#DCEAD8]",
  },
  {
    title: "Maternity",
    desc: "Support expecting mothers with iron-rich, naturally nourishing dates that promote strength and overall wellness.",
    icon: "/slider/benefit2.avif",
    bg: "bg-[#EAE4D4]",
  },
  {
    title: "Kids",
    desc: "A delicious and healthy alternative to sugary snacks, packed with natural energy for growing minds and bodies.",
    icon: "/slider/benefit3.avif",
    bg: "bg-[#DDEAE6]",
  },
  {
    title: "Elder Care",
    desc: "Soft, easy-to-digest dates that help maintain daily nutrition, vitality, and digestive comfort.",
    icon: "/slider/benefit4.avif",
    bg: "bg-[#E9DADA]",
  },
];

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function UseCaseSection() {
  return (
    <section className="bg-[#faf7f2] py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black sm:text-5xl ">
            Natural Nutrition for Modern Lifestyles
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-black">
            From active lifestyles to everyday wellness, our premium dates
            provide natural nutrition, energy, and care for all age groups.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 gap-14 text-center sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <motion.div
                className={`flex h-36 w-36 items-center justify-center rounded-full ${item.bg}`}
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-xs text-base leading-6 text-black">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
