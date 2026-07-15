import mongoose from "mongoose";

const specificationSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    // Basic Details
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      
    },

    variety: {
      type: String,
      default: "",
      trim: true,
    },

    // Multiple Packaging Options
    packaging: [
      {
        type: String,
        trim: true,
      },
    ],

    // Specifications (Key-Value Pair)
    specifications: [specificationSchema],

    // Jodit Editor HTML
    productOverview: {
      type: String,
      default: "",
    },

    keyFeatures: {
      type: String,
      default: "",
    },

    healthBenefits: {
      type: String,
      default: "",
    },

    whyChoose: {
      type: String,
      default: "",
    },

    // Product Image
    image: {
      type: String,
      required: true,
    },

    imageFileId: {
      type: String,
      default: "",
    },

    // SEO
    metaTitle: {
      type: String,
      default: "",
    },

    metaDescription: {
      type: String,
      default: "",
    },

  

   
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);