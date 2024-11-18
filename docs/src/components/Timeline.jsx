import React from "react";
import "./Timeline.css";

const Timeline = ({ items }) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className={`timeline-dot ${item.isActive ? "active" : ""}`}></div>
          <div className="timeline-content">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
