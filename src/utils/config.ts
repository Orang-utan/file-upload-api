import { config as configDotenv } from "dotenv";
import { resolve } from "path";
switch (process.env.NODE_ENV) {
  case "development":
    console.log("Environment is 'development'");
    configDotenv({
      path: resolve(__dirname, "../../config/.env.development"),
    });
    break;
  case "test":
    console.log("Environment is 'test'");
    // to be changed
    configDotenv({
      path: resolve(__dirname, "../../config/.env.development"),
    });
    break;
  case "production":
    console.log("Environment is 'production'");
    break;
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`);
}
export const AWS_REGION = process.env.AWS_REGION || "";
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || "";
export const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "";
