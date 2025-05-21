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
    
    // Reset states
    setError("");
    setSubmitted(false);
    
    fetch("https://formcarry.com/s/FHe5ZDWrwzW", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSubmitted(true);
          setEmail("");
          setMessage("");
          // Clear the success message after 5 seconds
          setTimeout(() => setSubmitted(false), 5000);
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
      <div className="contacttitle">Contact Me</div>
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
          placeholder="your@email.com"
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
          placeholder="Write your message here..."
        />
        
        {error && <div className="error-message">{error}</div>}
        {submitted && <div className="success-message">Message sent successfully!</div>}
        
        <button
          type="submit"
          className="submitbutton"
          onClick={(e) => onSubmit(e)}
        >
          <i className="fas fa-paper-plane"></i> Send Message
        </button>
      </form>
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
