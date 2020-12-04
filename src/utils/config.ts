import { config as configDotenv } from "dotenv";

switch (process.env.NODE_ENV) {
  case "development":
    console.log("Environment is 'development'");
    configDotenv({
      path: "../../config/.env.development",
    });
    break;
  case "test":
    console.log("Environment is 'test'");
    // to be changed
    configDotenv({
      path: "../../config/.env.development",
    });
    break;
  case "production":
    console.log("Environment is 'production'");
    break;
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`);
}

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "";
