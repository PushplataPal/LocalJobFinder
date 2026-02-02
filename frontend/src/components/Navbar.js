import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
return (
<nav className="navbar">
<div className="logo">Local Job Finder</div>


<ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/jobs">Jobs</Link></li>
<li><Link to="/signin">Login</Link></li>
<li><Link to="/signup">Register</Link></li>
<li><Link to="/dashboard">Dashboard</Link></li>
</ul>
</nav>
);
}


export default Navbar;