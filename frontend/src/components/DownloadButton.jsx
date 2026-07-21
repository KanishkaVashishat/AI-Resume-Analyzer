import "../styles/DownloadButton.css";

function DownloadButton() {

  const handleDownload = () => {
    window.open(
      "http://127.0.0.1:8000/download-report",
      "_blank"
    );
  };

  return (
    <button
      className="download-btn"
      onClick={handleDownload}
    >
      📄 Download Report
    </button>
  );
}

export default DownloadButton;