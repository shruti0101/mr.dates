import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    permalink: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: { type: String },          
    imageFileId: { type: String },    
    metaTitle: { type: String },
    metaDescription: { type: String }
  },
  { timestamps: true }

);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);