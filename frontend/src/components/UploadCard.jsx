
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import "../styles/UploadCard.css";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

function UploadCard({
  file,
  setFile,
  jobDescription,
  setJobDescription,
  handleSubmit,
  loading,
}) {
  const fileInputRef = useRef();

  const handleFile = (selectedFile) => {
  if (!selectedFile) return;

  if (selectedFile.type !== "application/pdf") {
    toast.error("Please upload only PDF files.");
    return;
  }

  if (selectedFile.size > 5 * 1024 * 1024) {
    toast.error("File size should be less than 5MB.");
    return;
  }

  setFile(selectedFile);
};

const [dragActive, setDragActive] = useState(false);

const handleDrop = (e) => {
  e.preventDefault();
  setDragActive(false);

  const droppedFile = e.dataTransfer.files[0];
  handleFile(droppedFile);
};

const handleDragOver = (e) => {
  e.preventDefault();
  setDragActive(true);
};

const handleDragLeave = () => {
  setDragActive(false);
};

  return (
    <form className="upload-card" onSubmit={handleSubmit}>

      <h2>Upload Resume</h2>

      <p className="subtitle">
        Upload your resume and compare it with any job description using AI.
      </p>

      <div
  className={`upload-box ${dragActive ? "drag-active" : ""}`}
  onClick={() => fileInputRef.current.click()}
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
>
        <FaCloudUploadAlt className="upload-icon" />

        <h3>Drag & Drop your Resume</h3>

<p>or click to browse</p>

<p>PDF only • Maximum 5MB</p>

        <p>Maximum file size: 5MB</p>

        <input
    type="file"
    accept=".pdf"
    hidden
    ref={fileInputRef}
    disabled={loading}
    onChange={(e)=>handleFile(e.target.files[0])}
/>
      </div>

     {file && (
  <div className="selected-file">
    <FaFilePdf />

    <div>
      <strong>{file.name}</strong>
      <p>{(file.size / 1024).toFixed(2)} KB</p>
    </div>

    <button
  type="button"
  className="remove-file"
  onClick={() => setFile(null)}
>
  <FaTimes />
</button>
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