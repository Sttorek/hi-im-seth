import React from "react";
// import Picture from "../images/profilePic.jpg";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ns51q9",
        "template_pjuscog",
        e.target,
        "user_wr8XmGykrVR7pFkzOtLNc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="contactBox">
        <h1 className="contactTitle">Let's Talk</h1>

        <form className="contact-form" onSubmit={sendEmail}>
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
