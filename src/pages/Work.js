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
            <p className="projectDesc">
              An app designed for developers to practice their skills, tract
              their progress and learn new skills as well.
            </p>
          </div>
          <a target="blank" href="https://thawing-shelf-99876.herokuapp.com/">
            <img className="projImg" alt="project" src={Project1} />
          </a>
        </div>
      </div>

      <div className="secondProjectBackground">
        <div className="projCont">
          <div className="Titles">
            <p className="projectTitles">Home Route</p>
            <p className="projectDesc">
              Designed to make it easier a company or individual to keep track
              of their properties, tenants, and more.
            </p>
          </div>
          <a
            target="blank"
            href="https://hidden-scrubland-47296.herokuapp.com/"
          >
            <img className="projImg" alt="project" src={Project2} />
          </a>
        </div>
      </div>

      <div className="thirdProjectBackground">
        <div className="projCont">
          <div className="Titles">
            <p className="projectTitles">Snoopie</p>
            <p className="projectDesc">
              Thinking of adopting a pet? You can now search around your area
              for shelters through third party APIs to <br /> find the right
              animal for you.
            </p>
          </div>
          <a target="blank" href="https://sttorek.github.io/snoopie/">
            <img className="projImg" alt="project" src={Project3} />
          </a>
        </div>
      </div>

      <div className="fourthProjectBackground">
        <div className="projCont">
          <div className="Titles">
            <p className="projectTitles">
              Work Day <br /> Scheduler
            </p>
            <p className="projectDesc">
              Created so that you may never miss another meeting or get off
              track. Always be organized and ready for <br />
              the day.
            </p>
          </div>
          <a
            target="blank"
            href="https://sttorek.github.io/Workday-Scheduler-ST/"
          >
            <img className="projImg" alt="project" src={Project4} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
