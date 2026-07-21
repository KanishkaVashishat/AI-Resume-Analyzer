import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import "../styles/CopyButton.css";

function CopyButton({ result }) {
  const handleCopy = async () => {
    const text = `
AI Resume Analysis

ATS Score: ${result.ats_score}%

Summary:
${result.summary}

Skills Found:
${result.skills_found.join(", ")}

Missing Skills:
${result.missing_skills.join(", ") || "None"}

Strengths:
${result.strengths.map((s) => `• ${s}`).join("\n")}

Weaknesses:
${result.weaknesses.map((w) => `• ${w}`).join("\n")}

Suggestions:
${result.suggestions.map((s) => `• ${s}`).join("\n")}
`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Analysis copied!");
    } catch {
      toast.error("Failed to copy.");
    }
  };

  return (
    <button className="copy-btn" onClick={handleCopy}>
      <FaCopy />
      <span>Copy Analysis</span>
    </button>
  );
}

export default CopyButton;