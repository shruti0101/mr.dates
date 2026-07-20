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
// UPDATE PRODUCT
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

    // Basic Fields
    const productName = formData.get("productName");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const shortDescription = formData.get("shortDescription");
    const variety = formData.get("variety") || "";

    // SEO
    const metaTitle = formData.get("metaTitle") || "";
    const metaDescription = formData.get("metaDescription") || "";

    // Editor Fields
    const productOverview = formData.get("productOverview") || "";
    const keyFeatures = formData.get("keyFeatures") || "";
    const healthBenefits = formData.get("healthBenefits") || "";
    const whyChoose = formData.get("whyChoose") || "";

    // Arrays
    const packaging = JSON.parse(formData.get("packaging") || "[]");
    const specifications = JSON.parse(
      formData.get("specifications") || "[]"
    );

    // =============================
    // Packaging Validation
    // =============================

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
            message: "Package price must be a valid number.",
          },
          { status: 400 }
        );
      }
    }

    // =============================
    // Existing Image
    // =============================

    let image = product.image;
    let imageFileId = product.imageFileId;

    const file = formData.get("image");

    if (file && file.name) {
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

    // =============================
    // Check Slug
    // =============================

    const existingSlug = await Product.findOne({
      slug: slug.toLowerCase(),
      _id: { $ne: id },
    });

    if (existingSlug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists.",
        },
        { status: 400 }
      );
    }

    // =============================
    // Update Product
    // =============================

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        slug: slug.toLowerCase(),
        category,
        shortDescription,
        variety,
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
