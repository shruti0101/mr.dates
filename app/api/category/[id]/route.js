import { connect } from "@/Database/db";
import Category from "@/models/category";
import { uploadToR2 } from "@/lib/uploadToR2";
import { deleteFromR2 } from "@/lib/deleteFromR2";

// ================= UPDATE CATEGORY =================

export async function PUT(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const category = await Category.findById(id);

    if (!category) {
      return new Response(
        JSON.stringify({ error: "Category not found" }),
        { status: 404 }
      );
    }

    const formData = await req.formData();

    const name = formData.get("name");
    const slug = formData.get("slug");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    let image = category.image;
    let imageFileId = category.imageFileId;

    // Upload new image
    if (file && file.name) {
      // Delete old image
      if (imageFileId) {
        await deleteFromR2(imageFileId);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "categories",
        fileName: `${Date.now()}-${file.name}`,
        contentType: file.type,
      });

      image = uploadedImage.url;
      imageFileId = uploadedImage.key;
    }

    category.name = name;
    category.slug = slug;
    category.metaTitle = metaTitle;
    category.metaDescription = metaDescription;
    category.image = image;
    category.imageFileId = imageFileId;

    await category.save();

    return new Response(JSON.stringify(category), {
      status: 200,
    });
  } catch (err) {
    console.error(err);

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

// ================= DELETE CATEGORY =================

export async function DELETE(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const category = await Category.findById(id);

    if (!category) {
      return new Response(
        JSON.stringify({
          error: "Category not found",
        }),
        {
          status: 404,
        }
      );
    }

    // Delete image from R2
    if (category.imageFileId) {
      await deleteFromR2(category.imageFileId);
    }

    await Category.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Category deleted successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);

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