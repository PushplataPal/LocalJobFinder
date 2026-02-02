import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const userId = localStorage.getItem("userId");
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get(`/applications/my?userId=${userId}`)
      .then(res => setApps(res.data));
  }, []);

  return (
    <div className="p-3">
        <div className="page-container"></div>
      <h2>My Applied Jobs</h2>

      {apps.map((app) => (
        <div key={app._id}>
          <h3>{app.jobTitle}</h3>
          <p>{app.company}</p>
        </div>
      ))}
    </div>
  );
}
