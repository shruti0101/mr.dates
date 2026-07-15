import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Category from "@/models/category";
import { uploadToR2 } from "@/lib/uploadToR2";

export async function GET() {
  try {
    await connect();

    const categories = await Category.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      {
        success: true,
        count: categories.length,
        categories,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GET Categories Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch categories",
      },
      { status: 500 },
    );
  }
}

// POST /api/categories
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();

    const name = formData.get("name");
    const slug = formData.get("slug");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    // Check duplicate slug
    const existingCategory = await Category.findOne({ slug });

    if (existingCategory) {
      return new Response(
        JSON.stringify({
          error: "Category already exists.",
        }),
        {
          status: 400,
        }
      );
    }

    let imageUrl = "";
    let imageFileId = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "category",
        fileName,
        contentType: file.type,
      });

      imageUrl = uploadedImage.url;
      imageFileId = uploadedImage.key;
    }

    const category = await Category.create({
      name,
      slug,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imageFileId,
    });

    return new Response(JSON.stringify(category), {
      status: 201,
    });
  } catch (err) {
    console.error("POST /api/categories error:", err);

    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
      }
    );
  }
}
