import { connect } from "@/Database/db";
import Blog from "@/models/blog";
import cloudinary from "@/utils/cloudinary";

// GET /api/blog 
export async function GET() {
  await connect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), { status: 200 });
}

// POST /api/blog 
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();
    const title = formData.get("title");
    const permalink = formData.get("permalink");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    let imageUrl = "";
    let imagePublicId = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "blogs",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        ).end(buffer);
      });

      imageUrl = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }

    const blog = await Blog.create({
      title,
      permalink,
      content,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imagePublicId,
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error("POST /api/blog error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}