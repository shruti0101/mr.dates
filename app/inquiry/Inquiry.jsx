"use client"
import UseCaseSection from '@/components/Benefits'
import Category from '@/components/Category'
import ContactForm from '@/components/Form'
import DatesPopupForm from '@/components/Popup'
import CategorySlider from '@/components/Slider'
import TestimonialsSlider from '@/components/Testimonial'
import { Factory, Gift, Leaf, Store, Truck } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Inquiry() {
    const [formOpen, setFormOpen] = useState(false);

    return (<>
        {/* Hero */}
        <section
            style={{
                backgroundImage: "url('/bg3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative z-10 pt-25 pb-10">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-15">
                <div className="text-white md:w-1/2">
                    <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-tight capitalize mb-2">
                        Premium Quality Dates Supplier in India
                    </h1>
                    <ul className="flex items-center text-xl md:text-2xl text-white mb-6">
                        <li className="flex items-center">
                            <span className="mr-2">•</span>Fresh
                        </li>
                        <li className="flex items-center mx-4">
                            <span className="mr-2">•</span>Organic
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">•</span>Bulk & Retail Supply
                        </li>
                    </ul>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6">
                        We deliver farm-fresh Medjool & premium dates at competitive wholesale prices. Trusted by retailers, distributors & exporters across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => setFormOpen(true)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition duration-300">
                            Get Bulk Quote
                        </button>
                        <a
                            href="tel:+919773999082"
                            className="bg-transparent border-2 flex justify-center border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded transition duration-300"
                        >
                            Call Now for Best Price
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 md:block hidden">
                    <ContactForm />
                </div>
            </div>
        </section>

        <CategorySlider />
        <Category />

        {/* About Section */}
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Welcome to MR Dates – Premium Quality Dates & Dry Fruits Supplier
                    </h2>
                    <p className="text-black text-xl md:text-2xl leading-relaxed mb-6">
                        Welcome to MR Dates, your trusted partner for premium quality dates, dry fruits, and natural nuts in India.
                        We specialize in delivering the finest Medjool & organic dates — sourced from the best farms, healthy, chemical-free, and fresh.
                        Whether you are a retailer, exporter, wholesaler, or health-conscious buyer, we deliver fresh, nutrient-rich dates at competitive prices.
                    </p>
                    <a href="tel:+919773999082" className='p-4 bg-amber-500 hover:bg-amber-600 rounded-lg text-white text-lg'>
                        Contact us today!
                    </a>
                </div>

                <div className="md:w-1/2">
                    <img
                        src="/banner/2.webp"
                        alt="MR Dates Premium Quality Dates & Dry Fruits"
                        className="w-full h-108 rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>

        {/* why Us */}
        <section className="mx-auto lg:px-15 px-5 py-12 bg-gray-100">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
                Why Choose MR Dates?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div onClick={() => setFormOpen(true)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 group-hover:bg-yellow-600 transition">
                            <Factory className="w-7 h-7 text-yellow-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Highest Quality Dates</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Premium Medjool & organic dates, fresh from the farms.
                    </p>
                </div>

                <div onClick={() => setFormOpen(true)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                            <Store className="w-7 h-7 text-green-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Bulk & Wholesale Supply</h3>
                    <p className="text-black text-lg leading-relaxed">
                        High-quality dates for retailers, distributors, and exporters.
                    </p>
                </div>

                <div onClick={() => setFormOpen(true)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
                            <Leaf className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Organic & Chemical-Free</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Natural, healthy dates without any chemicals or preservatives.
                    </p>
                </div>

                <div onClick={() => setFormOpen(true)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
                            <Gift className="w-7 h-7 text-purple-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Best Prices</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Competitive and attractive pricing for retailers and exporters.
                    </p>
                </div>

                <div onClick={() => setFormOpen(true)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                            <Truck className="w-7 h-7 text-indigo-600 group-hover:text-white transition" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-black">Quick Delivery</h3>
                    <p className="text-black text-lg leading-relaxed">
                        Fast and reliable delivery across India, ensuring freshness.
                    </p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-amber-500  text-white py-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="md:text-left text-center">
                    <Link href={"/"} className="text-2xl font-semibold">
                        Dates Supplier in India
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

        <UseCaseSection />

        <TestimonialsSlider />

        {/* contact us */}
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <ContactForm />
                </div>

                {/* Right Side: Text */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                        Order Online or Contact Us
                    </h2>
                    <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-1">
                        Looking for healthy dates for your store, restaurant or export business? Contact us today!
                    </p>
                    <img
                        src="/check2.webp"
                        alt="MR Dates Premium Quality Dates & Dry Fruits"
                        className="w-full h-96 rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>

        {formOpen && (
            <DatesPopupForm onClose={() => setFormOpen(false)} isOpen={formOpen} />
        )}
    </>)
}
