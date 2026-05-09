import React, {useContext} from "react";
import "./SkillChips.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const SkillChip = React.memo(function SkillChip({skill, color}) {
  return (
    <span
      className="skill-chip"
      style={{"--chip-color": color}}
      title={skill.name}
    >
      <i className={skill.icon} aria-hidden="true"></i>
      {skill.name}
    </span>
  );
});

const SkillGroup = React.memo(function SkillGroup({group}) {
  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <i className={group.icon} style={{color: group.color}} aria-hidden="true"></i>
        <h3 className="skill-group-title" style={{color: group.color}}>
          {group.category}
        </h3>
      </div>
      <div className="skill-chips-row">
        {group.skills.map((skill, idx) => (
          <SkillChip key={idx} skill={skill} color={group.color} />
        ))}
      </div>
    </div>
  );
});

export default function SkillChips() {
  const {isDark} = useContext(StyleContext);

  if (!techStack.skillGroups) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className={isDark ? "dark-mode skill-chips-section" : "skill-chips-section"}
        id="skill-chips"
        aria-label="Technical Skills"
      >
        <h2 className="skill-chips-main-title">Skills &amp; Technologies</h2>
        <div className="skill-groups-grid">
          {techStack.skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} />
          ))}
        </div>
      </section>
    </Fade>
  );
}
