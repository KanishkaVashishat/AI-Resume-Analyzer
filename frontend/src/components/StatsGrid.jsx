import StatsCard from "./StatsCard";
import "../styles/StatsGrid.css";

function StatsGrid({ result }) {
  return (
    <div className="stats-grid">

      <StatsCard
        title="ATS Score"
        value={`${result.ats_score}%`}
        color="#3B82F6"
      />

      <StatsCard
        title="Skills Found"
        value={result.skills_found.length}
        color="#22C55E"
      />

      <StatsCard
        title="Missing Skills"
        value={result.missing_skills.length}
        color="#F97316"
      />

      <StatsCard
        title="Suggestions"
        value={result.suggestions.length}
        color="#8B5CF6"
      />

    </div>
  );
}

export default StatsGrid;