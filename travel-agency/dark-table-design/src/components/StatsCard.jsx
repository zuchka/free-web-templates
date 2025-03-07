import React from "react";

const StatsCard = ({ icon, title, value, color }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <div className="icon-wrapper">{icon}</div>
      </div>
      <div className="stat-info">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
