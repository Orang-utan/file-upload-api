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

// Creating the HTTP server
export const server = http.createServer(app);
