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

    // Must read as FormData, not JSON — a File object cannot be
    // serialized through JSON.stringify/req.json().
    const formData = await req.formData();

    console.log(formData)

    const productName = formData.get("productName");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const price = Number(formData.get("price")); ;
    const shortDescription = formData.get("shortDescription");
    const variety = formData.get("variety") || "";
    const metaTitle = formData.get("metaTitle") || "";
    const metaDescription = formData.get("metaDescription") || "";
    const productOverview = formData.get("productOverview") || "";
    const keyFeatures = formData.get("keyFeatures") || "";
    const healthBenefits = formData.get("healthBenefits") || "";
    const whyChoose = formData.get("whyChoose") || "";

    console.log(typeof price)

    console.log("clicked")

    // Arrays/objects are sent as JSON strings inside FormData
    const packaging = JSON.parse(formData.get("packaging") || "[]");
    const specifications = JSON.parse(formData.get("specifications") || "[]");

    const file = formData.get("image");

    if (!productName || !slug || !category || !shortDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        { status: 400 }
      );
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

    // Upload to Cloudflare R2
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;

    const uploadedImage = await uploadToR2({
      file: buffer,
      folder: "products",
      fileName,
      contentType: file.type,
    });

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
      price,
      healthBenefits,
      whyChoose,
      image: uploadedImage.url,
      imageFileId: uploadedImage.key,
      metaTitle,
      metaDescription,
    });

    console.log("done")

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
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
