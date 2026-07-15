import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Product from "@/models/product";
import { uploadToR2 } from "@/lib/uploadToR2";
import { deleteFromR2 } from "@/lib/deleteFromR2";

// DELETE PRODUCT
export async function DELETE(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found.",
        },
        { status: 404 },
      );
    }

    await Product.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

//update product
export async function PUT(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    const formData = await req.formData();

    const productName = formData.get("productName");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const shortDescription = formData.get("shortDescription");
    const variety = formData.get("variety");
    const price = Number(formData.get("price"));
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const productOverview = formData.get("productOverview");
    const keyFeatures = formData.get("keyFeatures");
    const healthBenefits = formData.get("healthBenefits");
    const whyChoose = formData.get("whyChoose");

    const packaging = JSON.parse(formData.get("packaging") || "[]");
    const specifications = JSON.parse(
      formData.get("specifications") || "[]"
    );

    // Existing image values
    let image = product.image;
    let imageFileId = product.imageFileId;

    // New uploaded file
    const file = formData.get("image");

    if (file && file.name) {
      // Delete old image from R2
      if (imageFileId) {
        await deleteFromR2(imageFileId);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "products",
        fileName: `${Date.now()}-${file.name}`,
        contentType: file.type,
      });

      image = uploadedImage.url;
      imageFileId = uploadedImage.key;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        slug,
        category,
        shortDescription,
        variety,
        price,
        packaging,
        specifications,
        metaTitle,
        metaDescription,
        productOverview,
        keyFeatures,
        healthBenefits,
        whyChoose,
        image,
        imageFileId,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Product updated successfully.",
      product: updatedProduct,
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

//get product by ID
export async function GET(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const product = await Product.findById(id).populate("category");

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        product,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
