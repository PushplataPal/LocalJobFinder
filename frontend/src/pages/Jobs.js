import React from "react";
import JobCard from "../components/JobCard";
import "./Jobs.css";


const jobsData = [
  { title: "Electrician Needed", location: "Vijaynagar", icon: "⚡" },
  { title: "Plumber Required", location: "Kakadeo", icon: "🚿" },
  { title: "Driver Job", location: "Panki", icon: "🚗" },
  { title: "Home Cleaner", location: "Bhauti", icon: "🧹" },
  { title: "Cook Needed", location: "Govind Nagar", icon: "🍳" },
];

function Jobs() {
  return (
    <div className="jobs-container">

      <h2 className="jobs-title">Available Local Jobs</h2>

      <div className="jobs-list">
        {jobsData.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-icon">{job.icon}</div>

            <div className="job-content">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
            </div>

            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
