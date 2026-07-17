import { FaRobot } from "react-icons/fa";
import "../styles/Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <div className="spinner"></div>

      <FaRobot className="robot-icon" />

      <h2>Analyzing Resume...</h2>

      <p>
        Our AI is reviewing your resume and comparing it with the job description.
      </p>

      <div className="loading-steps">
        <p>📄 Extracting resume content...</p>
        <p>🧠 Matching skills...</p>
        <p>📊 Calculating ATS score...</p>
        <p>💡 Generating suggestions...</p>
      </div>

    </div>
  );
}

export default Loading;