"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Sidebar from "@/components/admin/Sidebar";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const API = "/api/products";
const CATEGORY_API = "/api/category";

const EMPTY_FORM = {
  productName: "",
  slug: "",
  category: "",
  shortDescription: "",
  variety: "",
  packaging: [
    {
      packaging: "",
      price: "",
    },
  ],
  metaTitle: "",
  metaDescription: "",
};

const EMPTY_SPEC_ROW = { key: "", value: "" };

export default function EditProductPage() {
  const { id } = useParams();
  console.log(id) 
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [specifications, setSpecifications] = useState([{ ...EMPTY_SPEC_ROW }]);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const overviewRef = useRef("");
  const featuresRef = useRef("");
  const benefitsRef = useRef("");
  const whyChooseRef = useRef("");

  useEffect(() => {
    fetchCategories();
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function fetchCategories() {
    try {
      const res = await fetch(CATEGORY_API);
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchProduct() {
    try {
      setLoading(true);
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();

      if (!data.success || !data.product) {
        setNotFound(true);
        return;
      }

      const product = data.product;

      setFormData({
        productName: product.productName || "",
        slug: product.slug || "",
        packaging:
  product.packaging?.length > 0
    ? product.packaging
    : [
        {
          packaging: "",
          price: "",
        },
      ],
        category: product.category?._id || product.category || "",
        shortDescription: product.shortDescription || "",
        variety: product.variety || "",
        metaTitle: product.metaTitle || "",
        metaDescription: product.metaDescription || "",
      });

      overviewRef.current = product.productOverview || "";
      featuresRef.current = product.keyFeatures || "";
      benefitsRef.current = product.healthBenefits || "";
      whyChooseRef.current = product.whyChoose || "";

      setSpecifications(
        product.specifications && product.specifications.length > 0
          ? product.specifications.map((s) => ({ key: s.key || "", value: s.value || "" }))
          : [{ ...EMPTY_SPEC_ROW }]
      );

      setImagePreview(product.image || "");
    } catch (err) {
      console.log(err);
      setNotFound(true);
    } finally {
      setLoading(false);
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

function handlePackageChange(index, field, value) {
  const updated = [...formData.packaging];

  updated[index][field] = value;

  setFormData((prev) => ({
    ...prev,
    packaging: updated,
  }));
}

function addPackageRow() {
  setFormData((prev) => ({
    ...prev,
    packaging: [
      ...prev.packaging,
      {
        packageName: "",
        price: "",
      },
    ],
  }));
}

function removePackageRow(index) {
  setFormData((prev) => ({
    ...prev,
    packaging: prev.packaging.filter((_, i) => i !== index),
  }));
}

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

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

  async function handleSubmit(e) {
    e.preventDefault();

    const toastId = toast.loading("Updating product...");
    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("productName", formData.productName);
      fd.append("slug", formData.slug);
      fd.append(
  "packaging",
  JSON.stringify(
    formData.packaging.map((item) => ({
      packaging: item.packaging,
      price: Number(item.price),
    }))
  )
);
      fd.append("category", formData.category);
      fd.append("shortDescription", formData.shortDescription);
      fd.append("variety", formData.variety);
      fd.append("metaTitle", formData.metaTitle);
      fd.append("metaDescription", formData.metaDescription);
      fd.append("productOverview", overviewRef.current);
      fd.append("keyFeatures", featuresRef.current);
      fd.append("healthBenefits", benefitsRef.current);
      fd.append("whyChoose", whyChooseRef.current);

   

      const cleanedSpecs = specifications
        .map((row) => ({ key: row.key.trim(), value: row.value.trim() }))
        .filter((row) => row.key && row.value);
      fd.append("specifications", JSON.stringify(cleanedSpecs));

      // Only attach a new image if the user actually picked one —
      // the API keeps the existing image when none is sent.
      if (imageFile) {
        fd.append("image", imageFile);
      }

      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        body: fd,
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Failed to update product.", { id: toastId });
        return;
      }

      toast.success("Product updated successfully!", { id: toastId });
      router.push("/admin/allProducts");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.", { id: toastId });
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
    []
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="w-full p-8">
        <button
          onClick={() => router.push("/admin/allProducts")}
          className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="rounded-xl bg-white p-6">
          <h2 className="mb-5 text-2xl font-bold">Edit Product</h2>

          {loading ? (
            <div className="py-20 text-center">Loading...</div>
          ) : notFound ? (
            <div className="py-20 text-center text-gray-500">
              Product not found.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
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

              <div>
  <div className="flex justify-between items-center mb-2">
    <label className="font-medium">
      Packaging & Price
    </label>

    <button
      type="button"
      onClick={addPackageRow}
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      + Add Package
    </button>
  </div>

  {formData.packaging.map((pkg, index) => (
    <div key={index} className="flex gap-3 mb-3">

      <input
        type="text"
        placeholder="Package"
        value={pkg.packaging}
        onChange={(e) =>
          handlePackageChange(
            index,
            "packaging",
            e.target.value
          )
        }
        className="border rounded-lg p-3 flex-1"
      />

      <input
        type="number"
        min="0"
        placeholder="Price"
        value={pkg.price}
        onChange={(e) =>
          handlePackageChange(
            index,
            "price",
            e.target.value
          )
        }
        className="border rounded-lg p-3 w-40"
      />

      <button
        type="button"
        onClick={() => removePackageRow(index)}
        disabled={formData.packaging.length === 1}
        className="bg-red-500 text-white px-3 rounded"
      >
        <Trash2 size={18}/>
      </button>

    </div>
  ))}
</div>

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
                <p className="mt-1 text-xs text-gray-500">
                  Leave empty to keep the current image.
                </p>
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
                {submitting ? "Updating..." : "Update Product"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
