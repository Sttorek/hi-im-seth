import React from "react";
import Picture from "../images/profilePic.jpg";
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import Project4 from "../images/project4.png";

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

        <div className="firstProjectBackground">
          <div className="projCont">
            <div className="Titles">
              <p className="projectTitles">Git Commit</p> 
              <p>An app designed for developers to practice their skills, tract their progress and learn new skills</p>
            </div>
              <img className="projImg" alt="project" src={Project1} />
          </div>
        </div>

        <div className="secondProjectBackground">
          <div className="projCont">
            <div className="Titles">
              <p className="projectTitles">Home Route</p>
              <p>An app designed for developers to practice their skills, tract their progress and learn new skills</p>
            </div>
              <img className="projImg" alt="project" src={Project2} />
          </div>
        </div>


        <div className="thirdProjectBackground">
          <div className="projCont">
            <div className="Titles">
             <p className="projectTitles">Snoopie</p>
             <p>An app designed for developers to practice their skills, tract their progress and learn new skills</p>
            </div>
              <img className="projImg" alt="project" src={Project3} />
          </div>
        </div>


        <div className="fourthProjectBackground">
          <div className="projCont">
            <div className="Titles">
              <p className="projectTitles">Work Day <br /> Scheduler</p>
              <p>An app designed for developers to practice their skills, tract their progress and learn new skills</p>
            </div>
              <img className="projImg" alt="project" src={Project4} />
          </div>
        </div>

    </div>
  );
}

export default Work;
