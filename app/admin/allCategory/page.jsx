// Full CategoryPage.jsx
// NOTE: Replace API endpoints if needed.

"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import toast from "react-hot-toast";

export default function CategoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const empty = {
    name: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    image: null,
  };
  const [formData, setFormData] = useState(empty);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data.categories || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData((p) => ({
      ...p,
      name,
      slug: name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-"),
    }));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item._id);
    setFormData({ ...item, image: null });
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this category?")) return;
    const res = await fetch(`/api/category/${id}`, { method: "DELETE" });
    toast.success("Category Delted!!")
    if (res.ok) fetchCategories();
  };

  const handleSubmit = async (e) => {

    const toastId= toast.loading("Saving...")
    e.preventDefault();
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      if (v) fd.append(k, v);
    });
    const res = await fetch(
      isEditing ? `/api/category/${editingId}` : "/api/category",
      { method: isEditing ? "PUT" : "POST", body: fd },
    );
    if (res.ok) {
      fetchCategories();
      setOpenModal(false);
      setIsEditing(false);
      setEditingId(null);
      setFormData(empty);
    }
    toast.success("Cargory Saved!!",{toastId})
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Categories</h1>
            <p className="text-gray-500">Manage Categories</p>
          </div>
          <button
            onClick={() => {
              setIsEditing(false);
              setFormData(empty);
              setOpenModal(true);
            }}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            <Plus size={18} />
            New Category
          </button>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : categories.length === 0 ? (
          <div>No Categories</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((item) => (
              <div
                key={item._id}
                className="overflow-hidden rounded-xl bg-white shadow"
              >
                <div className="relative h-56 w-full">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h2 className="mb-4 text-center text-lg font-bold">
                    {item.name}
                  </h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 rounded bg-blue-600 py-2 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 rounded bg-red-600 py-2 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
            <div className="w-full max-w-2xl rounded-xl bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {isEditing ? "Edit Category" : "New Category"}
                </h2>
                <button onClick={() => setOpenModal(false)}>
                  <X />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="Name"
                  className="w-full rounded border p-3"
                />
                <input
                  value={formData.slug}
                  readOnly
                  className="w-full rounded border bg-gray-100 p-3"
                />
                <input
                  value={formData.metaTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, metaTitle: e.target.value })
                  }
                  placeholder="Meta Title"
                  className="w-full rounded border p-3"
                />
                <textarea
                  rows={4}
                  value={formData.metaDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      metaDescription: e.target.value,
                    })
                  }
                  placeholder="Meta Description"
                  className="w-full rounded border p-3"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.files?.[0] || null,
                    })
                  }
                />
                <button className="w-full rounded bg-blue-600 py-3 text-white">
                  {isEditing ? "Update Category" : "Create Category"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
