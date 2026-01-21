import React from "react";
import { GiPauseButton } from "react-icons/gi";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import "../../css/footer/ControlArea.css";

const ControlArea = ({
  playerState,
  onPlayNext,
  onPlayPrevious,
  onPlayToggle,
  onTimeChange,
}) => {
  const isPlaying = playerState?.isPlaying || false;
  const currentTime = playerState?.currentTime || 0;
  const duration = playerState?.duration || 180;
  return (
    <div className="control-root">
      {/* Control Buttons */}
      <div className="control-buttons">
        <button
          type="button"
          aria-label="previous"
          className="control-icon-btn"
          onClick={onPlayPrevious}
        >
          <TbPlayerTrackPrevFilled color="#a855f7" size={24} />
        </button>
        <button
          type="button"
          aria-label="play"
          className="control-play-btn"
          onClick={onPlayToggle}
        >
          {isPlaying ? (
            <GiPauseButton color="#a855f7" size={42} />
          ) : (
            <FaCirclePlay color="#a855f7" size={42} />
          )}
        </button>

        <button
          type="button"
          aria-label="next"
          className="control-icon-btn"
          onClick={onPlayNext}
        >
          <TbPlayerTrackNextFilled color="#a855f7" size={24} />
        </button>
        <button type="button" aria-label="like" className="control-icon-btn">
          <FaRegHeart color="#a855f7" size={22} />
        </button>
      </div>

      <div className="control-progress-wrapper">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={(e) => onTimeChange && onTimeChange(Number(e.target.value))}
          className="control-progress"
        />
        <div className="control-times">
          <span>{(currentTime / 60).toFixed(2)}</span>
          <span>{(duration / 60).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlArea;
