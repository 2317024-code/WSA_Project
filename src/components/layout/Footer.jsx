import React, { useEffect, useRef } from "react";

import SongDetail from "../player/SongDetail";
import ControlArea from "../player/ControlArea";
import Features from "../player/Features";
import Visualizer from "../player/Visualizer";

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

  // Audio playback: use the provided Believer.mp3 as demo audio
  const audioRef = useRef(null);
  // Resolve asset URL for the MP3 (Vite-friendly)
  let believerSrc = null;
  try {
    // Common location: src/songs/Believer.mp3
    believerSrc = new URL("../../songs/Believer.mp3", import.meta.url).href;
  } catch (e1) {
    try {
      // If the project was nested (static-frontend/static-frontend), try that path
      believerSrc = new URL("../../../static-frontend/src/songs/Believer.mp3", import.meta.url).href;
    } catch (e2) {
      believerSrc = null;
    }
  }

  // Initialize audio element once
  useEffect(() => {
    if (!believerSrc) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(believerSrc);
      audioRef.current.preload = "auto";
    }
    return () => {
      // Don't remove listeners here; keep them persistent
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [believerSrc]);

  // Attach timeupdate listener to sync playback time with parent state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (onTimeChange) {
        onTimeChange(Math.floor(audio.currentTime));
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onTimeChange]);

  // Play/pause when `isPlaying` changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex]);

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
      <Visualizer isPlaying={isPlaying} />
      <Features playerState={playerState} />
    </footer>
  );
};

export default Footer;
