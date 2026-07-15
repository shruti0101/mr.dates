"use client";
import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Plus, Pencil, Trash2, X, Package } from "lucide-react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const API = "/api/products";
const CATEGORY_API = "/api/category";

const EMPTY_FORM = {
  productName: "",
  slug: "",
  price: "",
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

const EMPTY_SPEC_ROW = { key: "", value: "" };

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState(EMPTY_FORM);

  // Specifications: dynamic list of { key, value } rows
  const [specifications, setSpecifications] = useState([{ ...EMPTY_SPEC_ROW }]);

  // Image file + preview (separate from formData since it's not a plain string field)
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

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
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,

    // Auto-generate slug from product name
    ...(name === "productName" && {
      slug: value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")          // spaces -> -
        .replace(/[^a-z0-9-]/g, "")    // remove special characters
        .replace(/-+/g, "-"),          // remove duplicate -
    }),
  }));
}

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  // ---- Specifications helpers ----
  function handleSpecChange(index, field, value) {
    setSpecifications((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  }

  function addSpecRow() {
    setSpecifications((prev) => [...prev, { ...EMPTY_SPEC_ROW }]);
  }

  function removeSpecRow(index) {
    setSpecifications((prev) => prev.filter((_, i) => i !== index));
  }

  function resetSpecifications(specs) {
    if (specs && specs.length > 0) {
      setSpecifications(specs.map((s) => ({ key: s.key || "", value: s.value || "" })));
    } else {
      setSpecifications([{ ...EMPTY_SPEC_ROW }]);
    }
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
    resetSpecifications([]);
    setImageFile(null);
    setImagePreview("");
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
      price: product.price,
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
    resetSpecifications(product.specifications || []);
    setImageFile(null);
    setImagePreview(product.image || "");
    setShowForm(true);
  }

  async function handleDelete(id) {
    const ok = confirm("Delete this product?");
    if (!ok) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  }

  async function handleSubmit(e) {
    const toastId = toast.loading("Product Saving...");

    e.preventDefault();

    // Only require a new image on create — on edit, keeping the
    // existing image (no new file picked) is valid.
    if (!editingProduct && !imageFile) {
      alert("Please select a product image.");
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("productName", formData.productName);
      fd.append("slug", formData.slug);
      fd.append("price", formData.price);
      fd.append("category", formData.category);
      fd.append("shortDescription", formData.shortDescription);
      fd.append("variety", formData.variety);
      fd.append("metaTitle", formData.metaTitle);
      fd.append("metaDescription", formData.metaDescription);
      fd.append("productOverview", overviewRef.current);
      fd.append("keyFeatures", featuresRef.current);
      fd.append("healthBenefits", benefitsRef.current);
      fd.append("whyChoose", whyChooseRef.current);

      const packagingArr = formData.packaging
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      fd.append("packaging", JSON.stringify(packagingArr));

      // Drop any blank rows (empty key or value) before sending
      const cleanedSpecs = specifications
        .map((row) => ({ key: row.key.trim(), value: row.value.trim() }))
        .filter((row) => row.key && row.value);
      fd.append("specifications", JSON.stringify(cleanedSpecs));

      if (imageFile) {
        fd.append("image", imageFile);
      }

      if (editingProduct) {
        await fetch(`${API}/${editingProduct._id}`, {
          method: "PUT",
          body: fd,
        });
      } else {
        await fetch(API, {
          method: "POST",
          body: fd,
        });
      }
      toast.success("Product saved successfully!", {
        id: toastId,
      });

      setFormData(EMPTY_FORM);
      resetEditorRefs(EMPTY_FORM);
      resetSpecifications([]);
      setImageFile(null);
      setImagePreview("");
      setEditingProduct(null);

      fetchProducts();
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }

  const joditConfig = useMemo(
    () => ({
      readonly: false,
      height: 250,
      placeholder: "Start typing...",
    }),
    [],
  );

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="w-full p-8">
          <div className="w-full flex items-center   overflow-y-auto">
            <div className="w-full  my-6 rounded-xl bg-white p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {editingProduct ? "Edit Product" : "New Product"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="grid w-full gap-4">
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
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="1"
                  onKeyDown={(e) => {
                    if (["e", "E", "+", "-", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
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
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Specifications
                    </label>
                    <button
                      type="button"
                      onClick={addSpecRow}
                      className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      <Plus size={14} />
                      Add Row
                    </button>
                  </div>

                  <div className="grid gap-2">
                    {specifications.map((row, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          placeholder="Key (e.g. Weight)"
                          value={row.key}
                          onChange={(e) =>
                            handleSpecChange(index, "key", e.target.value)
                          }
                          className="border rounded-lg p-3 flex-1"
                        />
                        <input
                          placeholder="Value (e.g. 500g)"
                          value={row.value}
                          onChange={(e) =>
                            handleSpecChange(index, "value", e.target.value)
                          }
                          className="border rounded-lg p-3 flex-1"
                        />
                        <button
                          type="button"
                          onClick={() => removeSpecRow(index)}
                          disabled={specifications.length === 1}
                          className="flex items-center justify-center rounded-lg bg-red-50 px-3 text-red-600 hover:bg-red-100 disabled:opacity-40 disabled:cursor-not-allowed"
                          title="Remove row"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Product Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  {imagePreview && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-3 h-32 w-32 rounded-lg object-cover border"
                    />
                  )}
                </div>

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

                <button
                  disabled={submitting}
                  className="rounded-lg bg-blue-600 py-3 text-white disabled:opacity-60"
                >
                  {submitting
                    ? "Saving..."
                    : editingProduct
                      ? "Update Product"
                      : "Create Product"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}