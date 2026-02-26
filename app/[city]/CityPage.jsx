"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Building2, Rocket, Briefcase, Factory, Cpu, Store, Hotel, Gift, Home, Leaf, Warehouse, Truck, Tags, Handshake } from "lucide-react";
import CitySection from "@/components/CitySection";
import Link from "next/link";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CityPage() {
    const params = useParams();

    const cityName = params?.city?.includes("-in-")
        ? params.city.split("-in-")[1].split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "India";

    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 60,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#why-choose-section",
                    start: "top 80%",
                },
            }
        );
    }, []);




    const images = [
  "/banner/1.webp",
  "/banner/2.webp",
  "/banner/31.webp",
  "/banner/41.webp",
  "/banner/5.webp",
];

    const data = [
        {
            title: "One-Stop Dates Supply Solution",
            desc: "We offer a wide variety of dates including Medjool, Ajwa, Safawi, Kimia, Mabroom, Zahidi, and Deglet Noor for retail, wholesale, horeca, and institutional needs.",
            icon: Warehouse,
            img: "/slider/ajwadates.webp",
        },
        {
            title: "Premium Quality & Freshness",
            desc: "Sourced from trusted growers and processed hygienically to retain natural taste, nutrients, and freshness.",
            icon: Leaf,
            img: "/slider/chocodate.webp",
        },
        {
            title: "Bulk & Retail Supply",
            desc: "Bulk quantities, wholesale packs, and consumer-friendly retail packaging for all business needs.",
            icon: Truck,
            img: "/slider/farddates.webp",
        },
        {
            title: "Competitive Pricing",
            desc: "Transparent and competitive pricing ensuring value for money without compromising quality.",
            icon: Tags,
            img: "/slider/tunisian.webp",
        },
        {
            title: "Trusted by Customers & Businesses",
            desc: `Preferred by retailers, dry fruit traders, sweet shops, hotels, and households across ${cityName}.`,
            icon: Handshake,
            img: "/slider/mejdooldates.webp",
        },
    ];

    return (<>
        {/* Hero */}
        <section
            style={{
                backgroundImage: "url('/bg3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="py-30 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                Dates Supplier in {cityName}
            </h1>
        </section>

        {/* main */}
        <section className="max-w-7xl mx-auto px-4 md:px-0  py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Premium <span className="text-amber-400">Dates Supplier</span> in {cityName}
                    </h1>

                    <p className="text-black mb-4 text-xl">
                        <strong>Mr. Dates</strong> is a trusted <Link href={"/"} className="font-bold text-amber-400 hover:underline">Dates Supplier in {cityName}</Link>, offering premium-quality fresh and dry dates sourced from the finest farms and growing regions. We cater to wholesalers, retailers, hotels, restaurants, gifting companies, and individual buyers across {cityName}.
                    </p>

                    <p className="text-black mb-4 text-xl">
                        We specialize in <strong>high-grade dates</strong> known for rich taste, natural sweetness, soft texture, and nutritional value. Our dates are carefully selected, hygienically packed, and quality-checked to ensure freshness, long shelf life, and authentic flavor.
                    </p>

                    <p className="text-black text-xl">
                        From everyday consumption to festive gifting and bulk trade supply, <strong>Mr. Dates delivers consistent quality and reliable supply</strong>, making us a preferred dates supplier in {cityName}.
                    </p>
                </div>

                 <motion.div
           
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img}
                    alt="Mr. Dates Premium Store"
                    width={500}
                    height={200}
                    className="object-contain"
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
            </div>
        </section>

        {/* why us */}
        <section className="mx-auto lg:px-16 px-5 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
            <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-6">
                Why Choose <span className="text-amber-400">Mr. Dates</span> as Your Dates Supplier in {cityName}?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {data.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative z-10">
                                <Icon
                                    size={36}
                                    className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <div className="w-full h-32 flex items-center justify-center relative z-10">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="font-semibold text-xl mb-2 relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-black text-base relative z-10 leading-relaxed">
                                {item.desc}
                            </p>

                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* office */}
        <section className="mx-auto lg:px-16 px-5 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Dates Supplier in <span className="text-amber-400">{cityName}</span>, India
                    </h2>

                    <p className="text-black mb-5 leading-relaxed text-xl">
                        Mr. Dates is among the leading{" "}
                        <Link href={"/"} className="font-bold text-amber-400 hover:underline">
                            dates suppliers in {cityName}
                        </Link>
                        , providing premium dates that meet modern food quality and hygiene standards.
                    </p>

                    <p className="text-black mb-6 leading-relaxed text-xl">
                        With strong sourcing and supply chain management, we ensure{" "}
                        <strong>consistent availability, hygienic packaging, and timely delivery.</strong>{" "}
                        Every batch of dates undergoes quality inspection for size, moisture content, taste, and shelf life.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-semibold">
                            Hygienic Processing
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-semibold">
                            Quality Inspected
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-semibold">
                            Reliable Supply Chain
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-semibold">
                            Pan-India Delivery
                        </span>
                    </div>
                </div>

                <div>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
                        <h3 className="text-2xl font-bold mb-4 text-black relative z-10">
                            Our dates are ideal for:
                        </h3>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black relative z-10">
                            <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 group-hover:scale-110 transition">
                                    <Store className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="font-semibold text-lg">Retail & wholesale dry fruit stores</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 group-hover:scale-110 transition">
                                    <Hotel className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="font-semibold text-lg">Hotels, restaurants & catering services</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 group-hover:scale-110 transition">
                                    <Factory className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="font-semibold text-lg">Sweet manufacturers & bakeries</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 group-hover:scale-110 transition">
                                    <Gift className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="font-semibold text-lg">Corporate & festive gifting</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group sm:col-span-2">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 group-hover:scale-110 transition">
                                    <Home className="w-6 h-6 text-pink-600" />
                                </div>
                                <span className="font-semibold text-lg">Household consumption</span>
                            </li>
                        </ul>
                        <p className="text-black leading-relaxed text-lg mt-2 relative z-10">
                            Trusted for consistent quality, reliable supply, and professional service across business and household segments.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Workstation  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-2">
                Types of Dates We Offer
            </h2>
            <p className="text-center text-black mb-4 text-lg">
                Our Dates Product Range
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/barariMedjool.webp"
                            alt="Medjool Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Medjool Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Large, soft, and naturally sweet—ideal for premium consumption.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/ajwa1.png"
                            alt="Ajwa Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Ajwa Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Highly valued dates known for rich taste and health benefits.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/hana.webp"
                            alt="Safawi Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Safawi Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Dark, soft-textured dates with a mildly sweet flavor.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/kimia5.webp"
                            alt="Kimia Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Kimia Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Moist, tender dates popular for daily consumption.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/al-shaffaMabroom.webp"
                            alt="Mabroom Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Mabroom Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Elongated dates with a chewy texture and rich flavor.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
                    <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                        <img
                            src="/products/ajwa3.webp"
                            alt="Deglet Noor and Zahidi Dates"
                            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">Deglet Noor & Zahidi Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Semi-dry dates suitable for cooking, baking, and bulk trade.
                    </p>
                </div>
            </div>
        </section>

        {/* Key features  */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src="/bg2.webp"
                        alt="Key Features"
                        className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: "50% 70%" }}
                    />
                </div>

                <div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">
                        Key Features of <span className="text-amber-400">Mr. Dates</span> Products
                    </h3>

                    <ul className="space-y-4 text-black text-lg">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Premium-grade, handpicked dates</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Hygienic processing and packaging</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Rich taste and natural sweetness</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>High nutritional value</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Long shelf life</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Available in bulk and retail packs</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-5">
                Industries & Customers We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                            <Store className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Retailers & Wholesalers</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Consistent supply for dry fruit and grocery stores.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                            <Hotel className="w-7 h-7 text-green-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Hotels & Restaurants</h3>
                    <p className="text-black text-lg leading-relaxed">
                        High-quality dates for culinary and buffet use.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
                            <Factory className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">
                        Sweet & Bakery Manufacturers
                    </h3>
                    <p className="text-black text-lg leading-relaxed">
                        Reliable ingredient supply for desserts and confectionery.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
                            <Gift className="w-7 h-7 text-purple-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">
                        Corporate & Festive Gifting
                    </h3>
                    <p className="text-black text-lg leading-relaxed">
                        Attractive and customizable date gift boxes.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                            <Home className="w-7 h-7 text-indigo-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">
                        Households
                    </h3>
                    <p className="text-black text-lg leading-relaxed">
                        Fresh dates for daily nutrition and festive occasions.
                    </p>
                </div>
            </div>
        </section>

        {/* Case Study Card */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Case Study: Bulk Dates Supply for {cityName} Festive Season
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Client</span>
                            <p className="text-lg font-semibold">Dry Fruit Wholesale Distributor</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Location</span>
                            <p className="text-lg font-semibold">{cityName}</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Project</span>
                            <p className="text-lg font-semibold">Festive Season Bulk Dates Supply</p>
                        </div>
                        <div className="">
                            <p className="text-black leading-relaxed">
                                This project highlights <strong> Mr. Dates’ reliability as a premium dates supplier in {cityName}</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Scope</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>Bulk supply of Medjool and Ajwa dates</li>
                                <li>Customized packaging solutions</li>
                                <li>Timely delivery during peak demand</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Results</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>High customer satisfaction</li>
                                <li>Zero quality complaints</li>
                                <li>Improved sales during festive season</li>
                                <li>Long-term supply partnership</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-amber-500  text-white py-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="md:text-left text-center">
                    <Link href={"/"} className="text-2xl font-semibold">
                        Dates Supplier in {cityName}
                    </Link>
                    <p className="md:text-5xl text-4xl font-semibold">
                        +91 9773999082
                    </p>
                    <p className="text-lg text-white">
                        For More Details Contact Us Now!
                    </p>
                </div>

                <div>
                    <a href="tel:+919773999082" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Connect Now
                    </a>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100" >
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-5">
                Dates Supplier in Delhi – FAQs
            </h2>

            <div className="space-y-4">
                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        What types of dates do you supply?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        We supply multiple varieties including Medjool, Ajwa, Safawi, Kimia, Mabroom, and more.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you supply dates in bulk in Delhi?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes, we specialize in bulk and wholesale supply.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Are your dates hygienically packed?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes, all dates are processed and packed under hygienic conditions.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you offer dates for gifting?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes, we provide premium and customized date gift packs.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you deliver across Delhi NCR?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes, we offer timely delivery across Delhi and NCR.
                    </p>
                </details>
            </div>
        </section>

     {/* about */}
<section className="mx-auto lg:px-15 px-5 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div className="w-full">
      <img
        src="/aboutpage/1.webp"
        alt="Premium Dates Supplier in Delhi NCR"
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>

    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-5">
        Looking for a Reliable Dates Supplier in Delhi NCR?
      </h2>

      <p className="text-black mb-4 leading-relaxed">
        Get in touch with <strong>Mr. Dates</strong> today for the finest quality dates at competitive wholesale prices. Whether you need premium varieties for retail, bulk supplies for distribution, gifting solutions for festive seasons, or customized packaging for your brand, we’ve got you covered.
      </p>

      <p className="text-black mb-3 leading-relaxed font-semibold">
        We offer:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-black mb-4 leading-relaxed">
        <li>A wide range of premium date varieties</li>
        <li>Bulk and wholesale pricing options</li>
        <li>Custom packaging and private labeling solutions</li>
        <li>Samples for quality assurance</li>
        <li>Timely delivery across Delhi NCR</li>
        <li>Personalized assistance to help you select the right variety and quantity</li>
      </ul>

      <p className="text-black leading-relaxed">
        At Mr. Dates, we understand the unique demands of Delhi NCR markets and ensure consistent quality, freshness, and reliability with every order.
      </p>

      <p className="text-black mt-3 leading-relaxed font-medium">
        Contact Mr. Dates today for pricing details, samples, bulk orders, or tailored packaging solutions — and experience dependable service you can trust.
      </p>
    </div>

  </div>
</section>

        <CitySection></CitySection>
    </>)
}
