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
          <span className="text-white font-medium">Return & Refund Policy</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Return & Refund Policy
        </h1>
      </div>
    </section>
     <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">

        {/* Intro */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <p className="text-gray-700 md:text-2xl leading-relaxed">
            Our refund and returns policy lasts <b>30 days</b>. If 30 days have passed
            since your purchase, we can’t offer you a full refund or exchange.
          </p>
        </div>

        {/* Return Eligibility */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl  font-semibold mb-3">Return Eligibility</h2>
          <ul className="list-disc pl-5 space-y-2 md:text-2xl text-gray-700">
            <li>Item must be unused and in the same condition as received.</li>
            <li>Must be in original packaging.</li>
            <li>Receipt or proof of purchase is required.</li>
            <li>Do not send products back to the manufacturer.</li>
          </ul>
        </div>

        {/* Non Returnable Items */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Non-Returnable Items</h2>
          <ul className="list-disc pl-5  md:text-2xl space-y-2 text-gray-700">
            <li>Perishable goods (food, flowers, newspapers, magazines)</li>
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Health & personal care items</li>
            <li>Hazardous or flammable materials</li>
          </ul>
        </div>

        {/* Partial Refunds */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Partial Refunds</h2>
          <ul className="list-disc  md:text-2xl pl-5 space-y-2 text-gray-700">
            <li>Items with obvious signs of use</li>
            <li>Opened CDs, DVDs, software, or games</li>
            <li>Damaged or missing parts not due to our error</li>
            <li>Returned after 30 days of delivery</li>
          </ul>
        </div>

        {/* Refund Process */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
          <p className="text-gray-700  md:text-2xl leading-relaxed">
            Once your return is received and inspected, we will notify you about
            approval or rejection of your refund.
            <br />
            If approved, your refund will be processed and credited to your original
            payment method within a few days.
          </p>
        </div>

        {/* Late Refund */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Late or Missing Refunds</h2>
          <ul className="list-disc  md:text-2xl pl-5 space-y-2 text-gray-700">
            <li>Check your bank account again.</li>
            <li>Contact your credit card company (processing may take time).</li>
            <li>Contact your bank for update delays.</li>
            <li>If still not received, contact us.</li>
          </ul>
        </div>

        {/* Sale & Exchange */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Sale Items & Exchanges</h2>
          <p className="text-gray-700  md:text-2xl">
            Only regular priced items are eligible for refunds. Sale items cannot be refunded.
          </p>
          <br />
          <p className="text-gray-700  md:text-2xl">
            We only replace items if they are defective or damaged. For exchanges,
            contact us at <b>customercare@mrdates.in</b> and send the item to our address.
          </p>
        </div>

        {/* Shipping Returns */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Shipping Returns</h2>
          <ul className="list-disc pl-5  md:text-2xl space-y-2 text-gray-700">
            <li>Return shipping cost is paid by customer.</li>
            <li>Shipping costs are non-refundable.</li>
            <li>Refund will deduct return shipping cost if applicable.</li>
            <li>We recommend trackable shipping for expensive items.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-black text-white p-6 md:p-8 rounded-2xl shadow-sm text-center">
          <h2 className="text-5xl font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-300  md:text-2xl">
            Contact us at <b>customercare@mrdates.in</b> for refund & return support.
          </p>
        </div>

      </div>
      <CitySection/>
    </>
  )
}
