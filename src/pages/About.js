import React from "react";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <div>
      <div className="about-me">
        <div className="descCont">
          <p className="about-title">Get To Know Me</p>
          <p className="story">
            In 2017 I became a Telecommunications Tower Technician for Summitt
            Cellular Inc. and after three years in the field I felt as though I
            wasn't living up to my full potential even though I had accomplished
            a lot in what most would say was a "successful" career. So I chose
            to do something about it. I enrolled in Georgia Tech's Full-Stack
            Web Development program and I can honestly say that it was the best
            decision I have ever made and I can't wait to see where this path
            takes me. Waking up every day and doing what you love in my opinion
            is very much underrated and I feel blessed to be able to impact the
            world in a positive environment.
          </p>
        </div>
        <div className="socialLinkCont">
          <div className="basicCont">
            <p className="checkOut">Check Me Out</p>
            <div className="linkCont">
              <i className="lin dropdown fas fa-phone-volume fa-2x">
                <p className="dropdown-content">706.308.8557</p>
              </i>
            
              <a target="blank" href={resume}>
                <i className="lin fas fa-file-alt fa-2x"></i>
              </a>
              <a target="blank" href="https://github.com/Sttorek">
                <i className="lin fab fa-github-square fa-2x"></i>
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/seth-torek-5211b1201/"
              >
                <i class="lin icon fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <i class="animate__animated animate__bounceInDown animate__delay-2s arrow fas fa-chevron-down fa-3x"></i>
      </div>

      {/* --------------------------------------- */}
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
          <div className="carousel__face">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
