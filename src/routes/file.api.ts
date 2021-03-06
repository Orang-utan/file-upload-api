import express from "express";
import S3 = require("aws-sdk/clients/s3");
import s3Storage from "../s3Storage";
import multer from "multer";
import errorHandler from "./error";
import auth from "../middleware/auth";
import { AWS_S3_BUCKET_NAME } from "../utils/config";

const router = express.Router();

// config multer
// in memory strategy below
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/* upload one file */
router.post("/upload", auth, upload.single("file"), (req, res) => {
  if (!req.file) return errorHandler(res, "Invalid file.", "400");

  const timestamp = new Date().getTime();
  const filename = timestamp + req.file.originalname;
  const bufferStream = req.file.buffer;

  const uploadParams = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: filename,
    Body: bufferStream,
  };

  s3Storage.upload(
    uploadParams,
    (err: Error, data: S3.ManagedUpload.SendData) => {
      if (err) return errorHandler(res, "An error occured with AWS", "500");
      return res
        .status(200)
        .json({ success: true, data: { fileUrl: data.Location } });
    }
  );
});

/* delete one file */
router.delete("/", auth, (req, res) => {
  const filename = req.body.filename;

  const uploadParams = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: filename,
  };

  s3Storage.deleteObject(uploadParams, (err: Error) => {
    if (err) return errorHandler(res, "An error occured with AWS", "500");
    return res
      .status(200)
      .json({ success: true, message: "Object successfully deleted" });
  });
});

/* get all object keys */
router.get("/all", auth, (_, res) => {
  const params = { Bucket: AWS_S3_BUCKET_NAME };

  s3Storage.listObjects(params, (err: Error, data: S3.ListObjectsOutput) => {
    if (err) return errorHandler(res, "An error occured with AWS", "500");

    return res.status(200).json({ success: true, data });
  });
});

export default router;
