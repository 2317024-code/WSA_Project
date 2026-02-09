import React, { useState, useEffect } from "react";

import Footer from "../components/layout/Footer";
import SideMenu from "../components/layout/SideMenu";
import MainArea from "../components/layout/MainArea";
import Statistics from "../components/common/Statistics";
import PlayerQueue from "../components/common/PlayerQueue";

import "../css/pages/HomePage.css";

const Homepage = () => {
  const [view, setView] = useState("home");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [showQueue, setShowQueue] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const songs = [
    {
      id: 1,
      name: "Believer",
      artist_name: "Imagine Dragons",
      cover: "https://i.scdn.co/image/ab67616d0000b273a466c9d6c7a3c7bbdc0e87f3",
      releasedate: "2017-02-01",
      duration: "04.30",
    },
    {
      id: 2,
      name: "Faded",
      artist_name: "Alan Walker",
      cover: "https://i.scdn.co/image/ab67616d0000b2733c6c8b9a43d1d93e4aaf0e65",
      releasedate: "2015-12-03",
      duration: "05.30",
    },
    {
      id: 3,
      name: "Shape of You",
      artist_name: "Ed Sheeran",
      cover: "https://i.scdn.co/image/ab67616d0000b273ba0e0bdfd8f5b1dc3c6d1c8e",
      releasedate: "2017-03-17",
      duration: "04.32",
    },
    {
      id: 4,
      name: "Blinding Lights",
      artist_name: "The Weeknd",
      cover: "https://i.scdn.co/image/ab67616d0000b273f36c2e41eda0e6ba97d0ffeb",
      releasedate: "2019-11-29",
      duration: "03.20",
    },
    {
      id: 5,
      name: "Anti-Hero",
      artist_name: "Taylor Swift",
      cover: "https://i.scdn.co/image/ab67616d0000b2732b9a94a4e83d4dc70b3dd5ae",
      releasedate: "2022-10-21",
      duration: "03.34",
    },
    {
      id: 6,
      name: "Heat Waves",
      artist_name: "Glass Animals",
      cover: "https://i.scdn.co/image/ab67616d0000b27322ad2af20f69dd0ff700fd16",
      releasedate: "2020-06-19",
      duration: "03.58",
    },
    {
      id: 7,
      name: "Don't Start Now",
      artist_name: "Dua Lipa",
      cover: "https://i.scdn.co/image/ab67616d0000b273eee25b1c2b0c2c4c4c4c4c4c",
      releasedate: "2019-11-01",
      duration: "03.23",
    },
    {
      id: 8,
      name: "Levitating",
      artist_name: "Dua Lipa ft. DaBaby",
      cover: "https://i.scdn.co/image/ab67616d0000b27371bfe26a2ee47eabbf1a8fa5",
      releasedate: "2020-03-27",
      duration: "03.24",
    },
  ];

  const handlePlayNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePlayPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAddToFavorites = (song) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav.id === song.id);
      if (isFavorited) {
        return prevFavorites.filter((fav) => fav.id !== song.id);
      } else {
        return [...prevFavorites, song];
      }
    });
  };

  const handleSelectSongFromQueue = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const isSongFavorited = (songId) => {
    return favorites.some((fav) => fav.id === songId);
  };

  return (
    <div className="homepage-root">
      {/* Statistics Section */}
      <Statistics songs={songs} favorites={favorites} />
      
      <div className="homepage-main-wrapper">
        {/* Sidebar */}
        <div className="homepage-sidebar">
          <SideMenu setView={setView} view={view} />
        </div>
        {/* Main Content */}
        <div className="homepage-content">
          <MainArea
            view={view}
            songs={songs}
            favorites={favorites}
            onAddToFavorites={handleAddToFavorites}
            isSongFavorited={isSongFavorited}
          />
        </div>
        {/* Queue Sidebar */}
        <div className="homepage-queue">
          <PlayerQueue
            songs={songs}
            currentSongIndex={currentSongIndex}
            isPlaying={isPlaying}
            onSelectSong={handleSelectSongFromQueue}
          />
        </div>
      </div>
      {/* Footer Player */}
      <Footer
        songs={songs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        currentTime={currentTime}
        onPlayNext={handlePlayNext}
        onPlayPrevious={handlePlayPrevious}
        onPlayToggle={handlePlayToggle}
        onTimeChange={setCurrentTime}
      />
    </div>
  );
};

export default Homepage;
