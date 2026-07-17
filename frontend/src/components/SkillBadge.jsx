import "../styles/SkillBadge.css";

function SkillBadge({ skill, type }) {
  return (
    <span className={`skill-badge ${type}`}>
      {skill}
    </span>
  );
}

export default SkillBadge;