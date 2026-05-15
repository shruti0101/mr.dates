"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { RecaptchaVerifier } from "firebase/auth";
import {
  
  signInWithPhoneNumber,
} from "firebase/auth";

import {auth} from "@/utils/firebase";

export default function DatesPopupForm({
  onClose,
  isOpen,
}) {

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [otp, setOtp] = useState("");

  const [showOtpBox, setShowOtpBox] =
    useState(false);

  const [confirmationResult, setConfirmationResult] =
    useState(null);

  const [isPhoneVerified, setIsPhoneVerified] =
    useState(false);

  const [formValues, setFormValues] =
    useState(null);

  // Initialize Firebase Recaptcha
useEffect(() => {

  if (!isOpen) return;

  if (
    typeof window !== "undefined" &&
    !window.recaptchaVerifier
  ) {

    window.recaptchaVerifier =
      new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
        }
      );

    window.recaptchaVerifier.render();

  }

  return () => {

    if (window.recaptchaVerifier) {

      window.recaptchaVerifier.clear();

      window.recaptchaVerifier = null;

    }

  };

}, [isOpen]);

  // Send OTP
  const sendOTP = async (phone) => {

    try {

      setLoading(true);

      const appVerifier =
        window.recaptchaVerifier;

      const result =
        await signInWithPhoneNumber(
          auth,
          "+91" + phone.trim(),
          appVerifier
        );

      setConfirmationResult(result);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");

    } catch (error) {

      console.log("OTP ERROR:", error);

      toast.error(error.message);

    } finally {

      setLoading(false);

    }

  };

  // Verify OTP
  const verifyOTP = async () => {

    try {

      setLoading(true);

      await confirmationResult.confirm(otp);

      setIsPhoneVerified(true);

      toast.success("Phone Verified Successfully");

      // Submit form automatically after verification
      await submitForm(formValues);

    } catch (error) {

      console.log("VERIFY ERROR:", error);

      toast.error("Invalid OTP");

    } finally {

      setLoading(false);

    }

  };

  // Actual form submit API
  const submitForm = async (data) => {

    try {

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        {
          validateStatus: (status) =>
            status >= 200 && status < 500,
        }
      );

      console.log("API RESPONSE:", res);

      if (
        res.status >= 200 &&
        res.status < 300
      ) {

        setSubmitted(true);

        toast.success(
          "Form Submitted Successfully"
        );

        setTimeout(() => {

          if (onClose) onClose();

          setSubmitted(false);

        }, 3000);

      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  };

  // Handle Form Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      platform: "Premium Dates Inquiry Popup",

      platformEmail:
        "customercare@mrdates.in",

      name: formData.get("contactPerson"),

      email: formData.get("email"),

      company: "Mr Dates",

      phone: formData.get("phone"),

      product: "Premium Dates Enquiry",

      place: "Delhi",

      message: formData.get("message"),
    };

    if (
      !data.phone ||
      data.phone.length < 10
    ) {

      return toast.error(
        "Enter Valid Phone Number"
      );

    }

    // Save form data temporarily
    setFormValues(data);

    // If already verified → submit directly
    if (isPhoneVerified) {

      await submitForm(data);

      return;

    }

    // Send OTP first
    await sendOTP(data.phone);

  };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/50 px-3">

      <div className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-50 h-9 w-9 rounded-full bg-white shadow grid place-items-center"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          {/* Left Image */}
          <div className="relative hidden md:block">

            <Image
              src="/faq.webp"
              alt="Premium Dates"
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* Right Form */}
          <div className="p-6 md:p-8 overflow-y-auto">

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

                  Get Your{" "}

                  <span className="text-[#c8a96a]">
                    Premium Quote
                  </span>

                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 mt-5"
                >

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
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile Number*"
                    className="input"
                  />

                  {/* Recaptcha */}
                  <div
                    id="recaptcha-container"
                    className="mt-2"
                  ></div>

                  {/* OTP BOX */}
                  {showOtpBox &&
                    !isPhoneVerified && (

                    <div className="space-y-3">

                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value)
                        }
                        className="input"
                      />

                      <button
                        type="button"
                        onClick={verifyOTP}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
                      >
                        Verify OTP
                      </button>

                    </div>

                  )}

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

                    {loading
                      ? "Loading..."
                      : !showOtpBox
                      ? "Send OTP"
                      : !isPhoneVerified
                      ? "Verify OTP First"
                      : "Submit Form"}

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