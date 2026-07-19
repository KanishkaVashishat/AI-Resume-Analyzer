import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/ATSScore.css";

function ATSScore({ score }) {
  let label = "";
  let color = "";
  let message = "";

  if (score >= 85) {
    label = "Excellent Match";
    color = "#22C55E";
    message = "Your resume is stronger than most applicants.";
  } else if (score >= 70) {
    label = "Good Match";
    color = "#3B82F6";
    message = "Good match. A few improvements can increase your chances.";
  } else if (score >= 50) {
    label = "Average Match";
    color = "#F59E0B";
    message = "Your resume needs optimization for this role.";
  } else {
    label = "Needs Improvement";
    color = "#EF4444";
    message = "Consider updating your resume before applying.";
  }

  return (
    <div className="score-card">

      <h2>Resume Match Score</h2>

      <p className="score-subtitle">
        AI-powered ATS Compatibility
      </p>

      <div className="progress-wrapper">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: "#0F172A",
            trailColor: "#E5E7EB",
            textSize: "16px",
          })}
        />
      </div>

      <h3 style={{ color }}>{label}</h3>

      <p className="score-message">
        {message}
      </p>

      <div className="score-bar">
        <div
          className="score-fill"
          style={{
            width: `${score}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      <p className="score-description">
        Your ATS score is calculated by comparing your resume with the provided
        job description using AI. It evaluates skills, keywords, experience,
        and overall relevance.
      </p>

    </div>
  );
}

export default ATSScore;