import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className='linkContainer'>
        <p className="link effect">Home</p>
        <p className="link effect">About</p>
        <p className="link effect">Skills</p>
        <p className="link effect">Work</p>
      </div>
      <p className="contactLink effect">Contact</p>
    </div>
  );
}

export default Navbar;
