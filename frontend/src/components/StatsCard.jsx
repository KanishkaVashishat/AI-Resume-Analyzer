import "../styles/StatsCard.css";

function StatsCard({ title, value, color }) {
  return (
    <div className="stats-card">
      <p
        className="stats-title"
        style={{ color }}
      >
        {title}
      </p>

      <h2>{value}</h2>
    </div>
  );
}

export default StatsCard;