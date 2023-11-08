import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS option settings
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
// max allowed size of json
app.use(express.json({ limit: "16kb" }));
// for encoded url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
