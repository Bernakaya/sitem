import React from 'react';
import './SkillBar.css';

const SkillBar = ({ title, percentage, color }) => {
  return (
    <div className="skill">
      <div className="skill-title">{title}</div>
      <div className="skill-bar">
        <div className="skill-level" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      </div>
      <div className="skill-percentage">{percentage}%</div>
    </div>
  );
};

export default SkillBar;
