import "../styles/FileDropZone.css";
function FileDropZone({ file, setFile }) {

  const handleDrop = (e) => {
    e.preventDefault();

    const uploadedFile = e.dataTransfer.files[0];

    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="drop-zone"
    >
      {file ? (
        <>
          <h3>📄 {file.name}</h3>
          <p>{(file.size / 1024).toFixed(2)} KB</p>

          <button
            type="button"
            onClick={() => setFile(null)}
          >
            Remove
          </button>
        </>
      ) : (
        <>
          <h2>📄</h2>
          <p>Drag & Drop Resume Here</p>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </>
      )}
    </div>
  );
}

export default FileDropZone;