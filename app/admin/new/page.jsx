'use client';
import Sidebar from '@/components/admin/Sidebar';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function page() {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData(e.currentTarget);

        fd.append("content", content);

        const res = await fetch("/api/blog", { method: "POST", body: fd });
        setLoading(false);

        if (res.ok) router.push("/admin");
        else alert("Failed to save");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    return (<>
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
                    <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    <h1 className="hidden md:block text-2xl font-extrabold text-yellow-400">
                        Create Blog
                    </h1>
                </header>
                <main className="p-6">
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
                        <div>
                            <label className="block font-semibold mb-1">Title</label>
                            <input
                                name="title"
                                placeholder="Enter blog title"
                                required
                                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Permalink</label>
                            <input
                                name="permalink"
                                placeholder="unique-url-slug"
                                required
                                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Meta Title</label>
                            <input
                                name="metaTitle"
                                placeholder="SEO Meta Title"
                                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Meta Description</label>
                            <textarea
                                name="metaDescription"
                                placeholder="Short SEO-friendly description"
                                className="w-full border rounded p-2 h-20 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Content</label>
                            <div className="border rounded">
                                <JoditEditor
                                    value={content}
                                    tabIndex={1}
                                    onChange={(newContent) => setContent(newContent)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Thumbnail</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full border rounded p-2"
                            />
                            {preview && (
                                <div className="mt-3">
                                    <p className="text-sm text-gray-600 mb-1">Preview:</p>
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-56 h-36 object-cover rounded shadow-md border"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                                disabled={loading}
                            >
                                {loading ? "Adding..." : "Add"}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    </>)
}
