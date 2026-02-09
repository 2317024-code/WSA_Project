import React from "react";
import logo from "../../assets/logo.png";
import "../../css/songs/SongGrid.css";

const SongGrid = ({ songs }) => {
  return (
    <div className="songgrid-root">
      {songs.map((song) => (
        <div key={song.id} className="songgrid-card">
          <div className="songgrid-image-wrapper">
            <img src={logo} alt={song.name} className="songgrid-image" />
          </div>
          <div className="songgrid-info">
            <h3 className="songgrid-title">{song.name}</h3>
            <p className="songgrid-artist">{song.artist_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongGrid;
