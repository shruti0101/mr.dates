import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Product from "@/models/product";
import { uploadToR2 } from "@/lib/uploadToR2";

// =============================
// CREATE PRODUCT
// =============================
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();

    // Basic Fields
    const productName = formData.get("productName");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const shortDescription = formData.get("shortDescription");
    const variety = formData.get("variety") || "";

    // SEO
    const metaTitle = formData.get("metaTitle") || "";
    const metaDescription = formData.get("metaDescription") || "";

    // Jodit Fields
    const productOverview = formData.get("productOverview") || "";
    const keyFeatures = formData.get("keyFeatures") || "";
    const healthBenefits = formData.get("healthBenefits") || "";
    const whyChoose = formData.get("whyChoose") || "";

    // Arrays
    const packaging = JSON.parse(formData.get("packaging") || "[]");
    const specifications = JSON.parse(
      formData.get("specifications") || "[]"
    );

    // Image
    const file = formData.get("image");

    // =============================
    // Validation
    // =============================

    if (!productName || !slug || !category || !shortDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(packaging) || packaging.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please add at least one package.",
        },
        { status: 400 }
      );
    }

    for (const item of packaging) {
      if (
        !item.packaging ||
        item.price === "" ||
        item.price === null ||
        item.price === undefined
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Each package must have a package name and price.",
          },
          { status: 400 }
        );
      }

      item.price = Number(item.price);

      if (isNaN(item.price) || item.price < 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Package price must be a valid positive number.",
          },
          { status: 400 }
        );
      }
    }

    if (!file || typeof file === "string" || file.size === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Product image is required.",
        },
        { status: 400 }
      );
    }

    // Check Slug
    const exists = await Product.findOne({
      slug: slug.toLowerCase(),
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists.",
        },
        { status: 400 }
      );
    }

    // =============================
    // Upload Image
    // =============================

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${file.name}`;

    const uploadedImage = await uploadToR2({
      file: buffer,
      folder: "products",
      fileName,
      contentType: file.type,
    });

    // =============================
    // Create Product
    // =============================

    const product = await Product.create({
      productName,
      slug: slug.toLowerCase(),
      category,
      shortDescription,
      variety,
      packaging,
      specifications,
      productOverview,
      keyFeatures,
      healthBenefits,
      whyChoose,
      image: uploadedImage.url,
      imageFileId: uploadedImage.key,
      metaTitle,
      metaDescription,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully.",
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// =============================
// GET ALL PRODUCTS
// =============================
export async function GET() {
  try {
    await connect();

    const products = await Product.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}