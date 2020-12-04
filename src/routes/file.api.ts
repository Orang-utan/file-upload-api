import express from "express";
// import AWS from "aws-sdk";
import multer from "multer";
import errorHandler from "./error";
import auth from "../middleware/auth";
import { AWS_S3_BUCKET_NAME } from "../utils/config";

const router = express.Router();
// const s3 = new AWS.S3();

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

  return res.status(200).json({ success: true });

  // s3.upload(uploadParams, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
  //   if (err) return errorHandler(res, "An error occured with AWS", "500");
  //   return res
  //     .status(200)
  //     .json({ success: true, data: { fileUrl: data.Location } });
  // });
});

/* delete one file */
router.delete("/", auth, (req, res) => {
  const filename = req.body.filename;

  const uploadParams = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: filename,
  };
  return res.status(200).json({ success: true });

  // s3.deleteObject(uploadParams, (err: AWS.AWSError) => {
  //   if (err) return errorHandler(res, "An error occured with AWS", "500");
  //   return res
  //     .status(200)
  //     .json({ success: true, message: "Object successfully deleted" });
  // });
});

/* get all object keys */
router.get("/all", auth, (_, res) => {
  const params = { Bucket: AWS_S3_BUCKET_NAME };
  return res.status(200).json({ success: true });

  // s3.listObjects(
  //   params,
  //   (err: AWS.AWSError, data: AWS.S3.ListObjectsOutput) => {
  //     if (err) return errorHandler(res, "An error occured with AWS", "500");

  //     return res.status(200).json({ success: true, data });
  //   }
  // );
});

export default router;
