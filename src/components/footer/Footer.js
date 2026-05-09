import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by")}{" "}
          <a
            href="https://github.com/mishraadarsh27"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#6c63ff", textDecoration: "none", fontWeight: 600}}
            aria-label="Visit Adarsh Kumar's GitHub profile"
          >
            Adarsh Kumar
          </a>
        </p>
      </div>
    </Fade>
  );
}
