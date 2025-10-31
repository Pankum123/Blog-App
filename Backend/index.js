// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import fileUpload from "express-fileupload";
// import { v2 as cloudinary } from "cloudinary";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/user.route.js";
// import blogRoute from "./routes/blog.route.js";


// const app = express();
// dotenv.config();

// // ----------------------
// // CORS middleware (before routes)
// // ----------------------
// const allowedOrigins = [
//   "http://localhost:3001",
//   process.env.FRONTEND_URL
// ];

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       return callback(new Error("Not allowed by CORS"), false);
//     }
//   },
//   credentials: true,
//   methods: ["GET","POST","PUT","DELETE"]
// }));

// app.use(express.json());
// app.use(cookieParser());

// // //middleware
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(
// //   cors({
// //     origin: process.env.FRONTEND_URL,
// //     credentials: true,
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //   })
// // );

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // MongoDB connection
// const port = process.env.PORT || 4001;
// const MONOGO_URL = process.env.MONOG_URI;

// mongoose.connect(MONOGO_URL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log("MongoDB connection error:", err));

// // try {
// //   mongoose.connect(MONOGO_URL);
// //   console.log("Conntected to MonogDB");
// // } catch (error) {
// //   console.log(error);
// // }

// // defining routes
// app.use("/api/users", userRoute);
// app.use("/api/blogs", blogRoute);
// // Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_SECRET_KEY,
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// // done


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
dotenv.config();

// ----------------------
// CORS middleware (before routes)
// ----------------------
const allowedOrigins = [
  "http://localhost:3001",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

// File upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// MongoDB connection
const port = process.env.PORT || 4001;
const MONOGO_URL = process.env.MONOG_URI;

mongoose
  .connect(MONOGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// ----------------------
// Serve React frontend (fix refresh Not Found issue)
// ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// ----------------------
// Start server
// ----------------------
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
