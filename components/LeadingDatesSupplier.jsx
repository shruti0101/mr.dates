"use client";

export default function LeadingDatesSupplier() {
  return (
    <section style={{backgroundImage:"url(/bglead.png)"}} className="bg-cover bg-center py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl font-serif sm:text-4xl lg:text-5xl font-bold text-[#4A2E1F] mb-6">
              Leading Dates Supplier
            </h1>

            <p className="text-black text-[16px] leading-7 mb-5">
             <strong>Mr. Date</strong> s is a trusted and professional <strong>dates supplier</strong>  offering
             <strong>premium dates, bulk dates,</strong>  and <strong>wholesale dates</strong>  to retailers,
              corporates, and individual buyers. Alongside our dates collection,
              we are also a reliable <strong>dry fruits supplier,</strong>  providing <strong>premium dry
              fruits</strong>, nuts, and <strong>healthy snacks </strong> that meet the highest quality
              standards.
            </p>

            <p className="textblack text-[16px] leading-7 ">
              As an experienced <strong>dates supplier,</strong>  we source our products from
              trusted farms and process them under strict hygiene standards to
              preserve natural sweetness, rich flavor, and nutritional value.
              Our range includes popular varieties such as Medjoul Dates, Ajwa
              Dates, Kalmi Dates, Safawi Dates, Tunisian Dates, Wet Dates, and
              more—available for <strong>daily consumption, gifting, and wholesale
              supply.</strong> 
            </p>

            <p className="text-black text-[16px] leading-7">
              We specialize in <strong>bulk dates supply</strong>  and <strong>wholesale dates distribution</strong> 
              , ensuring consistent quality, competitive pricing,
              and reliable service. Whether you are looking for a dependable
              premium dates supplier or a complete solution for <strong>dry fruits and
              healthy snacks, Mr. Dates delivers products you can trust.</strong> 
            </p>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="bg-[#FAF7F2] rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-[#4A2E1F] font-serif mb-6">
              Why Mr. Dates is the Preferred Dates Supplier
            </h3>

            <ul className="space-y-4 text-gray-700 text-[15px] leading-6">
              <li>• Trusted <strong>dates supplier</strong>  with a wide range of premium dates</li>
              <li>• Reliable <strong> dry fruits supplier</strong> offering premium dry fruits and nuts</li>
              <li>• Bulk and <strong>wholesale dates</strong>  availability for businesses</li>
              <li>• Hygienic processing and quality-controlled packaging</li>
              <li>• Fresh, authentic taste with consistent quality</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
