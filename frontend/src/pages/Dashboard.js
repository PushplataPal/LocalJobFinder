import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios.get("http://localhost:5000/api/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, <b>{user.name}</b></p>
          <p>Email: {user.email}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

