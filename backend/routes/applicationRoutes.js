import express from "express";
import Application from "../models/Application.js";
import Job from "../models/Job.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { userId, jobId } = req.body;

    const job = await Job.findById(jobId);

    const newApp = new Application({
        userId,
        jobId,
        jobTitle: job.title,
        company: job.company
    });

    await newApp.save();

    res.json({ success: true });
});


router.get("/my", async (req, res) => {
    const { userId } = req.query;

    const apps = await Application.find({ userId });
    res.json(apps);
});

export default router;
