import "./utils/config";
import { server } from "./server";
import AWS from "aws-sdk";
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} from "./utils/config";

const main = async () => {
  // configure AWS
  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
  });

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Listening on port ${port} 🚀`);
    console.log("  Press Ctrl+C to stop\n");
  });
};

main();
