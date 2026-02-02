import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    
    <div className="p-3">
        <div className="page-container"></div>
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.salary}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
    
  );
}

