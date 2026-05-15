import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dqllcskwa",
  api_key: process.env.CLOUDINARY_API_KEY || "985388165897716",
  api_secret: process.env.CLOUDINARY_API_SECRET || "z2pm_6U7W4i9V1idAW9cPFu_FlE",
});

export default cloudinary;