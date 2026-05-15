"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut, LayoutDashboard, PlusCircle, } from "lucide-react";

export default function Sidebar({ setSidebarOpen, sidebarOpen }) {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie =
            "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        router.push("/admin/login");
    };

    return (
        <aside className={`fixed md:static z-40 min-h-screen w-64 bg-white shadow-xl transform transition-transform duration-300 
                     ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
            <div className="p-4 text-2xl font-extrabold border-b text-yellow-400 flex justify-between">
                Admin Panel
                <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
            <nav className="p-5 space-y-3 h-full">
                <Link href="/admin" className="flex items-center gap-3 bg-yellow-400 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link href="/admin/new" className="flex items-center gap-3 bg-yellow-400 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
                    <PlusCircle size={20} />
                    New Blog
                </Link>

                <button onClick={handleLogout} className="flex items-center gap-3 w-full text-left bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition mt-auto">
                    <LogOut size={20} />
                    Logout
                </button>
            </nav>
        </aside>
    )
}
