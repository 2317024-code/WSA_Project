import React, { useState, useRef, useEffect } from "react";

import Footer from "../components/layout/Footer";
import SideMenu from "../components/layout/SideMenu";
import MainArea from "../components/layout/MainArea";

import "../css/pages/HomePage.css";
import Believer from "../songs/Believer.mp3";
import logo from "../assets/logo.png";

const Homepage = () => {
  const [view, setView] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffleEnabled, setShuffleEnabled] = useState(false);
  const [loopMode, setLoopMode] = useState(0); // 0: no loop, 1: loop all, 2: loop one
  const [likedSongs, setLikedSongs] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);
  const audioRef = useRef(null);
  
  const songs = [
    {
      id: 1,
      name: "Believer",
      artist_name: "Imagine Dragons",
      image: logo,
      cover: Believer,
      releasedate: "2017-02-01",
      duration: "04.30",
    },
    {
      id: 2,
      name: "Faded",
      artist_name: "Alan Walker",
      image: logo,
      cover: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      releasedate: "2015-12-03",
      duration: "05.30",
    },
    {
      id: 3,
      name: "Shape of You",
      artist_name: "Ed Sheeran",
      image: logo,
      cover: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      releasedate: "2017-03-17",
      duration: "04.32",
    },
  ];

  // Setup audio event listeners and set initial src
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (loopMode === 2) {
        // Loop one song
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNextSong();
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    // set the initial source to the current song
    const displaySongs = view === "search" && searchQuery ? filteredSongs : songs;
    audio.src = displaySongs[currentSongIndex]?.cover;
    audio.preload = "metadata";
    audio.muted = false;

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, loopMode]);

  // Update volume when volume state changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  // Update playback speed
  useEffect(() => {
    if (!audioRef.current) return;
    console.debug("Homepage: applying playbackSpeed", playbackSpeed);
    audioRef.current.playbackRate = playbackSpeed;
    // also set defaultPlaybackRate in case some browsers use it when resuming play
    audioRef.current.defaultPlaybackRate = playbackSpeed;
  }, [playbackSpeed]);

  // Handle play/pause
  const handlePlayPause = async () => {
    const audio = audioRef.current;
    const currentSong = songs[currentSongIndex];

    if (!audio || !currentSong) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      // Always set src for the selected song and ensure it's loaded
      if (audio.src !== currentSong.cover) {
        audio.src = currentSong.cover;
        audio.load();
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio play failed:", err);
      setIsPlaying(false);
    }
  };

  const handleNextSong = async () => {
    const displaySongs = view === "search" && searchQuery ? filteredSongs : songs;
    let nextIndex;
    
    if (shuffleEnabled) {
      // Random song
      nextIndex = Math.floor(Math.random() * displaySongs.length);
    } else {
      // Next song in sequence
      nextIndex = (currentSongIndex + 1) % displaySongs.length;
    }
    
    setCurrentSongIndex(nextIndex);
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = displaySongs[nextIndex].cover;
    audio.load();
    setCurrentTime(0);
    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) await playPromise;
      setIsPlaying(true);
    } catch (err) {
      console.error("Next song play failed:", err);
      setIsPlaying(false);
    }
  };

  const handlePreviousSong = async () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = songs[prevIndex].cover;
    audio.load();
    setCurrentTime(0);
    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) await playPromise;
      setIsPlaying(true);
    } catch (err) {
      console.error("Previous song play failed:", err);
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (newTime) => {
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = songs.filter(
        (song) =>
          song.name.toLowerCase().includes(query.toLowerCase()) ||
          song.artist_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(songs);
    }
  };

  const handleToggleLike = (songId) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(songId)) {
      newLiked.delete(songId);
    } else {
      newLiked.add(songId);
    }
    setLikedSongs(newLiked);
  };

  const getLikedSongs = () => {
    return songs.filter((song) => likedSongs.has(song.id));
  };

  const playerState = {
    currentSong: songs[currentSongIndex],
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackSpeed,
    shuffleEnabled,
    loopMode,
    likedSongs,
  };

  return (
    <div className="homepage-root">
      <div className="homepage-main-wrapper">
        {/* Sidebar */}
        <div className="homepage-sidebar">
          <SideMenu setView={setView} view={view} />
        </div>
        {/* Main Content */}
        <div className="homepage-content">
          <MainArea 
            view={view} 
            songs={view === "favourite" ? getLikedSongs() : (view === "search" && searchQuery) ? filteredSongs : songs}
            onSearch={handleSearch}
            onToggleLike={handleToggleLike}
            likedSongs={likedSongs}
          />
        </div>
      </div>
      {/* Footer Player */}
      <Footer
        playerState={playerState}
        onPlayPause={handlePlayPause}
        onNextSong={handleNextSong}
        onPreviousSong={handlePreviousSong}
        onProgressChange={handleProgressChange}
        onVolumeChange={setVolume}
        onSpeedChange={setPlaybackSpeed}
        onToggleShuffle={() => setShuffleEnabled(!shuffleEnabled)}
        onToggleLoop={() => setLoopMode((prev) => (prev + 1) % 3)}
        onToggleLike={handleToggleLike}
      />

      {/* Hidden video element used for audio playback (supports mp4 with audio track) */}
      <video ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Homepage;
