import React, { useState, useMemo } from "react";

import Auth from "../auth/Auth";
import Playlist from "../player/Playlist";
import SearchBar from "../search/SearchBar";
import SongList from "../player/SongList";
import SongGrid from "../songs/SongGrid";

import "../../css/mainArea/MainArea.css";

const MainArea = ({ view, songs, favorites, onAddToFavorites, isSongFavorited }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter songs based on search query
  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim()) {
      return songs;
    }
    
    const query = searchQuery.toLowerCase();
    return songs.filter((song) =>
      song.name.toLowerCase().includes(query) ||
      song.artist_name.toLowerCase().includes(query)
    );
  }, [songs, searchQuery]);

  return (
    <div className="mainarea-root">
      <div className="mainarea-top">
        <Auth />
        {view === "home" && <Playlist />}
        {view === "search" && (
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        )}
      </div>

      <div className="mainarea-scroll">
        {(view === "home" || view === "search") && (
          <SongList
            songs={view === "search" ? filteredSongs : songs}
            onAddToFavorites={onAddToFavorites}
            isSongFavorited={isSongFavorited}
          />
        )}

        {view === "favourite" && (
          <SongGrid
            songs={favorites}
            onAddToFavorites={onAddToFavorites}
            isSongFavorited={isSongFavorited}
          />
        )}
      </div>
    </div>
  );
};

export default MainArea;
