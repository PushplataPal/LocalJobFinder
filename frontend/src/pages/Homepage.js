import React from "react";
import { FaBolt, FaTools, FaCar, FaBroom, FaUserChef } from "react-icons/fa";
import { GiPlumber, GiCarpenterSaw } from "react-icons/gi";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">

      <h2 className="title">Local Job Finder</h2>

      <input
        type="text"
        placeholder="Search for jobs or workers..."
        className="search-box"
      />

      {/* ---------- CATEGORY CARD ---------- */}
      <section className="card-box">
        <h3>Categories</h3>

        <div className="category-list">

          <div className="cat-item">
            <FaBolt className="icon" />
            Electrician
          </div>

          <div className="cat-item">
            <GiPlumber className="icon" />
            Plumber
          </div>

          <div className="cat-item">
            <GiCarpenterSaw className="icon" />
            Carpenter
          </div>

          <div className="cat-item">
            <FaCar className="icon" />
            Driver
          </div>

          <div className="cat-item">
            <FaBroom className="icon" />
            Cleaner
          </div>

          <div className="cat-item">
            <FaUserChef className="icon" />
            Cook
          </div>

        </div>
      </section>
    </div>
  );
}

export default Homepage;
