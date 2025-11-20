import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Local Job Finder</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}


export default Navbar;
<div className="navbar">
  <div className="navbar-title">Local Job Finder</div>
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/jobs">Jobs</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
</div>
