import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="linkContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="link effect">Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p className="link effect">About</p>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none" }}>
          <p className="link effect">Skills</p>
        </Link>
        <Link to="/work" style={{ textDecoration: "none" }}>
          <p className="link effect">Work</p>
        </Link>
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <p className="contactLink effect">Contact</p>
      </Link>
    </div>
  );
}

export default Navbar;
