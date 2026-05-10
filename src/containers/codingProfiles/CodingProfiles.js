import React, {useContext} from "react";
import "./CodingProfiles.scss";
import {competitiveProgramming} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const GITHUB_USERNAME = "mishraadarsh27";

export default function CodingProfiles() {
  const {isDark} = useContext(StyleContext);
  if (!competitiveProgramming.display) {
    return null;
  }

  const sectionBg = isDark ? "#0d1117" : "#f8f9ff";
  const cardBg = isDark ? "#1a1f2e" : "#ffffff";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const subtitleColor = isDark ? "#a0a0b0" : "#666";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className="main"
        id="coding-stats"
        style={{background: sectionBg, minHeight: "100vh", paddingBottom: "60px"}}
      >
        {/* ── Page Heading ── */}
        <div className="coding-stats-header-block">
          <h1 className="coding-stats-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            {competitiveProgramming.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode coding-stats-subtitle" : "coding-stats-subtitle"
            }
          >
            {competitiveProgramming.subtitle}
          </p>
        </div>

        {/* ── SECTION 1: Competitive Programming Profile Cards ── */}
        <div className="cs-section">
          <h2 className="cs-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-code" /> Platform Analytics
          </h2>
          <div className="coding-profiles-div">
            {competitiveProgramming.profiles.map((profile, i) => {
              const total = profile.easy + profile.medium + profile.hard;
              const easyP = (profile.easy / total) * 100;
              const mediumP = (profile.medium / total) * 100;
              const hardP = (profile.hard / total) * 100;

              return (
                <div
                  className={
                    isDark
                      ? "dark-mode coding-profile-card"
                      : "coding-profile-card"
                  }
                  key={i}
                >
                  <div className="coding-profile-header">
                    <h2 className="platform-name">{profile.platform}</h2>
                    <a
                      href={profile.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-link-btn"
                    >
                      View Full Stats
                    </a>
                  </div>
                  <div className="coding-profile-stats">
                    <div className="stat-item">
                      <span className="stat-label">Total Solved</span>
                      <span className="stat-value highlight">
                        {profile.solved}
                      </span>
                    </div>
                    {profile.rating && (
                      <div className="stat-item">
                        <span className="stat-label">Contest Rating</span>
                        <span className="stat-value">{profile.rating}</span>
                      </div>
                    )}
                    {profile.score && (
                      <div className="stat-item">
                        <span className="stat-label">Coding Score</span>
                        <span className="stat-value">{profile.score}</span>
                      </div>
                    )}
                    {profile.ranking && (
                      <div className="stat-item">
                        <span className="stat-label">Ranking</span>
                        <span className="stat-value small-text">
                          {profile.ranking}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="analytics-section">
                    <h4 className="section-title">Difficulty Breakdown</h4>
                    <div className="difficulty-stats">
                      <div className="diff-stat easy">
                        <span>Easy</span>
                        <div className="progress-bar">
                          <Fade left duration={1500}>
                            <div
                              className="progress"
                              style={{width: `${easyP}%`}}
                            ></div>
                          </Fade>
                        </div>
                        <span className="count">{profile.easy}</span>
                      </div>
                      <div className="diff-stat medium">
                        <span>Medium</span>
                        <div className="progress-bar">
                          <Fade left duration={1500}>
                            <div
                              className="progress"
                              style={{width: `${mediumP}%`}}
                            ></div>
                          </Fade>
                        </div>
                        <span className="count">{profile.medium}</span>
                      </div>
                      <div className="diff-stat hard">
                        <span>Hard</span>
                        <div className="progress-bar">
                          <Fade left duration={1500}>
                            <div
                              className="progress"
                              style={{width: `${hardP}%`}}
                            ></div>
                          </Fade>
                        </div>
                        <span className="count">{profile.hard}</span>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-section">
                    <h4 className="section-title">Languages &amp; Topics</h4>
                    <div className="topics-div">
                      {profile.topics.map((topic, i) => (
                        <span key={i} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                      {profile.languages.map((lang, i) => (
                        <span key={i} className="lang-tag">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 2: GitHub Stats ── */}
        <div className="cs-section">
          <h2 className="cs-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fab fa-github" /> GitHub Stats
          </h2>
          <div
            className="github-stats-grid"
            style={{borderColor: borderColor}}
          >
            {/* GitHub Stats Card */}
            <div
              className="github-stat-card"
              style={{background: cardBg, border: `1px solid ${borderColor}`}}
            >
              <h4 className="github-card-label" style={{color: subtitleColor}}>
                <i className="fas fa-chart-bar" /> Overview
              </h4>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6c63ff&icon_color=6c63ff`}
                alt="GitHub Stats"
                className="github-stat-img"
              />
            </div>

            {/* Top Languages Card */}
            <div
              className="github-stat-card"
              style={{background: cardBg, border: `1px solid ${borderColor}`}}
            >
              <h4 className="github-card-label" style={{color: subtitleColor}}>
                <i className="fas fa-code" /> Top Languages
              </h4>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6c63ff`}
                alt="Top Languages"
                className="github-stat-img"
              />
            </div>

            {/* GitHub Streak Card — full width */}
            <div
              className="github-stat-card github-stat-card--wide"
              style={{background: cardBg, border: `1px solid ${borderColor}`}}
            >
              <h4 className="github-card-label" style={{color: subtitleColor}}>
                <i className="fas fa-fire" /> Contribution Streak
              </h4>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=0d1117&ring=6c63ff&fire=6c63ff&currStreakLabel=6c63ff`}
                alt="GitHub Streak"
                className="github-stat-img"
              />
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Activity Heatmap ── */}
        <div className="cs-section">
          <h2 className="cs-section-title" style={{color: isDark ? "#a78bfa" : "#6c63ff"}}>
            <i className="fas fa-calendar-alt" /> Coding Activity
          </h2>
          <div
            className="github-stat-card github-heatmap-card"
            style={{background: cardBg, border: `1px solid ${borderColor}`}}
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true&bg_color=0d1117&color=6c63ff&line=6c63ff&point=ffffff`}
              alt="Coding Activity Graph"
              className="github-stat-img github-heatmap-img"
            />
          </div>
        </div>

      </div>
    </Fade>
  );
}
