import React from "react";
import "./JobCard.css";

function JobCard({ title, company, salary, location }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>💰 {salary}</p>
      <p>📍 {location}</p>

      <button className="apply-btn">View Details</button>
    </div>
  );
}

export default JobCard;
