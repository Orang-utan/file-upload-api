import "./utils/config";
import { server } from "./server";

const main = async () => {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Listening on port ${port} 🚀`);
    console.log("  Press Ctrl+C to stop\n");
  });
};

main();
