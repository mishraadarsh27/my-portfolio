import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Per-project gradient + hover glow (keyed by project name for precision)
const PROJECT_STYLES = {
  "MediParse AI": {
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    glow: "0 0 20px #0f3460"
  },
  "Safe Transit": {
    gradient: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 50%, #2d5a27 100%)",
    glow: "0 0 20px #2d5a27"
  },
  "Monad Polls": {
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #6c63ff 100%)",
    glow: "0 0 20px #6c63ff"
  }
};

function getProjectStyle(projectName) {
  return PROJECT_STYLES[projectName] || {
    gradient: "linear-gradient(135deg, #1a1a2e, #4a4a8a)",
    glow: "0 0 20px #6c63ff"
  };
}

const ProjectCard = React.memo(function ProjectCard({project, isDark}) {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const liveDemo = project.footerLink?.find(l =>
    l.name === "Live Demo" || l.name === "Visit Website"
  );
  const githubLink = project.footerLink?.find(l => l.name === "GitHub");

  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.projectName} project screenshot`}
            className="card-image"
            loading="lazy"
          />
        </div>
      ) : (() => {
        const ps = getProjectStyle(project.projectName);
        return (
          <div
            className="project-card-gradient-preview"
            style={{
              background: ps.gradient,
              "--hover-glow": ps.glow
            }}
            aria-hidden="true"
          >
            <span className="project-preview-title">{project.projectName}</span>
          </div>
        );
      })()}

      <div className="project-detail">
        <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h3>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.projectDesc}
        </p>

        {/* Tech Stack Tags */}
        {project.techTags && project.techTags.length > 0 && (
          <div className="project-tech-tags">
            {project.techTags.map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-card-footer">
          {liveDemo && (
            <button
              className="project-btn project-btn-primary"
              onClick={() => openUrlInNewTab(liveDemo.url)}
              aria-label={`Live demo for ${project.projectName}`}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              Live Demo
            </button>
          )}
          {githubLink && (
            <button
              className="project-btn project-btn-secondary"
              onClick={() => openUrlInNewTab(githubLink.url)}
              aria-label={`GitHub repository for ${project.projectName}`}
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main" id="projects" aria-label="Projects">
        <div>
          <h2 className="skills-heading">{bigProjects.title}</h2>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <ProjectCard key={i} project={project} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
