import {
  FaRobot,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import "../styles/Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <FaRobot className="robot-icon" />

      <h2>AI is analyzing your resume...</h2>

      <p className="loading-subtitle">
        Please wait while we compare your resume with the job description.
      </p>

      <div className="loading-steps">

        <div className="step completed">
          <FaCheckCircle />
          <span>Resume uploaded successfully</span>
        </div>

        <div className="step completed">
          <FaCheckCircle />
          <span>Extracting text from PDF</span>
        </div>

        <div className="step active">
          <FaSpinner className="spin" />
          <span>Matching resume with job description</span>
        </div>

        <div className="step pending">
          <span>⏳</span>
          <span>Calculating ATS Score</span>
        </div>

        <div className="step pending">
          <span>⏳</span>
          <span>Generating AI Suggestions</span>
        </div>

      </div>

    </div>
  );
}

export default Loading;