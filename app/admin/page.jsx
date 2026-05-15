"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Edit, Trash2, } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";

export default function page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/blog")
            .then((r) => r.json())
            .then((b) => {
                setBlogs(b);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Delete this blog?")) return;
        const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
        if (res.ok) setBlogs((prev) => prev.filter((b) => b._id !== id));
        else alert("Failed to delete");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
                    <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                    <h1 className="text-2xl font-bold text-yellow-400">Admin Dashboard</h1>
                </header>
                {loading ? <p className="p-6 text-center text-gray-500 text-4xl">Loading...</p>
                    : <main className="p-4">
                        <h2 className="md:text-3xl text-xl font-bold text-center mb-8">
                            Manage Blogs
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {blogs.length === 0 ?
                                <p className="p-6 text-center text-gray-500 text-2xl">No Data Found</p>
                                : blogs.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt="blog"
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>

                                        <div className="p-4 flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                                {item.title}
                                            </h3>

                                            <div className="mt-auto pt-2 flex justify-between items-center">
                                                <Link
                                                    href={`/blogs/${item.permalink}`}
                                                    className="text-lg font-medium text-yellow-500 hover:underline"
                                                >
                                                    Read More →
                                                </Link>

                                                <div className="flex gap-2">
                                                    <Link href={`/admin/edit-blog/${item._id}`} className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600">
                                                        <Edit size={16} />
                                                    </Link>
                                                    <button onClick={() => handleDelete(item._id)} className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </main>}
            </div>
        </div>
    );
}