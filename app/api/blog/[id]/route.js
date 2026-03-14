import { connect } from "@/Database/db";
import Blog from "@/models/blog";
import cloudinary from "@/utils/cloudinary";

// GET /api/blog/:id
export async function GET(_req, { params }) {
    const { id } = await params
    await connect();
    const blog = await Blog.findById(id);
    if (!blog) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(blog), { status: 200 });
}

// PUT /api/blog/:id 
export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        await connect();

        const formData = await req.formData();

        const data = {
            title: formData.get("title"),
            permalink: formData.get("permalink"),
            content: formData.get("content"),
            metaTitle: formData.get("metaTitle"),
            metaDescription: formData.get("metaDescription"),
        };

        const newFile = formData.get("image");

        const existing = await Blog.findById(id);
        if (!existing) return new Response("Not found", { status: 404 });

        // 🔁 If new image uploaded
        if (newFile && newFile.name) {

            // ✅ DELETE OLD IMAGE
            if (existing.imagePublicId) {
                const destroyResult = await cloudinary.uploader.destroy(
                    existing.imagePublicId,
                    { resource_type: "image" }
                );

                console.log("Cloudinary delete result:", destroyResult);
            }

            // ⬆ UPLOAD NEW IMAGE
            const bytes = await newFile.arrayBuffer();
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

            data.image = uploadResult.secure_url;
            data.imagePublicId = uploadResult.public_id; // ✅ FULL PATH
        }

        const updated = await Blog.findByIdAndUpdate(id, data, { new: true });
        return new Response(JSON.stringify(updated), { status: 200 });

    } catch (err) {
        console.error("PUT /api/blog/:id error:", err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

// DELETE /api/blog/:id
export async function DELETE(_req, { params }) {
    try {
        const { id } = await params;
        await connect();

        const blog = await Blog.findById(id);
        if (!blog) return new Response("Not found", { status: 404 });

        if (blog.imagePublicId) {
            const destroyResult = await cloudinary.uploader.destroy(
                blog.imagePublicId,
                { resource_type: "image" }
            );

            //   console.log("Cloudinary delete result:", destroyResult);
        }

        await Blog.findByIdAndDelete(id);

        return new Response("Deleted successfully", { status: 200 });

    } catch (err) {
        console.error("DELETE /api/blog/:id error:", err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}