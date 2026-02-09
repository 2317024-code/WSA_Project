import React from "react";
import { FaMusic, FaClock, FaFire } from "react-icons/fa";
import "../../css/common/Statistics.css";

const Statistics = ({ songs, favorites }) => {
  const totalSongs = songs.length;
  const totalFavorites = favorites.length;
  const totalDuration = songs.reduce((acc, song) => {
    const [minutes, seconds] = song.duration.split(".").map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="statistics-container">
      <div className="stats-card">
        <div className="stats-icon">
          <FaMusic />
        </div>
        <div className="stats-content">
          <p className="stats-label">Total Songs</p>
          <p className="stats-value">{totalSongs}</p>
        </div>
      </div>

      <div className="stats-card">
        <div className="stats-icon">
          <FaFire />
        </div>
        <div className="stats-content">
          <p className="stats-label">Favorites</p>
          <p className="stats-value">{totalFavorites}</p>
        </div>
      </div>

      <div className="stats-card">
        <div className="stats-icon">
          <FaClock />
        </div>
        <div className="stats-content">
          <p className="stats-label">Total Duration</p>
          <p className="stats-value">{formatTime(totalDuration)}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
