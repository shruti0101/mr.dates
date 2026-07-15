"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Plus, Pencil, Trash2, X, Package } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";
import toast from "react-hot-toast";

// Jodit must be loaded client-side only (it touches `window`)
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const API = "/api/products";
const CATEGORY_API = "/api/category";

const EMPTY_FORM = {
  productName: "",
  slug: "",
  category: "",
  shortDescription: "",
  variety: "",
  packaging: "",
  metaTitle: "",
  metaDescription: "",
  productOverview: "",
  keyFeatures: "",
  healthBenefits: "",
  whyChoose: "",
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState(EMPTY_FORM);

  // Refs hold the current HTML for each Jodit instance so we avoid
  // re-rendering (and losing cursor position) on every keystroke.
  const overviewRef = useRef(formData.productOverview);
  const featuresRef = useRef(formData.keyFeatures);
  const benefitsRef = useRef(formData.healthBenefits);
  const whyChooseRef = useRef(formData.whyChoose);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const res = await fetch(CATEGORY_API);
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function resetEditorRefs(values) {
    overviewRef.current = values.productOverview || "";
    featuresRef.current = values.keyFeatures || "";
    benefitsRef.current = values.healthBenefits || "";
    whyChooseRef.current = values.whyChoose || "";
  }

  function openCreate() {
    setEditingProduct(null);
    setFormData(EMPTY_FORM);
    resetEditorRefs(EMPTY_FORM);
    setShowForm(true);
  }

  function openEdit(product) {
    setEditingProduct(product);

    const nextForm = {
      productName: product.productName,
      slug: product.slug,
      category: product.category?._id || product.category || "",
      shortDescription: product.shortDescription,
      variety: product.variety,
      packaging: product.packaging?.join(", "),
      metaTitle: product.metaTitle,
      metaDescription: product.metaDescription,
      productOverview: product.productOverview || "",
      keyFeatures: product.keyFeatures || "",
      healthBenefits: product.healthBenefits || "",
      whyChoose: product.whyChoose || "",
    };

    setFormData(nextForm);
    resetEditorRefs(nextForm);
    setShowForm(true);
  }

  async function handleDelete(id) {
    const ok = confirm("Delete this product?");
    if (!ok) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    toast.success("Product Deleted")

    fetchProducts();

  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...formData,
      packaging: formData.packaging.split(",").map((i) => i.trim()),
      productOverview: overviewRef.current,
      keyFeatures: featuresRef.current,
      healthBenefits: benefitsRef.current,
      whyChoose: whyChooseRef.current,
    };

    if (editingProduct) {
      await fetch(`${API}/${editingProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    setShowForm(false);
    fetchProducts();
  }

  const joditConfig = useMemo(
    () => ({
      readonly: false,
      height: 250,
      placeholder: "Start typing...",
    }),
    []
  );

  return (
    <>
      <div className="flex ">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="w-full p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Products</h1>

            <Link
              href="/admin/newProduct"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
            >
              <Plus size={18} />
              New Product
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="overflow-hidden rounded-xl border bg-white shadow"
                >
                  <div className="relative h-56">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={18} />
                      <h2 className="font-bold">{product.productName}</h2>
                    </div>

                    {product.category?.name && (
                      <span className="inline-block mb-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                        {product.category.name}
                      </span>
                    )}

                    {/* <p className="text-sm text-gray-500 line-clamp-2">
                      {product.shortDescription}
                    </p> */}

                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/admin/editProduct/${product._id}`}                        
                        className="flex-1 rounded-lg bg-yellow-500 py-2 text-white flex justify-center items-center gap-2"
                      >
                        <Pencil size={16} />
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="flex-1 rounded-lg bg-red-600 py-2 text-white flex justify-center items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* {showForm && (
            <div className="fixed  inset-0 z-50 bg-black/50 flex items-center justify-center p-5 overflow-y-auto">
              <div className="w-full h-70 overflow-y-auto max-w-3xl my-10 rounded-xl bg-white p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    {editingProduct ? "Edit Product" : "New Product"}
                  </h2>

                  <button onClick={() => setShowForm(false)}>
                    <X />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid h-50 gap-4">
                  <input
                    name="productName"
                    placeholder="Product Name"
                    value={formData.productName}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <input
                    name="slug"
                    placeholder="Slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border rounded-lg p-3 bg-white"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="shortDescription"
                    placeholder="Short Description"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <input
                    name="variety"
                    placeholder="Variety"
                    value={formData.variety}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <input
                    name="packaging"
                    placeholder="Packaging (comma separated)"
                    value={formData.packaging}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Product Overview
                    </label>
                    <JoditEditor
                      value={overviewRef.current}
                      config={joditConfig}
                      onBlur={(newContent) => {
                        overviewRef.current = newContent;
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Key Features
                    </label>
                    <JoditEditor
                      value={featuresRef.current}
                      config={joditConfig}
                      onBlur={(newContent) => {
                        featuresRef.current = newContent;
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Health Benefits
                    </label>
                    <JoditEditor
                      value={benefitsRef.current}
                      config={joditConfig}
                      onBlur={(newContent) => {
                        benefitsRef.current = newContent;
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Why Choose This
                    </label>
                    <JoditEditor
                      value={whyChooseRef.current}
                      config={joditConfig}
                      onBlur={(newContent) => {
                        whyChooseRef.current = newContent;
                      }}
                    />
                  </div>

                  <input
                    name="metaTitle"
                    placeholder="Meta Title"
                    value={formData.metaTitle}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <textarea
                    name="metaDescription"
                    placeholder="Meta Description"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                  />

                  <button className="rounded-lg bg-blue-600 py-3 text-white">
                    {editingProduct ? "Update Product" : "Create Product"}
                  </button>
                </form>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}