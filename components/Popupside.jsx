"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

const customers = [
  "Rahul from Delhi",
  "Priya from Mumbai",
  "Aman from Gurgaon",
  "Sneha from Jaipur",
  "Arjun from Noida",
  "Neha from Chandigarh",
  "Ritika from Pune",
  "Karan from Bangalore",
  "Simran from Ludhiana",
  "Vikas from Hyderabad",
  "Anjali from Ahmedabad",
  "Mohit from Faridabad",
  "Pooja from Indore",
  "Yash from Surat",
  "Mehak from Amritsar",
  "Rohit from Lucknow",
  "Nisha from Patna",
  "Kabir from Dehradun",
  "Tanya from Kolkata",
  "Aditya from Bhopal",
  "Isha from Jodhpur",
  "Harsh from Kanpur",
  "Sanya from Agra",
  "Dev from Udaipur",
  "Aarti from Kochi",
  "Manav from Guwahati",
  "Nitin from Nashik",
  "Shreya from Raipur",
  "Aryan from Meerut",
  "Palak from Mohali",
  "Varun from Chennai",
  "Kriti from Jammu",
  "Abhishek from Patiala",
  "Riya from Hisar",
  "Samar from Varanasi",
  "Nidhi from Panipat",
  "Rajat from Bhubaneswar",
  "Ayesha from Aligarh",
  "Parth from Vadodara",
  "Diya from Shimla",
];



const products = [
  "Premium Medjoul Dates",
  "Ajwa Dates Box",
  "Kimia Dates Pack",
  "Saudi Arabian Dates",
  // "Dry Fruit Gift Box",
  "Mabroom Dates",
  "Safawi Dates",
  "Khudri Dates",
  "Premium Iranian Dates",
  "Seedless Dates Pack",
  "Organic Dates Collection",
  "Luxury Dates Hamper",
  "Chocolate Filled Dates",
  "Roasted Almond Dates",
  "Pistachio Stuffed Dates",
  "Fresh Tunisian Dates",
  "Royal Ajwa Dates",
  "Soft Kalmi Dates",
  "Date Syrup Bottle",
  "Healthy Snack Combo",
  "Arabic Delight Box",
  "Premium Gift Hamper",
  "Family Pack Dates",
  "Fitness Energy Dates",
  "Natural Sweet Dates",
  "Ramadan Special Box",
  "VIP Date Collection",
  "Imported Medjoul Pack",
  "Classic Arabian Dates",
  "Mixed Dates Basket",
];
export default function SalesPopup() {
  const [visible, setVisible] = useState(false);
  const [popupData, setPopupData] = useState({
    customer: "",
    product: "",
    time: "",
  });

  useEffect(() => {
    const showPopup = () => {
      const customer =
        customers[Math.floor(Math.random() * customers.length)];

      const product =
        products[Math.floor(Math.random() * products.length)];

   const times = [
  "Just now",
  "1 minute ago",
  "2 minutes ago",
  "4 minutes ago",
  "5 minutes ago",
  "7 minutes ago",
  "9 minutes ago",
  "10 minutes ago",
  "12 minutes ago",
  "15 minutes ago",
  "18 minutes ago",
  "20 minutes ago",
  "22 minutes ago",
  "25 minutes ago",
  "28 minutes ago",
  "30 minutes ago",
  "35 minutes ago",
  "40 minutes ago",
  "45 minutes ago",
  "50 minutes ago",
  "1 hour ago",
  "2 hours ago",
];

      const time =
        times[Math.floor(Math.random() * times.length)];

      setPopupData({
        customer,
        product,
        time,
      });

      setVisible(true);

    
      setTimeout(() => {
        setVisible(false);
      }, 6000);
    };


    const initialTimer = setTimeout(showPopup, 2000);

    const interval = setInterval(showPopup, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-[9999] transition-all hidden md:block duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="bg-white w-[280px] border border-black/10 rounded-2xl shadow-2xl flex items-start  p-2 gap-4">
        
        {/* ICON */}
        <div className="min-w-[52px] h-[52px] rounded-full bg-[#B8F36A] flex items-center justify-center">
          <ShoppingBag className="text-black" size={24} />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <p className="text-sm text-black/60 font-medium">
            Recent Purchase
          </p>

          <h4 className="mt-1 text-black font-bold leading-snug">
            {popupData.customer}
          </h4>

          <p className="text-black text-sm mt-1">
            purchased{" "}
            <span className="font-semibold text-black">
              {popupData.product}
            </span>
          </p>

          <p className="text-xs text-black mt-2">
            {popupData.time}
          </p>
        </div>
      </div>
    </div>
  );
}