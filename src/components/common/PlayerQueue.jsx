import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import "../../css/common/PlayerQueue.css";

const PlayerQueue = ({ songs, currentSongIndex, isPlaying, onSelectSong }) => {
  const [queue, setQueue] = useState(songs.slice(currentSongIndex));

  useEffect(() => {
    setQueue(songs.slice(currentSongIndex));
  }, [currentSongIndex, songs]);

  if (!songs || songs.length === 0) {
    return (
      <div className="queue-container">
        <div className="queue-empty">
          <FaMusic size={40} />
          <p>Queue is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="queue-container">
      <div className="queue-header">
        <h3>Now Playing Queue</h3>
        <span className="queue-count">{queue.length} songs</span>
      </div>
      <div className="queue-list">
        {queue.map((song, index) => (
          <div
            key={song.id}
            className={`queue-item ${index === 0 ? "active" : ""}`}
            onClick={() => onSelectSong && onSelectSong(currentSongIndex + index)}
          >
            <div className="queue-item-number">
              {index === 0 && isPlaying ? (
                <FaPlay size={12} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="queue-item-info">
              <p className="queue-item-name">{song.name}</p>
              <p className="queue-item-artist">{song.artist_name}</p>
            </div>
            <span className="queue-item-duration">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerQueue;
