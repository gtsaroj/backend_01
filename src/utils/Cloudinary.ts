import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dhnvpzxt6",
  api_key: "361221822466173",
  api_secret: "***************************",
});

const cloudinaryHandler = async (fileUrlPath: string) => {
  try {
    const response = await cloudinary.uploader.upload(fileUrlPath, {
      resource_type: "auto",
    });
  } catch (error) {
    fs.unlinkSync(fileUrlPath);
  }
};
