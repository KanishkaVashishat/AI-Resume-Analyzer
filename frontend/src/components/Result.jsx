import ATSScore from "./ATSScore";
import SkillBadge from "./SkillBadge";
import "../styles/Result.css";
import StatsGrid from "./StatsGrid";
import DownloadButton from "./DownloadButton";

function Result({ result }) {
  return (
    <div className="result-container">
        <StatsGrid result={result} />
      <ATSScore score={result?.ats_score ?? 0} />

      <div className="result-card">
        <h3>📝 Executive Summary</h3>
        <p>{result?.summary || "No summary available."}</p>
      </div>

      <div className="result-card">
        <h3>✅ Skills Found</h3>

        <div className="skills-container">
          {(result?.skills_found || []).map((skill, index) => (
            <SkillBadge
              key={index}
              skill={skill}
              type="found"
            />
          ))}
        </div>
      </div>

      <div className="result-card">
        <h3>❌ Missing Skills</h3>

        <div className="skills-container">
          {(result?.missing_skills || []).map((skill, index) => (
            <SkillBadge
              key={index}
              skill={skill}
              type="missing"
            />
          ))}
        </div>
      </div>

      <div className="result-card">
        <h3>💪 Strengths</h3>

        <ul className="result-list">
          {(result?.strengths || []).map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      </div>

      <div className="result-card">
        <h3>⚠ Weaknesses</h3>

        <ul className="result-list">
          {(result?.weaknesses || []).map((item, index) => (
            <li key={index}>✖ {item}</li>
          ))}
        </ul>
      </div>

      <div className="result-card">
        <h3>💡 AI Suggestions</h3>

        <ul className="result-list">
          {(result?.suggestions || []).map((item, index) => (
            <li key={index}>🚀 {item}</li>
          ))}
        </ul>
      </div>
        <DownloadButton />
    </div>
  );
}

export default Result;