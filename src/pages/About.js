import React from "react";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import about3 from "../images/about3.jpeg";
import about4 from "../images/about4.jpeg";
import about5 from "../images/about5.jpg";
import about6 from "../images/about6.jpeg";
import about7 from "../images/about7.jpeg";
import about8 from "../images/about8.jpeg";

function About() {
  return (
    <div>
      <div className="about-me">

        <div className='descCont'>
            <p className="about-title">Get to know me</p>
            <p className='story'>
            In 2017 I became a Telecommunications Tower Technician for Summitt
            Cellular Inc. and after three years in the field I felt as though I
            wasn't living up to my full potential even though I had accomplished a
            lot in what most would say was a "successful" career. So I chose to do
            something about it. I enrolled in Georgia Tech's Full-Stack Web
            Development program and I can honestly say that it was the best
            decision I have ever made and I can't wait to see where this path
            takes me. Waking up every day and doing what you love in my opinion is
            very much underrated and I feel blessed to be able to impact the world
            in a positive environment.
            </p>
        </div>

        <div className='mainImgCont'>
            <img className='aboutMainImg' alt="tower-pic" src={about2} />
        </div>

      </div>
      <div className="aboutImgCont">
        <img className="aboutImages" alt="tower-pic" src={about1} />
        
        <img className="aboutImages" alt="tower-pic" src={about3} />
        <img className="aboutImages" alt="tower-pic" src={about4} />
        <img className="aboutImages" alt="tower-pic" src={about5} />
        <img className="aboutImages" alt="tower-pic" src={about6} />
        <img className="aboutImages" alt="tower-pic" src={about7} />
        <img className="aboutImages" alt="tower-pic" src={about8} />
      </div>
    </div>
  );
}

export default About;
