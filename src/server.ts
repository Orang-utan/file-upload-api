import cors from "cors";
import express from "express";
import http from "http";
import fileRouter from "./routes/file.api";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // TODO(ekzhang): revisit CORS headers

// API Routes
app.use("/api/file", fileRouter);

// send redirect
app.get("*", (_, res) => {
  res.redirect("https://github.com/Orang-utan/file-upload-api");
});

// Creating the HTTP server
export const server = http.createServer(app);
