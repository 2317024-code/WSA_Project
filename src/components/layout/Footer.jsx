import React from "react";

import SongDetail from "../player/SongDetail";
import ControlArea from "../player/ControlArea";
import Features from "../player/Features";

import "../../css/footer/Footer.css";

const Footer = ({
  songs,
  currentSongIndex,
  isPlaying,
  currentTime,
  onPlayNext,
  onPlayPrevious,
  onPlayToggle,
  onTimeChange,
}) => {
  // Get current song from songs array
  const currentSong = songs && songs[currentSongIndex] ? songs[currentSongIndex] : {
    name: "Believer",
    artist_name: "Imagine Dragons",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg",
  };

  const playerState = {
    currentSong: currentSong,
    isPlaying: isPlaying,
    currentTime: currentTime,
    duration: 180,
    volume: 50,
  };

  return (
    <footer className="footer-root footer-glow">
      <SongDetail currentSong={playerState.currentSong} />
      <ControlArea
        playerState={playerState}
        onPlayNext={onPlayNext}
        onPlayPrevious={onPlayPrevious}
        onPlayToggle={onPlayToggle}
        onTimeChange={onTimeChange}
      />
      <Features playerState={playerState} />
    </footer>
  );
};

export default Footer;
