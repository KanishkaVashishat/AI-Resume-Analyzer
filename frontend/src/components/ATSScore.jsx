import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/ATSScore.css";

function ATSScore({ score }) {

  let label = "";
  let color = "";

  if (score >= 85) {
    label = "Excellent Match";
    color = "#22C55E";
  } else if (score >= 70) {
    label = "Good Match";
    color = "#3B82F6";
  } else if (score >= 50) {
    label = "Average Match";
    color = "#F59E0B";
  } else {
    label = "Needs Improvement";
    color = "#EF4444";
  }

  return (
    <div className="score-card">

      <h3>ATS Score</h3>

      <div className="progress-wrapper">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: "#1E293B",
            trailColor: "#E2E8F0",
            textSize: "16px",
          })}
        />

      </div>

      <h4 style={{ color }}>{label}</h4>

      <p>
        This score estimates how well your resume matches the job description.
      </p>

    </div>
  );
}

export default ATSScore;