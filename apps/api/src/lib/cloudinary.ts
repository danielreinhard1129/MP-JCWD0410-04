import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import * as streamifier from "streamifier";
import dotenv from 'dotenv'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "@/config";
// type CloudinaryResponse = UploadApiResponse | UploadApiErrorResponse;

dotenv.config()

cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_CLOUD_NAME,
});

export const cloudinaryUpload = (file: Express.Multer.File): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result: UploadApiResponse) => {
      if (error) return reject(error);
      resolve(result);
    });

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

export const cloudinaryRemove = async (secureUrl: string) => {
  try {
    const publicId = extractPublicIdFromUrl(secureUrl);
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw error;
  }
};

const extractPublicIdFromUrl = (url: string) => {
  const urlParts = url.split("/");
  const publicIdWithExt = urlParts[urlParts.length - 1];
  const publicId = publicIdWithExt.split(".")[0];
  return publicId;
} 