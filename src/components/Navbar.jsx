import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Tender Tracker
      </Link>
    </nav>
  );
};

export default Navbar;
