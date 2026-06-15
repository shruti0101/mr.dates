"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminOrdersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setOrders(data);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <div>
            <h1 className="text-3xl font-bold text-[#6b1f2b]">Orders</h1>
            <p className="text-gray-600 mt-2">
              All placed orders are shown below.
            </p>
          </div>
        </header>

        <main className="p-4">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eee]">
            {loading ? (
              <p className="text-center text-gray-500">Loading orders...</p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : orders.length === 0 ? (
              <p className="text-center text-gray-500">
                No orders have been placed yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#eee]">
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Order ID
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Customer
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Phone
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Amount
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Status
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-[#6b1f2b]">
                        Placed At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order._id}
                        className="border-b border-[#f1f1f1] hover:bg-[#faf7f3] transition"
                      >
                        <td className="py-4 pr-6 text-sm text-gray-700">
                          {order._id}
                        </td>
                        <td className="py-4 pr-6 text-sm text-gray-700">
                          {order.customer?.name || "-"}
                        </td>
                        <td className="py-4 pr-6 text-sm text-gray-700">
                          {order.customer?.phone || "-"}
                        </td>
                        <td className="py-4 pr-6 text-sm text-gray-700">
                          ₹{order.amount}
                        </td>
                        <td
                          className={`py-4 pr-6 text-sm font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-orange-600"}`}
                        >
                          {order.paymentStatus}
                        </td>
                        <td className="py-4 pr-6 text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
