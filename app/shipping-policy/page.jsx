import CitySection from '@/components/CitySection'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
        <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/check4.avif')", // change your image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center mt-15 text-white px-4">
        
        {/* Breadcrumb */}
        <div className="text-sm mb-3 text-gray-200">
          <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white font-medium">Shipping Policy</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Shipping Policy
        </h1>
      </div>
    </section>
     <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">

        {/* Intro */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <p className="text-gray-700 md:text-2xl leading-relaxed">
            At <span className="font-semibold text-black">Mr.dates</span>, we are
            committed to delivering fresh and premium quality dates and 
            to our customers in a safe and timely manner. Please read our shipping
            policy carefully to understand how we process and deliver your orders.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl  shadow-sm">
          <h2 className="text-3xl font-semibold mb-3">1. Order Processing</h2>
          <ul className="space-y-2 md:text-2xl text-gray-700 list-disc pl-5">
            <li>All confirmed orders are processed within 1–2 business days.</li>
            <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
            <li>Once your order is shipped, you will receive a tracking ID via email/WhatsApp.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-semibold mb-3">
            2. Shipping Methods & Delivery Time
          </h2>
          <ul className="space-y-2 md:text-2xl text-gray-700 list-disc pl-5">
            <li>We deliver across India through reliable courier partners.</li>
            <li>Standard delivery time: 3–7 business days depending on your location.</li>
            <li>Metro cities: 2–4 business days.</li>
            <li>Remote/rural areas may take longer.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">3. Shipping Charges</h2>
          <p className="text-gray-700 md:text-2xl">
            A nominal shipping fee of <b>₹49–₹149</b> (based on weight & location)
            is charged for orders below the minimum free-shipping value.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">4. International Shipping</h2>
          <p className="text-gray-700 md:text-2xl">
            Currently, we ship only within India. For bulk export inquiries,
            please contact us at <b>+91  70656 50411</b>.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">5. Packaging & Quality</h2>
          <p className="text-gray-700 md:text-2xl">
            All products are carefully packed in air-tight, food-grade packaging
            to ensure freshness and safety. We take extra care during packing and
            dispatch to prevent any damage in transit.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">6. Delays & Issues</h2>
          <p className="text-gray-700 md:text-2xl leading-relaxed">
            While we strive to deliver on time, unforeseen delays such as courier
            issues, weather conditions, or festive rush may occur.
            <br />
            <span className="font-medium">
              Mr.dates is not liable for delays caused by third-party logistics providers.
            </span>
            <br />
            In case of lost or damaged shipments, please contact us within 48 hours
            of delivery with your order details.
          </p>
        </div>
        </div>  

        <CitySection/>

    </>
  )
}
