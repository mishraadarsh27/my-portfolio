import React, {useContext, useRef, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const formRef = useRef(null);
  const [formState, setFormState] = useState({name: "", email: "", message: ""});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      // EmailJS integration — replace with your own service/template/public key
      // Install: npm install @emailjs/browser
      // const emailjs = await import("@emailjs/browser");
      // await emailjs.sendForm(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   formRef.current,
      //   "YOUR_PUBLIC_KEY"
      // );
      // Simulate success for now — replace with the lines above once EmailJS is configured
      await new Promise(res => setTimeout(res, 1200));
      setStatus("success");
      setFormState({name: "", email: "", message: ""});
    } catch {
      setStatus("error");
    }
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <h2 className="heading contact-title">{contactInfo.title}</h2>
        <p
          className={
            isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"
          }
        >
          {contactInfo.subtitle}
        </p>

        <div className="contact-div-main">
          {/* Left — quick info + social */}
          <div className="contact-header">
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                    aria-label={`Call Adarsh at ${contactInfo.number}`}
                  >
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    {contactInfo.number}
                  </a>
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
                aria-label={`Email Adarsh at ${contactInfo.email_address}`}
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                {contactInfo.email_address}
              </a>
              <br /><br />
              {contactInfo.whatsapp_link && (
                <a
                  className="contact-detail contact-whatsapp"
                  href={contactInfo.whatsapp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Adarsh on WhatsApp"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  Chat on WhatsApp
                </a>
              )}

              {/* Social icon buttons with hover */}
              <div className="contact-social-icons">
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn github-btn"
                  aria-label="Visit Adarsh's GitHub profile"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                  GitHub
                </a>
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn linkedin-btn"
                  aria-label="Visit Adarsh's LinkedIn profile"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  LinkedIn
                </a>
              </div>

              <SocialMedia />
            </div>
          </div>

          {/* Right — contact form */}
          <div className="contact-form-div">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={isDark ? "dark-mode contact-form" : "contact-form"}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Adarsh Kumar"
                  className="form-input"
                  aria-required="true"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="form-input"
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or say hi!"
                  className="form-input form-textarea"
                  aria-required="true"
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={status === "sending"}
                aria-label="Send message to Adarsh Kumar"
              >
                {status === "sending" ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="form-success" role="status">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  {" "}Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-error" role="alert">
                  <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  {" "}Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
