import React from "react";
import { Link } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <FaGlobeAmericas className="logo-icon" />
        <span className="logo-text">World Tour</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/countries">Countries</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
