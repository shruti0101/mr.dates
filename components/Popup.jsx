"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { categories } from "@/Data/data";

export default function DatesPopupForm({ onClose, packaging }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // AUTO OPEN ON LOAD
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      platform: "Premium Dates Website Popup",
      platformEmail: "your@email.com",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: selectedCategory || "General Enquiry",
      packaging: packaging || "Not Selected",
      message: formData.get("message"),
    };

    if (data.phone.toString().length < 10)
      return toast.error("Enter Valid Phone Number");

    try {
      await axios.post("https://brandbnalo.com/api/form/add", data);
      toast.success("Enquiry Sent Successfully 🌴");
      e.target.reset();
      setSelectedCategory("");
      handleClose();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/50 px-3">
      <div className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] animate-[popup_0.25s_ease-out]">

        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-50 h-9 w-9 rounded-full bg-white shadow grid place-items-center text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          {/* LEFT IMAGE */}
          <div className="relative hidden md:block">
            <Image
              src="/faq.jpg"
              alt="Premium Dates"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold">
                Experience Luxury Dates
              </h3>
              <p className="text-white/90 text-sm mt-2">
                Fresh • Premium • Export Quality
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Farm Fresh", "Best Quality", "Global Shipping"].map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 md:p-8 overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#6b1f2b]">
              Get Your <span className="text-[#c8a96a]">Premium Quote</span>
            </h2>

            <p className="text-center text-gray-600 text-sm mt-2 mb-5">
              Share your details & we’ll contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" name="name" required placeholder="Full Name*" className="input" />
                <input type="tel" name="phone" required placeholder="Mobile Number*" className="input" />
              </div>

              <input type="email" name="email" required placeholder="Email Address*" className="input" />

              {/* CATEGORY DROPDOWN */}
              <select
                name="category"
                required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input"
              >
                <option value="">Select Category*</option>
                {categories?.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                className="input resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#8b2d36] hover:bg-[#6b1f2b] text-white py-3 rounded-xl font-semibold transition"
              >
                Send Enquiry →
              </button>

              <p className="text-[11px] text-gray-500 text-center">
                We respect your privacy. No spam.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        @keyframes popup {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
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
