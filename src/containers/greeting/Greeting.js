import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* ONE h1 per page — hero section only */}
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-role-badge">
                <i className="fab fa-python" aria-hidden="true"></i>
                {" "}&nbsp;Python Web Developer &amp; React.js Specialist
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <a
                  className="main-button contact-btn"
                  href="#contact"
                  aria-label="Contact Adarsh Kumar"
                >
                  Contact Me
                </a>
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-button resume-btn"
                    aria-label="Download Adarsh Kumar's Resume"
                  >
                    <i className="fas fa-download" aria-hidden="true"></i>
                    {" "}Download Resume
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="Adarsh Kumar — Full Stack Developer working at a computer"
                src={require("../../assets/images/manOnTable.svg")}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
