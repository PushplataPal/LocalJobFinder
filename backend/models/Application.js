import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    userId: String,
    jobId: String,
    jobTitle: String,
    company: String
});

export default mongoose.model("Application", applicationSchema);
