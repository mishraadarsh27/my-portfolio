import React, {useContext, useState, useEffect} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  competitiveProgramming,
  resumeSection
} from "../../portfolio";

import {NavLink, Link} from "react-router-dom";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav("skills");
          } else {
            setActiveNav("");
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewCompetitiveProgramming = competitiveProgramming.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <NavLink
              to="/"
              activeStyle={{fontWeight: "bold"}}
              exact
            >
              Home
            </NavLink>
          </li>
          {viewSkills && (
            <li>
              <a
                href="#skills"
                style={activeNav === "skills" ? {fontWeight: "bold"} : {}}
              >
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <NavLink
                to="/education"
                activeStyle={{fontWeight: "bold"}}
              >
                Work Experiences
              </NavLink>
            </li>
          )}
          {viewAchievement && (
            <li>
              <NavLink
                to="/achievements"
                activeStyle={{fontWeight: "bold"}}
              >
                Achievements
              </NavLink>
            </li>
          )}
          {viewCompetitiveProgramming && (
            <li>
              <NavLink
                to="/coding-stats"
                activeStyle={{fontWeight: "bold"}}
              >
                Coding Stats
              </NavLink>
            </li>
          )}
          {viewBlog && (
            <li>
              <NavLink
                to="/blogs"
                activeStyle={{fontWeight: "bold"}}
              >
                Blogs
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/contact"
              activeStyle={{fontWeight: "bold"}}
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
