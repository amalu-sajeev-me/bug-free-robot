import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } =
process.env;
cloudinary.config({
// account_id: CLOUDINARY_NAME,
cloud_name: CLOUDINARY_NAME,
api_key: CLOUDINARY_API_KEY,
api_secret: CLOUDINARY_SECRET_KEY,
});

const storage = new CloudinaryStorage({
    cloudinary,
    folder: "profile-pics",
    allowedFormats: ["jpg", "jpeg", "png"]
});

const upload = multer({ storage });
const uploadSingle = upload.single("profilePicture");

export { uploadSingle };
