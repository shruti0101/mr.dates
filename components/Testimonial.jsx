"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote: " Freshness You Can Truly Taste ",
    name: "Amaan Bakali",
    image: "/new/1.jpg",
    backText:
      "Truly delivers freshness you can taste in every bite. Their premium quality dates are soft, naturally sweet, and carefully packed to maintain hygiene and flavor. Every pack feels fresh and authentic, making them perfect for healthy snacking, gifting, and daily nutrition. The quality and taste consistently exceed expectations every time.",
  },

  {
    quote: " Premium Quality in Every Pack ",
    name: "Ankush Datar",
    image: "/new/2.png",
    backText:
      "Offers premium quality in every pack with fresh, soft, and naturally delicious dates. The hygienic packaging and carefully selected products reflect their commitment to quality and customer satisfaction. Whether for daily healthy snacking or festive gifting, their dates consistently deliver authentic taste, freshness, and a truly premium experience every time.",
  },

  {
    quote: " Best Dates I’ve Ever Tried ",
    name: "Khushi Verma",
    image: "/new/3.png",
    backText:
      "Offers some of the best dates I’ve ever tried. The texture is soft, the taste is naturally rich and sweet, and the freshness is unmatched. Their premium packaging and consistent quality make every purchase satisfying. Perfect for healthy eating, gifting, and enjoying authentic premium dates every single day.",
  },

  {
    quote: " Trusted Quality with Every Bite ",
    name: "Dhruv Patel",
    image: "/new/5.png",
    backText:
      "Delivers trusted quality with every bite through its fresh, premium, and carefully selected dates. The rich taste, soft texture, and hygienic packaging make their products stand out from ordinary market options. Perfect for daily nutrition, healthy snacking, and festive gifting, Mr. Dates consistently offers freshness and authenticity customers can trust.",
  },

  {
    quote: " Carefully Selected Premium Dates ",
    name: "Riya Sehgal",
    image: "/new/6.png",
    backText:
      "Offers carefully selected premium dates known for their freshness, softness, and natural sweetness. Every pack reflects high quality and hygienic packaging standards, ensuring a rich and authentic taste experience. Whether for healthy snacking, gifting, or daily nutrition, their premium dates deliver exceptional quality and satisfaction with every purchase.",
  },

  {
    quote: " A Perfect Blend of Taste & Quality ",
    name: "Rohit Mehta",
    image: "/new/7.png",
    backText:
      "Delivers a perfect blend of taste and quality with its fresh, naturally sweet, and premium dates. Every product is carefully packed to maintain hygiene and freshness, ensuring a satisfying experience every time. Their rich flavor, soft texture, and consistent quality make them ideal for healthy snacking and gifting.",
  },

  {
    quote: " Exceptional Freshness and Packaging ",
    name: "Ronit Mishra",
    image: "/new/8.png",
    backText:
      "Stands out for its exceptional freshness and premium packaging. The dates are soft, naturally sweet, and carefully packed to preserve quality and hygiene. Every order feels fresh and authentic, making them perfect for healthy snacking, gifting, and daily nutrition. Their attention to quality truly creates a premium customer experience.",
  },

  {
    quote: " The Finest Dates for Everyday Nutrition ",
    name: "Shubham Verma",
    image: "/new/10.avif",
    backText:
      "Provides some of the finest dates for everyday nutrition. Their dates are naturally sweet, rich in taste, and packed with freshness and quality. Carefully selected and hygienically packed, they make a healthy and delicious snack for daily consumption while also being perfect for gifting and special occasions.",
  },

  {
    quote: " Premium Dates That Exceed Expectations ",
    name: "Arjun Singh",
    image: "/new/9.png",
    backText:
      "Offers premium dates that truly exceed expectations in taste, freshness, and quality. Every pack contains carefully selected dates with a soft texture and naturally rich sweetness. Their hygienic packaging and consistent quality make them an excellent choice for healthy snacking, gifting, and enjoying authentic premium dates every day.",
  },
];

export default function ProteinCards() {
  const [flippedCard, setFlippedCard] = useState(null);
  return (
    <section className="w-full bg-[#F4D99A] py-7 md:py-10">
      {/* TOP HEADING */}
      <div className="mb-7 md:mb-14 px-8 md:px-14">
        {/* MAIN HEADING */}
        <div
          className="
      flex flex-col items-center
      justify-center gap-6
      lg:flex-row lg:items-end
    "
        >
          {/* BIG TEXT */}
          <h2
            className="
        text-start
        text-[3rem]
        font-black
        leading-[0.9]
        tracking-[-1px]
        text-[#0B132B]
        sm:text-[4.5rem]
        md:text-[6rem]
        
      "
          >
            Real people.
            <br className="block lg:hidden" /> Real love.
          </h2>

          {/* SIDE TEXT */}
          <p
            className="
        max-w-[320px]
        text-center
        text-lg
        leading-[1.6]
        text-black
        md:text-2xl
        lg:mb-3 lg:text-left
      "
            style={{
              fontFamily: "monospace",
            }}
          >
            We’re blessed! Because
            <br />
            we have you <span className="text-[#C03A7A] text-3xl">♡</span>
          </p>
        </div>
      </div>

      {/* SCROLL WRAPPER */}
      <div
        className="
          custom-scrollbar
          flex
          gap-8
          overflow-x-auto
          px-8
          pb-6
          md:px-25
          snap-x
          snap-mandatory
          scroll-smooth
        "
      >
        {testimonials.map((item, index) => (
          <div
            onClick={() => {
              if (window.innerWidth < 1024) {
                setFlippedCard(flippedCard === index ? null : index);
              }
            }}
            key={index}
            className="
              group
              relative
              h-[480px]
              min-w-[300px]
              max-w-[300px]
              snap-start
              [perspective:2000px]
            "
          >
            {/* FLIP CONTAINER */}
            <div
              className={`
relative
h-full
w-full
transition-transform
duration-700
ease-out
[transform-style:preserve-3d]
group-hover:[transform:rotateY(180deg)]
${flippedCard === index ? "[transform:rotateY(180deg)]" : ""}
`}
            >
              {/* FRONT */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-between
                  rounded-[28px]
                  border-[4px]
                  border-[#F59E0B]
                  bg-[#FAFAF8]
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  [backface-visibility:hidden]
                "
              >
                {/* QUOTE */}
                <div>
                  <h2
                    className="
                      text-[30px]
                      leading-[1.2]
                      font-black
                      tracking-[-2.5px]
                      text-black
                    "
                    style={{
                      fontFamily: "Arial Black, Helvetica Neue, sans-serif",
                    }}
                  >
                    “{item.quote}”
                  </h2>
                </div>

                {/* IMAGE + USER */}
                <div>
                  <div className="relative mb-3 h-[190px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-[30px] font-black tracking-[-1px] text-black">
                    {item.name}
                  </h3>

                  <div className="mt-3 h-[5px] w-[160px] rounded-full bg-[#F59E0B]" />
                </div>
              </div>

              {/* BACK */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-between
                  rounded-[28px]
                  border-[4px]
                  border-[#F59E0B]
                  bg-white
                  p-5
                  text-black
                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  [transform:rotateY(180deg)]
                  [backface-visibility:hidden]
                "
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[5px] text-[#F59E0B]">
                    Review
                  </p>

                  <h3 className="text-[20px] font-black tracking-[-1px] text-black">
                    {item.name}
                  </h3>

                  <p className=" text-[15px] font-semibold mt-3 leading-[1.7] text-black ">
                    {item.backText}
                  </p>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
