import React from "react";
import "./Navbar.css";
import logo from "./Images/Frame 2087327970.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <h2 className="nav-title">Kagal Nagar Palika</h2>
      </div>

      <div className="nav-right">
        <button className="admin-btn">Admin</button>
      </div>
    </nav>
  );
};

export default Navbar;