import React, { useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const Contact = ({}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    fetch("https://formcarry.com/s/FHe5ZDWrwzW", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="contactbox" id="contact">
      <text className="contacttitle">Contact Me</text>
      <form onSubmit={(e) => onSubmit(e)} className="formarea">
        <label htmlFor="email" className="contactpara">
          Email
        </label>
        <input
          className={`textarea email`}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message" className="contactpara">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
        />
      </form>
      <button
        type="submit"
        className="submitbutton"
        onClick={(e) => onSubmit(e)}
      >
        Send
      </button>
    </div>
  );
};

/*  <text className="contactpara">
        Email:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=goh_min_wen_ted@s2022.ssts.edu.sg&subject=MISSED%20CALL%20EZTRADER&body="
        >
          goh_min_wen_ted@s2022.ssts.edu.sg
        </a>
      </text>*/
