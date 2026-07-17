"use client";
 
import {
  Heart,
  Sparkles,
  Flame,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

export default function FunkyHealthSection() {
  const benefits = [
    {
      title: "Natural Energy",
      desc: "Quick natural fuel without sugar crashes.",
      icon: <Flame className="w-6 h-6" />,
      color: "bg-[#FFB703]",
      rotate: "-rotate-3",
    },
    {
      title: "Heart Friendly",
      desc: "Packed with potassium & antioxidants.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-[#FB7185]",
      rotate: "rotate-2",
    },
    {
      title: "Gut Healthy",
      desc: "Fiber-rich goodness for better digestion.",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-[#8B5CF6]",
      rotate: "-rotate-2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#a1bc98] py-16 px-6 lg:px-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFB703]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FB7185]/10 rounded-full blur-3xl" />

      {/* FLOATING SHAPES */}
      <div
     
        className="absolute top-20 left-20 w-40 h-40 border-[18px] border-[#000]/10 rounded-full"
      />

      <div
    
     
        className="absolute bottom-20 left-10 w-24 h-24 bg-[#8B5CF6]/20 rounded-[30px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

      
        <div>

     
          <div
          
            className="inline-flex items-center gap-2 bg-white border-[3px] border-black rounded-full px-6 py-3 shadow-[6px_6px_0px_#000]"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-wide">
              Why Dates?
            </span>
          </div>

          {/* HEADING */}
          <h1
        
            className="mt-8 text-[4rem] md:text-[6rem] leading-[0.88] tracking-[5px] font-black text-black"
          >
            Tiny fruit.
            <br />
            Massive
            <br />
            benefits.
          </h1>

         
      <p

  className="mt-8 text-lg leading-8 text-black max-w-xl"
>
  Dates are naturally rich in fiber, antioxidants, potassium,
  magnesium, and essential nutrients that help support digestion,
  heart health, immunity, and sustained energy throughout the day.
  Their natural sweetness makes them a healthier alternative to
  processed snacks while delivering real nourishment your body
  actually benefits from.
</p>

          {/* CTA BUTTON */}
          <button
           
            className="group mt-2 flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full text-lg font-black shadow-[8px_8px_0px_#FFB703]"
          >
            Discover More
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>

          {/* BOTTOM STATS */}
          <div className="mt-14 flex flex-wrap gap-5">

            <StatCard number="100%" label="Natural" />
            <StatCard number="0%" label="Added Sugar" />
            <StatCard number="24/7" label="Energy Boost" />

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* MAIN IMAGE */}
          <div
       
            className="relative"
          >
            <img
              src="/testimg3.webp"
              alt="Dates"
              className="w-full max-w-[500px] rounded-[40px] border-[6px] border-black shadow-[15px_15px_0px_#FFB703] object-cover"
            />

            {/* FLOATING TAGS */}
            <FloatingSticker
              text="High Fiber"
              className="-top-5 -left-10 bg-[#FFB703]"
              delay={0}
            />

            <FloatingSticker
              text="No Sugar Added"
              className="top-40 -left-10 bg-[#FB7185]"
              delay={1}
            />

            <FloatingSticker
              text="Antioxidants"
              className="bottom-24 -left-10 bg-[#8B5CF6]"
              delay={2}
            />

            {/* CURSOR FOLLOW GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#ffffff10] to-[#ffffff40]" />
          </div>

          {/* BENEFIT STACK */}
          <div className="absolute -bottom-5 right-0 flex flex-col gap-5">

            {benefits.map((item, index) => (
              <div
                key={index}
             
                className={`${item.color} ${item.rotate} max-w-[270px] rounded-[30px] border-[4px] border-black p-5 shadow-[8px_8px_0px_#000] cursor-pointer`}
              >

                <div className="flex items-center gap-3">
                  <div className="bg-black text-white p-3 rounded-2xl">
                    {item.icon}
                  </div>

                  <h3 className="font-black text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 leading-6 text-black/80 font-medium">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* FLOATING STICKER */

function FloatingSticker({ text, className, delay }) {
  return (
    <div
      
      className={`absolute px-5 py-3 rounded-full border-[3px] border-black font-black text-black shadow-[5px_5px_0px_#000] ${className}`}
    >
      {text}
    </div>
  );
}

/* STAT CARD */

function StatCard({ number, label }) {
  return (
    <div
    
      className="bg-white border-[3px] border-black rounded-3xl px-6 py-5 shadow-[6px_6px_0px_#000]"
    >
      <h3 className="text-3xl font-black">{number}</h3>
      <p className="text-black/60 font-semibold mt-1">
        {label}
      </p>
    </div>
  );
}