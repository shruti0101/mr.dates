"use client"
import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "Premium Dates Inquiry Form",
      platformEmail: "shrutiguptabhu@gmail.com",

      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: formData.get("Company"),
      phone: formData.get("phone"),
      product: "Premium Dates Enquiry",
      place: `${formData.get("city")}, ${formData.get("state")}`,
      message: formData.get("message"),
    };

    if (!data.phone || data.phone.length < 10) return toast.error("Enter Valid Phone Number");

    try {
      setLoading(true);
      const res = await axios.post("https://brandbnalo.com/api/form/add", data,
        { validateStatus: (status) => status >= 200 && status < 500 }
      );

      if (res.status >= 200 && res.status < 300) {
        setSubmitted(true);
        setTimeout(() => {
          e.target.reset();      // reset after UI change
        }, 100);
        setTimeout(() => {
          // if (onClose) onClose();
          setSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      console.log("ERROR:", err?.response || err.message);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-transparent border text-white border-white rounded-lg shadow-lg p-6 w-full max-w-md" onSubmit={handleSubmit}>
      {submitted ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-600">
            🎉 Thank You!
          </h2>
          <p className="text-white mt-2">
            Your enquiry has been submitted successfully.
          </p>
          <p className="text-white text-sm mt-1">
            Our team will contact you shortly.
          </p>
        </div>)
        : (<>
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Get in Touch</h2>

          <div className="mb-4">
            <input
              type="text"
              name="contactPerson"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-white text-white placeholder-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-white rounded-lg text-white placeholder-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border border-white rounded-lg text-white placeholder-white"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-white rounded-lg text-white placeholder-white"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-[#faab00] text-black text-xl py-3 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </>)}
    </form >
  );
};

export default ContactForm;
