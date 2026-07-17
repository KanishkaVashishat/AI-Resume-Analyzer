import { useRef } from "react";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import "../styles/UploadCard.css";

function UploadCard({
  file,
  setFile,
  jobDescription,
  setJobDescription,
  handleSubmit,
  loading,
}) {
  const fileInputRef = useRef();

  return (
    <form className="upload-card" onSubmit={handleSubmit}>

      <h2>Upload Resume</h2>

      <p className="subtitle">
        Upload your resume and compare it with any job description using AI.
      </p>

      <div
        className="upload-box"
        onClick={() => fileInputRef.current.click()}
      >
        <FaCloudUploadAlt className="upload-icon" />

        <h3>Click to Upload PDF</h3>

        <p>Maximum file size: 5MB</p>

        <input
          type="file"
          accept=".pdf"
          hidden
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      {file && (
        <div className="selected-file">
          <FaFilePdf />
          <span>{file.name}</span>
        </div>
      )}

      <div className="input-group">
        <label>Job Description</label>

        <textarea
          placeholder="Paste the complete job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

    </form>
  );
}

export default UploadCard;