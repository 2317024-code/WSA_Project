import React from "react";

import SongDetail from "../player/SongDetail";
import ControlArea from "../player/ControlArea";
import Features from "../player/Features";

import "../../css/footer/Footer.css";

const Footer = ({
  playerState,
  onPlayPause,
  onNextSong,
  onPreviousSong,
  onProgressChange,
  onVolumeChange,
  onSpeedChange,
  onToggleShuffle,
  onToggleLoop,
  onToggleLike,
}) => {
  return (
    <footer className="footer-root footer-glow">
      <SongDetail currentSong={playerState.currentSong} />
      <ControlArea
        playerState={playerState}
        onPlayPause={onPlayPause}
        onNextSong={onNextSong}
        onPreviousSong={onPreviousSong}
        onProgressChange={onProgressChange}
      />
      <Features
        playerState={playerState}
        onVolumeChange={onVolumeChange}
        onSpeedChange={onSpeedChange}
        onToggleShuffle={onToggleShuffle}
        onToggleLoop={onToggleLoop}
      />
    </footer>
  );
};

export default Footer;
