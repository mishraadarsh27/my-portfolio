import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

/* ── Competitive Programming data ── */
const cpProfiles = [
  {
    platform: "LeetCode",
    icon: "fas fa-code",
    rating: "1596",
    solved: "275",
    rank: "208,004 (Global)",
    profileLink: "https://leetcode.com/i_adarshmishra",
    accentColor: "#ffa116"
  },
  {
    platform: "GeeksforGeeks",
    icon: "fas fa-laptop-code",
    rating: "—",
    solved: "295",
    rank: "53 (Institute Rank)",
    profileLink: "https://auth.geeksforgeeks.org/user/adarsh22mishra",
    accentColor: "#2db55c"
  },
  {
    platform: "CodeChef",
    icon: "fas fa-fire",
    rating: "—",
    solved: "—",
    rank: "—",
    profileLink: "https://www.codechef.com/users/adarshmishra27",
    accentColor: "#5b4638"
  }
];

/* ── Certifications data ── */
const certifications = [
  {
    name: "Java Full Stack Development",
    org: "EduSkills (AICTE Certified)",
    year: "2024",
    certUrl: "",
    icon: "fas fa-certificate"
  },
  {
    name: "AI Foundation",
    org: "Oracle",
    year: "2024",
    certUrl: "",
    icon: "fas fa-robot"
  },
  {
    name: "Programming in Java (Elite)",
    org: "NPTEL",
    year: "2024",
    certUrl: "",
    icon: "fas fa-award"
  },
  {
    name: "Junior Cybersecurity Analyst",
    org: "Cisco",
    year: "2024",
    certUrl: "",
    icon: "fas fa-shield-alt"
  }
];

/* ── Hackathons & Competitions data ── */
const hackathons = [
  {
    event: "Monad Hackathon",
    achievement: "Finalist",
    year: "2024",
    desc: "Built a decentralized polling platform on the Monad blockchain with real-time result aggregation."
  },
  {
    event: "Smart India Hackathon (SIH)",
    achievement: "Institute-Level Qualifier",
    year: "2024",
    desc: "Developed an AI-powered transit safety solution selected at the institute level."
  },
  {
    event: "GeeksforGeeks Coding Contest",
    achievement: "Institute Rank #53",
    year: "2024",
    desc: "Secured a top institute ranking through consistent competitive programming performance."
  }
];

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }

  const cardBg = isDark ? "#1a1f2e" : "#ffffff";
  const textColor = isDark ? "#e0e0e0" : "#1a1a2e";
  const subtitleColor = isDark ? "#a0a0b0" : "#666";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const sectionBg = isDark ? "#0d1117" : "#f8f9ff";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements" style={{background: sectionBg, minHeight: "100vh", paddingBottom: "60px"}}>

        {/* ── Page Title ── */}
        <div className="achievement-header-block">
          <h1 className={isDark ? "dark-mode heading achievement-heading" : "heading achievement-heading"}>
            {achievementSection.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle achievement-subtitle" : "subTitle achievement-subtitle"}>
            {achievementSection.subtitle}
          </p>
        </div>

        {/* ── SECTION 1: Existing Certificate Cards ── */}
        <div className="ach-section">
          <h2 className="ach-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-trophy" /> Certifications
          </h2>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>

        {/* ── SECTION 2: Competitive Programming Stats ── */}
        <div className="ach-section">
          <h2 className="ach-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-code" /> Competitive Programming Stats
          </h2>
          <div className="cp-cards-grid">
            {cpProfiles.map((cp, i) => (
              <a
                key={i}
                href={cp.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card"
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderLeft: `4px solid ${cp.accentColor}`
                }}
              >
                <div className="cp-card-top">
                  <span className="cp-platform-name" style={{color: cp.accentColor}}>
                    {cp.platform}
                  </span>
                  <i className={cp.icon + " cp-platform-icon"} style={{color: cp.accentColor}} />
                </div>
                <div className="cp-stats-row">
                  <div className="cp-stat">
                    <span className="cp-stat-label" style={{color: subtitleColor}}>Solved</span>
                    <span className="cp-stat-value" style={{color: textColor}}>{cp.solved}</span>
                  </div>
                  <div className="cp-stat">
                    <span className="cp-stat-label" style={{color: subtitleColor}}>Rating</span>
                    <span className="cp-stat-value" style={{color: "#6c63ff"}}>{cp.rating}</span>
                  </div>
                  <div className="cp-stat">
                    <span className="cp-stat-label" style={{color: subtitleColor}}>Rank</span>
                    <span className="cp-stat-value cp-rank-val" style={{color: textColor}}>{cp.rank}</span>
                  </div>
                </div>
                <div className="cp-view-label" style={{color: cp.accentColor}}>
                  View Profile →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: Detailed Certifications ── */}
        <div className="ach-section">
          <h2 className="ach-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-medal" /> Certification Details
          </h2>
          <div className="cert-cards-grid">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-card"
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`
                }}
              >
                <div className="cert-icon-wrap">
                  <i className={cert.icon + " cert-icon"} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name" style={{color: textColor}}>{cert.name}</h4>
                  <p className="cert-org" style={{color: subtitleColor}}>{cert.org}</p>
                  <span className="cert-year" style={{color: "#6c63ff"}}>{cert.year}</span>
                </div>
                {cert.certUrl && (
                  <a
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Hackathons & Competitions ── */}
        <div className="ach-section">
          <h2 className="ach-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-rocket" /> Hackathons &amp; Competitions
          </h2>
          <div className="hackathon-timeline">
            {hackathons.map((h, i) => (
              <div
                key={i}
                className="hackathon-item"
                style={{borderLeft: "3px solid #6c63ff"}}
              >
                <div className="hackathon-dot" />
                <div className="hackathon-content" style={{background: cardBg, border: `1px solid ${borderColor}`}}>
                  <div className="hackathon-top">
                    <h4 className="hackathon-event" style={{color: textColor}}>{h.event}</h4>
                    <span className="hackathon-year" style={{color: subtitleColor}}>{h.year}</span>
                  </div>
                  <span className="hackathon-achievement">{h.achievement}</span>
                  <p className="hackathon-desc" style={{color: subtitleColor}}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Fade>
  );
}
