import React, { useState } from "react";
import "./SigninSignup.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Login successful!");
      console.log("User:", data.user);
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Server error");
    console.error(error);
  }
};

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>

      <form onSubmit={handleLogin} className="auth-form">

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">Login</button>
      </form>

      <p className="switch-text">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Signin;
