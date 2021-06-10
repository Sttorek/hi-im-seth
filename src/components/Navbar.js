import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className='linkContainer'>
        <p className="link">Home</p>
        <p className="link">About</p>
        <p className="link">Skills</p>
        <p className="link">Work</p>
      </div>
      <p className="link contactLink">Contact</p>
    </div>
  );
}

export default Navbar;
