"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

export default function DatesPopupForm({ onClose, isOpen }) {

  const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      platform: "Premium Dates Website Popup",
      platformEmail: "customercare@mrdates.in",

      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: formData.get("Company"),
      phone: formData.get("phone"),
      product: "Premium Dates Enquiry",
      place: `${formData.get("city")}, ${formData.get("state")}`,
      message: formData.get("message"),
    };

    if (!data.phone || data.phone.length < 10)
      return toast.error("Enter Valid Phone Number");

  try {
  setLoading(true);

 const res = await axios.post(
  "https://brandbnalo.com/api/form/add",
  data,
  {
    validateStatus: (status) => status >= 200 && status < 500
  }
);

  console.log("API RESPONSE :", res);

  // ✅ SUCCESS FOR ANY 2xx RESPONSE
  if (res.status >= 200 && res.status < 300) {

    setSubmitted(true);

    setTimeout(() => {
      e.target.reset();      // reset after UI change
    }, 100);

    setTimeout(() => {
      if (onClose) onClose();
      setSubmitted(false);
    }, 3000);
  }

} catch (err) {
  console.log("ERROR:", err?.response || err.message);
  toast.error("Something went wrong");
}
finally {
  setLoading(false);
}
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/50 px-3">
      <div className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-50 h-9 w-9 rounded-full bg-white shadow grid place-items-center"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          <div className="relative hidden md:block">
            <Image
              src="/faq.webp"
              alt="Premium Dates"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-green-600">
                  🎉 Thank You!
                </h2>
                <p className="text-gray-600 mt-2">
                  Your enquiry has been submitted successfully.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#6b1f2b]">
                  Get Your <span className="text-[#c8a96a]">Premium Quote</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3 mt-5">

                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="Contact Person Name*"
                    className="input"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address*"
                    className="input"
                  />

                    <input
                    type="text"
                    name="Company"
                    required
                    placeholder="Company Name*"
                    className="input"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile Number*"
                    className="input"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select name="state" required className="input">
                      <option value="">Select State</option>
                      <option>Delhi</option>
                      <option>Uttar Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Gujarat</option>
                      <option>Rajasthan</option>
                      <option>Punjab</option>
                      <option>Haryana</option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>


                      <option>Other</option>
                    </select>

                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="City"
                      className="input"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your Message"
                    className="input resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#8b2d36] hover:bg-[#6b1f2b] text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Contact Us"}
                  </button>

                </form>
              </>
            )}

          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          outline: none;
        }
        .input:focus {
          border-color: #8b2d36;
          background: #fff;
        }
      `}</style>
    </div>
  );
}