import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./JobDetails.css";

function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // job data from Jobs.js
  const job = location.state;

  if (!job) {
    return <h2>No Job Selected</h2>;
  }

  return (
    <div className="jobdetails-container">

      <div className="jobdetails-header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <h2>Job Details</h2>
      </div>

      <div className="jobdetails-card">
        <div className="jobdetails-icon">{job.icon}</div>

        <h3>{job.title}</h3>
        <p className="location">{job.location}</p>

        <p className="desc">
          This job requires an experienced and reliable worker. You will be
          responsible for completing the tasks on time. Payment will be made
          after work completion.
        </p>

        <p className="info"><strong>Salary:</strong> ₹8,000 – ₹15,000 / month</p>
        <p className="info"><strong>Work Type:</strong> Full Time / Part Time</p>
        <p className="info"><strong>Contact:</strong> 9876543210</p>

        <button className="apply-main-btn">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
