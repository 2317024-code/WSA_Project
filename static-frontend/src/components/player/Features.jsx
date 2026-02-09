import React, { useState } from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";

import "../../css/footer/Feature.css";

const Features = ({ playerState, onVolumeChange, onSpeedChange, onToggleShuffle, onToggleLoop }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(playerState.volume);

  const { volume, playbackSpeed, shuffleEnabled, loopMode } = playerState;

  const handleMute = () => {
    if (isMuted) {
      // Unmute
      onVolumeChange(previousVolume);
      setIsMuted(false);
    } else {
      // Mute
      setPreviousVolume(volume);
      onVolumeChange(0);
      setIsMuted(true);
    }
  };

  const handleVolume = (newVolume) => {
    onVolumeChange(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="features-root">
      <div className="features-row">
        {/* Mute */}
        <button className="features-btn" aria-label="mute" onClick={handleMute}>
          {isMuted || volume === 0 ? (
            <IoVolumeMuteOutline color="#a855f7" size={26} />
          ) : (
            <IoVolumeHighOutline color="#a855f7" size={26} />
          )}
        </button>

        {/* Shuffle */}
        <button
          className="features-btn"
          aria-label="shuffle"
          onClick={onToggleShuffle}
        >
          <TbArrowsShuffle
            color={shuffleEnabled ? "#a855f7" : "#9ca3af"}
            size={26}
          />
        </button>

        {/* Loop */}
        <button
          className="features-btn"
          aria-label="loop"
          onClick={onToggleLoop}
          title={loopMode === 0 ? "No loop" : loopMode === 1 ? "Loop all" : "Loop one"}
        >
          <RiLoopRightLine
            color={loopMode > 0 ? "#a855f7" : "#9ca3af"}
            size={26}
          />
          {loopMode === 2 && <span className="loop-indicator">1</span>}
        </button>

        {/* Playback Speed */}
        <label className="features-speed-label">
          <select
            className="features-speed-select"
            value={playbackSpeed}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              console.debug("Features: speed select changed to", val);
              onSpeedChange(val);
            }}
          >
            <option value={0.5}>0.5x</option>
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.25}>1.25x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </label>
      </div>

      {/* Volume */}
      <div className="features-volume-wrapper">
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => handleVolume(parseFloat(e.target.value))}
          className="features-volume-range"
        />
      </div>
    </div>
  );
};

export default Features;
