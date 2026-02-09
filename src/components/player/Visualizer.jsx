import React from "react";
import "../../css/footer/Visualizer.css";

const Visualizer = ({ isPlaying }) => {
  // Create 5 animated bars with staggered delays
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="visualizer-container">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`visualizer-bar ${isPlaying ? "playing" : ""}`}
          style={{ animationDelay: `${bar * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
