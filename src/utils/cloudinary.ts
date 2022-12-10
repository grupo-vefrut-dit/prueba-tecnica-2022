import { v2 as cloudinary } from "cloudinary";
import config from "../inc/config.js";

cloudinary.config({
  cloud_name: config.CLOUDINARY.NAME,
  api_key: config.CLOUDINARY.KEY,
  api_secret: config.CLOUDINARY.SECRET,
  secure: true,
});

export const uploadFile = async (filePath: String) => {
  return await cloudinary.uploader.upload(<string>filePath, {
    chunk_size: 6000000,
    folder: "samples",
  });
};

export const deleteFile = async (publicId: String) => {
  return await cloudinary.uploader.destroy(<string>publicId);
};
