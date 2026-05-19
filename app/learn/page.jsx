"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CheckCheck } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
export default function HeroSection() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const client = [
        {
            image: "/client1.webp"
        },

        {
            image: "/client2.webp"
        },

        {
            image: "/client3.webp"
        },
    ]

const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Successfully subscribed 🎉");
        setEmail("");
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Failed to subscribe");
    } finally {
      setLoading(false);
    }
  };




const blogs = [
  {
    id: 1,
    title: "Dates Benefits: Mr. Dates Is a Trusted Dates Supplier",
    desc: "Dates ko duniya ke sabse healthy aur nutritious dry fruits mein count kiya jata hai. Ye sirf ek tasty fruit nahi balki energy, nutrition aur health benefits ka powerful source bhi hain. ",
    image: "/faq.webp",
    link:"/blogs/dates-benefits-trusted-dates-supplier",
    category: "Wellness",
  },
  {
    id: 2,
    title: "पुरुषों के लिए खजूर खाने के फायदे – बेहतर ताकत और स्वास्थ्य का प्राकृतिक स्रोत",
    desc: "Simple science-backed routines to improve focus and daily productivity.",
    image: "/blogimg.webp",
    link:"/blogs/dates-khajur-khane-ke-fayde-for-male",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Barari Chocolate Dates by Mr. Dates – A Delicious Fusion of Health and Luxury",
    desc: "In a world where consumers are becoming increasingly conscious about their food choices, the demand for snacks that offer both taste and nutrition is growing rapidly. ",
    image: "/check/1.webp",
    link:"/blogs/barari-chocolate-dates-mr-dates",
    category: "Nutrition",
  },
];



  return (

    <>
    
    
    <section
      style={{ backgroundImage: "url(/aboutbg.webp)" }}
      className="w-full bg-cover bg-center overflow-hidden relative"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* NAVBAR */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="leading-none">
            <Image
              src="/logo-black.webp"
              alt="Brand Logo"
              width={120}
              height={40}
            />
          </Link>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-10 text-[18px] font-semibold text-black">
            <Link href="/blogs">Newsletter</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
    
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center px-6 py-20">
        
        {/* CENTER CONTENT */}
        <div className="max-w-4xl flex flex-col items-center text-center">
          
       {/* BADGE */}
<div className="bg-[#F6E7C8] shadow-[0_6px_0_rgba(0,0,0,0.25)] border-2 border-black/10 rounded-lg px-8 py-4 mb-8">
  <p className="text-[#8d5a00] font-black text-lg md:text-2xl flex items-center gap-3">
    Premium Quality Dates • Farm Fresh 🌴
  </p>
</div>

{/* HEADING */}
<h1 className="text-white font-black leading-[1] text-5xl md:text-7xl tracking-tight">
  Experience The Taste Of{" "}
  <span className="bg-[#B8F36A] text-black px-4 py-1 inline-block rounded-md">
    Premium Dates
  </span>
</h1>

{/* SUBTEXT */}
<p className="mt-8 text-white/90 text-lg md:text-2xl leading-relaxed max-w-3xl font-medium">
  Discover handpicked premium dates sourced with care —
  naturally rich in nutrition, freshness, and authentic taste.
  Perfect for healthy snacking, gifting, and everyday wellness.
</p>


{/* SMALL TEXT */}
<p className="mt-10 text-white/80 text-sm md:text-base tracking-wide">
  100% Natural • Rich In Nutrients • Perfect For Gifting • Premium Quality
</p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            
            <button className="bg-white border-[5px] border-black rounded-[22px] px-14 py-5 text-xl md:text-2xl font-black uppercase shadow-[0_8px_0_rgba(0,0,0,0.35)] hover:translate-y-1 hover:shadow-[0_4px_0_rgba(0,0,0,0.35)] transition-all">
              Learn More
            </button>

          </div>

     
        </div>
      </div>
    </section>




        {/* intro */}
            <section
            
                className="relative lg:py-20 py-10 bg-[#FBF7F1] overflow-hidden"
            >


                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4EA9D]/25 via-transparent to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-5 items-center">

                    {/* ================= TEXT ================= */}
                    <div>
                        {/* Luxury Tag */}
                        <div className="inline-flex items-center gap-3 mb-3">
                            <span className="h-[1px] w-10 bg-[#B88A2E]" />
                            <span className="uppercase  tracking-[0.25em] text-xs font-semibold text-[#6B091D]">
                                About Mr. Dates
                            </span>

                            <Image src="/date.png" width={45} height={45} alt="Dates icon" ></Image>
                        </div>

                        <h2 className=" text-4xl md:text-5xl lg:text-[65px] font-semibold leading-tight mb-5 text-[#111]">
                            Crafted by Nature.<br />
                            Perfected by Us.🍂
                        </h2>

                        <p className="text-[20px] leading-[1.9] mb-4 text-black max-w-[640px]">
                            <span className=" text-[#6B091D]">Mr. Dates</span> is a
                            premium dates and dry fruits brand dedicated to delivering authentic
                            taste, superior quality, and natural nutrition. We work closely with
                            trusted farms and suppliers to bring you the finest handpicked dates —
                            rich in flavor, freshness, and goodness.
                        </p>

                        <p className="text-[20px] leading-[1.9] text-black max-w-[640px] mb-8">
                            From sourcing and processing to hygienic packaging and timely delivery,
                            every step reflects our commitment to excellence. Retailers,
                            wholesalers, and families trust us for consistency, transparency, and
                            uncompromising quality.
                        </p>

                        {/* Trust Metrics */}
                        <div className="flex  flex-wrap gap-10 mt-6">
                            <div>
                                <p className="text-3xl font-bold text-[#6B091D]">15k+</p>
                                <p className="text-sm text-  mt-1">Happy Customers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#6B091D]">100%</p>
                                <p className="text-sm text-[#555] mt-1">Natural Products</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#6B091D]">Trusted</p>
                                <p className="text-sm text-[#555] mt-1">Retail & Wholesale</p>
                            </div>
                        </div>
                    </div>

                    {/* ================= IMAGE ================= */}
                    <div className="relative flex justify-center lg:justify-end">





                        <Image
                            src="/aboutpage/1.webp"
                            alt="About Mr. Dates"
                            width={500}
                            height={500}
                            className="object-cover rounded-[28px] "
                        />
                    </div>

                </div>
            </section>









            {/* best dates */}
            <section
          
                className="bg-[#EEF1EA] md:py-16 py-8 px-4 md:px-12"
            >

                <div className="max-w-7xl mx-auto  text-[#111]">

                    {/* ================= HEADER BADGE ================= */}
                    <div className="flex items-center gap-2 mb-2 bg-[#f4ea9d] text-black px-5 py-3 rounded-full text-sm font-medium w-fit ">
                        <span>BEST DATES</span>
                        <Image
                            width={35}
                            height={35}
                            src="/date.png"
                            alt="Dates icon"
                        />
                    </div>

                    {/* ================= HERO CONTENT ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-6 items-center mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-[65px] font-bold leading-tight max-w-[650px] ">
                            PURE DATES. NATURAL ENERGY. REAL GOODNESS.
                        </h1>

                        <div>
                            <p className="text-lg sm:text-[20px] max-w-[520px] mb-6 text-[#333]">
                                MR DATES brings you premium-quality dates sourced from the finest farms.
                                Naturally sweet, rich in nutrients, and packed with energy — our dates
                                are perfect for everyday snacking, gifting, and bulk supply.
                            </p>

                            <div className="flex flex-wrap items-center gap-10">
                                <div>
                                    <span className="text-lg">⭐️⭐️⭐️⭐️⭐️</span>
                                    <p className="font-bold mt-2 leading-tight">
                                        4.8/5 <br />
                                        <span className="text-sm font-normal text-[#444]">
                                            Trusted by 15,000+ happy customers
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    {client.map((u, i) => (
                                        <img
                                            key={i}
                                            src={u.image}
                                            width={50}
                                            height={50}
                                            alt="Customer"
                                            className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-3 first:ml-0 shadow-md"
                                        />
                                    ))}
                                    <div className="bg-[#6B091D] text-white px-3 py-2 rounded-full -ml-3 text-sm shadow-md">
                                        15k+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= ROW 1 ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14 items-stretch">
                        {/* Image */}
                        <div className="relative group">
                            <Image
                                width={500}
                                height={500}
                                src="/aboutpage/1.webp"
                                alt="Premium dates"
                                className="w-full h-[400px] rounded-2xl object-cover shadow-lg"
                            />
                            <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
                                Premium Dates
                            </button>
                        </div>

                        {/* Info */}
                        <div className="bg-[#8E1013] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">
                                    Naturally Sweet. Purely Nutritious.
                                </h3>
                                <div className="h-px w-full bg-white/40 mb-4" />
                                <ul className="space-y-6 text-lg">
                                    {[
                                        "100% natural dates with no added sugar or preservatives",
                                        "Rich source of energy, fiber, and essential minerals",
                                        "Carefully sourced from trusted farms for premium quality",
                                        "Perfect for daily snacking, gifting, and bulk supply",
                                        "Hygienically packed to ensure freshness & extended shelf life"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCheck size={16} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative group">
                            <Image
                                width={500}
                                height={500}
                                src="/banner/2.webp"
                                alt="Bulk dates supply"
                                className="w-full h-[400px] rounded-2xl object-cover shadow-lg"
                            />
                            <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
                                Bulk Orders
                            </button>
                        </div>
                    </div>

                    {/* ================= ROW 2 ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                        <div className="lg:col-span-2 relative group">
                            <Image
                                width={1000}
                                height={1000}
                                src="/slider/1.webp"
                                alt="Handpicked dates"
                                className="max-w-full h-auto rounded-2xl object-cover shadow-lg"
                            />
                            <button className="absolute bottom-4 left-4 bg-[#6B091D] text-white px-4 py-3 rounded-lg text-sm shadow-lg transition group-hover:scale-105">
                                Handpicked Quality
                            </button>
                        </div>

                        <div className="bg-[#8E1013]  text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">
                                    The Authentic Taste of Premium Dates
                                </h3>
                                <div className="h-px w-full bg-white/40 mb-4 " />
                                <ul className="space-y-6 text-lg">
                                    {[
                                        "Soft texture and rich natural sweetness in every bite",
                                        "Ideal for health-conscious consumers and fitness diets",
                                        "Trusted by retailers, wholesalers, and corporate buyers",
                                        "Hygienically packed to preserve freshness and quality",
                                        "Long shelf life with consistent taste and premium quality",
                                        "Perfect for bulk supply, gifting, and everyday consumption"




                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCheck size={16} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




    <section className="w-full py-14 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#8d2957] font-bold">
            Latest Articles
          </p>

          <h2 className="mt-2 text-4xl md:text-6xl font-black text-black leading-tight">
            Explore Our{" "}
            <span className="bg-[#B8F36A] px-3">
              Wellness Articles
            </span>
          </h2>

          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            Read expert-backed articles about health, collagen,
            nutrition, fitness, and mindful living.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-[28px] overflow-hidden border-[3px] border-black shadow-[0_8px_0_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 bg-[#B8F36A] text-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide">
                  {blog.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-black leading-tight text-black">
                  {blog.title}
                </h3>

                <p className="mt-4 text-black/70 leading-relaxed">
                  {blog.desc}
                </p>

                {/* BUTTON */}
                <Link
                  href={blog.link}
                  className="mt-8 inline-flex items-center gap-2 text-black font-black uppercase tracking-wide hover:text-[#8d2957] transition"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/blogs" className="flex justify-center mt-10">
          <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-black uppercase tracking-wide hover:bg-[#8d2957] transition">
            View All Blogs
          </button>
        </Link>
      </div>
    </section>




    
        



               <section className="w-full bg-[#4B474C] py-5 relative overflow-hidden">
      
      {/* TOP LABEL */}
      <div className="w-fit mx-auto mb-7">
        <div className="bg-white border border-black/20 rounded-full px-8 py-3 shadow-md">
          <p className="uppercase text-sm md:text-base font-black tracking-[0.15em] text-black">
            Weekly Newsletter
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-center">
          
          {/* LEFT LOGO */}
          <div className="flex justify-center">
       
            {/* OR USE IMAGE */}
            
            <Image
              src="/logooo.webp"
              alt="Newsletter Logo"
              width={220}
              height={120}
            /> 
           
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            
            {/* TEXT */}
            <h3 className="text-white text-2xl md:text-4xl font-black leading-snug max-w-3xl">
        Join our community of date lovers and stay connected with the latest from Mr. Dates!
            </h3>

            {/* FORM */}
            <form
              onSubmit={handleSubscribe}
              className="mt-10 flex flex-col sm:flex-row items-center overflow-hidden rounded-2xl border-[3px] border-black max-w-2xl mx-auto lg:mx-0 bg-white"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[72px] px-6 text-lg outline-none text-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#C6FF57] hover:bg-[#b6ef45] transition px-10 h-[72px] text-black font-black text-xl whitespace-nowrap"
              >
                {loading ? "Joining..." : "Count me in"}
              </button>
            </form>

            {/* MESSAGE */}
            {message && (
              <p className="mt-4 text-white font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>



    <section className="w-full py-10 bg-[#f8f7f2]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#8d2957] font-black">
            Get In Touch
          </p>

          <h2 className="mt-2 text-4xl md:text-6xl font-black text-black leading-tight">
            We’d Love to Hear From You
          </h2>

          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            Whether you’re looking for premium dates, wholesale supply,
            corporate gifting, or retail partnership — our team is here
            to assist you with reliable service and expert guidance.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          {/* PHONE */}
          <div className="bg-white rounded-[28px] p-8 border-[3px] border-black shadow-[0_8px_0_rgba(0,0,0,0.12)] text-center">
            <div className="w-16 h-16 rounded-full bg-[#B8F36A] flex items-center justify-center mx-auto">
              <Phone size={28} className="text-black" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-black">
              Phone
            </h3>

            <div className="mt-5 space-y-2">
              <a
                href="tel:+917065650411"
                className="block text-lg text-black/80 hover:text-[#8d2957] transition"
              >
                +91 7065650411
              </a>

              <a
                href="tel:+919773999082"
                className="block text-lg text-black/80 hover:text-[#8d2957] transition"
              >
                +91 9773999082
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-[28px] p-8 border-[3px] border-black shadow-[0_8px_0_rgba(0,0,0,0.12)] text-center">
            <div className="w-16 h-16 rounded-full bg-[#B8F36A] flex items-center justify-center mx-auto">
              <Mail size={28} className="text-black" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-black">
              Email
            </h3>

            <div className="mt-5 space-y-2">
              <a
                href="mailto:customercare@mrdates.in"
                className="block text-lg text-black/80 hover:text-[#8d2957] transition"
              >
                customercare@mrdates.in
              </a>

              <a
                href="mailto:sales@mrdates.in"
                className="block text-lg text-black/80 hover:text-[#8d2957] transition"
              >
                sales@mrdates.in
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="bg-white rounded-[28px] p-8 border-[3px] border-black shadow-[0_8px_0_rgba(0,0,0,0.12)] text-center">
            <div className="w-16 h-16 rounded-full bg-[#B8F36A] flex items-center justify-center mx-auto">
              <MapPin size={28} className="text-black" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-black">
              Location
            </h3>

            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              C-62, New Sabzi Mandi, Block C, Azadpur,
              <br />
              Delhi, 110033
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}