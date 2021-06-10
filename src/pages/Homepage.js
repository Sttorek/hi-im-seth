import React from "react";
import Picture from "../images/profilePic.jpg";

function Homepage() {
  return (
    <div>
      <div className="introCont">
        <div>
          <div className='animate__animated animate__fadeInLeft'>
            <p className="hi"> Hi, I'm Seth</p>
          </div>
          <div className="position animate__animated animate__fadeInLeft animate__delay-1s">
            <p>Full-Stack Web Developer</p>
          </div>
          <div>
            <p  className="facts animate__animated animate__fadeInUpBig animate__delay-2s">Always Adding skills to the arsenal.</p>
            <br />
            <p  className="facts animate__animated animate__fadeInUpBig animate__delay-3s">Committing to the challenges in front of me.</p>
            <br />
            <p  className="facts animate__animated animate__fadeInUpBig animate__delay-4s">Pushing to be the best.</p>
            <br />
            <p  className="facts animate__animated animate__fadeInUpBig animate__delay-5s">Highly motivated and ready to Deploy.</p>
          </div>
        </div>
        <div id="circle">
          <img id="profile-pic" alt="profile pic" src={Picture} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
