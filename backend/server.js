app.get("/api/test", (req, res) => {
  res.send("API working");
});

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
console.log("MONGO_URI =", process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.listen(5000, () => console.log("Server running on 5000"));





