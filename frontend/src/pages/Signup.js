import React, { useState } from "react";
import axios from "axios";
import "./SigninSignup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        mobile,
        password,
      });

      setMessage(res.data.message || "Signup successful! 🎉");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed! Try again ❌"
      );
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Account</h2>

      <form onSubmit={handleSignup} className="auth-form">

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mobile</label>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">Sign Up</button>
      </form>

      {message && <p className="auth-msg">{message}</p>}

      <p className="switch-text">
        Already have an account? <a href="/signin">Login</a>
      </p>
    </div>
  );
}

export default Signup;
