import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import logoImage from "../../assets/logo.png";
import "../../css/songs/SongGrid.css";

const SongGrid = ({ songs, onAddToFavorites, isSongFavorited }) => {
  if (!songs || songs.length === 0) {
    return (
      <div className="songgrid-empty">
        <p className="songgrid-empty-text">💔 No favorite songs yet</p>
        <span className="songgrid-empty-subtext">
          Add songs to your favorites to see them here
        </span>
      </div>
    );
  }

  return (
    <div className="songgrid-root">
      <div className="songgrid-container">
        {songs.map((song) => (
          <div key={song.id} className="songcard-wrapper">
            <div className="songcard-root">
              <div className="songcard-image-container">
                <img
                  src={logoImage}
                  alt={song.name}
                  className="songcard-image"
                />
                <button
                  onClick={() => onAddToFavorites(song)}
                  className="songcard-favorite-btn"
                  aria-label="add to favorites"
                >
                  {isSongFavorited(song.id) ? (
                    <FaHeart color="#a855f7" size={24} />
                  ) : (
                    <FaRegHeart color="#a855f7" size={24} />
                  )}
                </button>
              </div>
              <div className="songcard-content">
                <h3 className="songcard-title">{song.name}</h3>
                <p className="songcard-artist">{song.artist_name}</p>
                <p className="songcard-year">{song.releasedate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongGrid;
