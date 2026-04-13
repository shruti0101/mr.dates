import Link from "next/link";
import { connect } from "@/Database/db";
import Blog from "@/models/blog";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await connect();
    const blog = await Blog.findOne({ permalink: slug });

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "This blog does not exist.",
        };
    }

    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        openGraph: {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || "",
            images: blog.image ? [{ url: blog.image }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || "",
            images: blog.image ? [blog.image] : [],
        },
    };
}

export default async function BlogPage({ params }) {
    const { slug } = await params;
    await connect();

    const blog = await Blog.findOne({ permalink: slug });
    if (!blog) return notFound();

    let relatedBlogs = await Blog.find({
        _id: { $ne: blog._id },
        ...(blog.category ? { category: blog.category } : {}),
    }).limit(3)
        .select("title image permalink metaDescription createdAt");

    return (
        <>
            <section
                style={{
                    backgroundImage: "url('/bg3.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="py-30 relative z-10"
            >
                <div className="absolute inset-0 bg-gray-900/60" />

                <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                    {blog.title}
                </h1>
            </section>

            {/* ✅ Blog Layout */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 my-10 px-4 md:px-6">
                <main className="flex-1">
                    {blog.image && (
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full rounded-xl mb-6 shadow-md"
                        />
                    )}

                    <p className="text-sm text-gray-500 mb-4">
                        Published on {new Date(blog.createdAt).toLocaleDateString()}
                    </p>

                    <div className="my-6 border-t border-gray-300" />
                    <div
                        className="
    jodit-content
    prose max-w-none
    prose-h1:text-xl prose-h1:font-bold prose-h1:leading-snug
    prose-h2:text-lg prose-h2:font-semibold
    prose-h3:text-base
    prose-p:text-sm
    md:prose-h1:text-3xl md:prose-h2:text-2xl md:prose-h3:text-xl
  "
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />



                </main>

                {relatedBlogs.length > 0 && (
                    <aside className="w-full lg:w-80 shrink-0 mt-10 lg:mt-0">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                            Featured Blogs
                        </h2>

                        <div className="space-y-6">
                            {relatedBlogs.map((related) => (
                                <Link
                                    key={related._id}
                                    href={`/blogs/${related.permalink}`}
                                    className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border bg-white"
                                >
                                    {related.image && (
                                        <div className="overflow-hidden">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold text-yellow-400 line-clamp-2 hover:text-[#ffd500] transition-colors">
                                            {related.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 mt-2 line-clamp-3">
                                            {related.metaDescription}
                                        </p>
                                        <Link href={`/blogs/${related.permalink}`} className="mt-3 inline-block text-blue-600 font-medium hover:underline">
                                            Read More →
                                        </Link>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                )}
            </div>
        </>
    );
}