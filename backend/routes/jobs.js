import express from "express";
import Job from "../models/Job.js";
const router = express.Router();

// GET /api/jobs  -> all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/jobs -> create job (for admin/dev use)
router.post("/", async (req, res) => {
  try {
    const { title, company, location, description } = req.body;
    const job = new Job({ title, company, location, description });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
