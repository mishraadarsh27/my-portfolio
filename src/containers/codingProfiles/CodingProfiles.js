import React, {useContext} from "react";
import "./CodingProfiles.scss";
import {competitiveProgramming} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CodingProfiles() {
  const {isDark} = useContext(StyleContext);
  if (!competitiveProgramming.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="coding-stats">
        <h1 className="coding-stats-title">{competitiveProgramming.title}</h1>
        <p
          className={
            isDark ? "dark-mode coding-stats-subtitle" : "coding-stats-subtitle"
          }
        >
          {competitiveProgramming.subtitle}
        </p>
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
                  <h4 className="section-title">Languages & Topics</h4>
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
    </Fade>
  );
}
