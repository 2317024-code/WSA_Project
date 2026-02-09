import React from "react";
import logoImage from "../../assets/logo.png";
import "../../css/footer/SongDetail.css";

const SongDetail = ({ currentSong }) => {
  const fallback = {
    name: "Song not selected",
    artist_name: "Not selected",
    image: logoImage,
  };

  const data = currentSong || fallback;
  
  // Use logo image for all songs
  const imageToDisplay = logoImage;

  return (
    <div className="songdetail-root">
      <div className="songdetail-image-wrapper">
        <img src={imageToDisplay} alt={data.name} className="songdetail-image" />
      </div>

      <div className="songdetail-text">
        <h3 className="songdetail-title">{data.name}</h3>
        <p className="songdetail-artist">{data.artist_name}</p>
      </div>
    </div>
  );
};

export default SongDetail;
