import React from "react";
import Picture from "../images/profilePic.jpg";

function Work() {
  return (
    <div>
      <div className="workHead">
        <div className="workTitle">
          <p>Check Out My Work</p>
        </div>
        <div id="circle">
            <img id="profile-pic" alt="profile pic" src={Picture} />
        </div>
      </div>

        <div className="firstProjectBackground"></div>
        <div className="secondProjectBackground"></div>
        <div className="thirdProjectBackground"></div>
        <div className="fourthProjectBackground"></div>

    </div>
  );
}

export default Work;
