import React from "react";

function About() {
  return (
    <div>
      <div className="about-me">
        <div className="descCont">
          <p className="about-title">Get to know me</p>
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
              <i class=" lin fas fa-phone fa-2x"></i>
              <i class="lin fas fa-envelope fa-2x"></i>
              <i class="lin fas fa-file-alt fa-2x"></i>
              <i class="lin fab fa-github-square fa-2x"></i>
              <i class="lin fab fa-facebook-square fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- */}
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
          <div class="carousel__face">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
