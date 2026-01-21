import React from "react";
import { IoSearch } from "react-icons/io5";
import "../../css/search/SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <IoSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search songs, artists..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
