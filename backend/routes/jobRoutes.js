import express from "express";
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ success: true, message: "Job routes working!" });
});

export default router;
