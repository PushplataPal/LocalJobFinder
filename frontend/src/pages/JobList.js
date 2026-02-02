import React, { useEffect, useState } from "react";
import axios from "axios";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Jobs</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {jobs.map(j => (
          <div key={j._id} style={{ width: 260, padding: 16, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", background: "#fff" }}>
            <h3>{j.title}</h3>
            <p><strong>Company:</strong> {j.company}</p>
            <p><strong>Location:</strong> {j.location}</p>
            <p style={{ fontSize: 13, color: "#555" }}>{j.description}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
