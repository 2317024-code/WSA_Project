import "../../css/mainArea/SongList.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SongList = ({ songs, onAddToFavorites, isSongFavorited }) => {
  if (!songs || songs.length === 0) {
    return (
      <div className="songlist-root">
        <div className="songlist-empty">
          <p className="songlist-empty-text">🎵 No songs found</p>
          <span className="songlist-empty-subtext">
            Try searching with a different keyword
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="songlist-root">
      <div className="songlist-scroll">
        {songs.length === 0 && (
          <p className="searchbar-empty">Search songs to display 🎧</p>
        )}

        <table className="songlist-table">
          <colgroup>
            <col className="col-index" />
            <col className="col-name" />
            <col className="col-artist" />
            <col className="col-year" />
            <col className="col-duration" />
            <col className="col-favorite" />
          </colgroup>

          <thead>
            <tr>
              <th className="songlist-th th-index">No</th>
              <th className="songlist-th">Name</th>
              <th className="songlist-th">Artist</th>
              <th className="songlist-th">Year</th>
              <th className="songlist-th th-duration">Duration</th>
              <th className="songlist-th th-favorite">Favorite</th>
            </tr>
          </thead>

          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <td className="songlist-td td-index">{index + 1}</td>
                <td className="songlist-td">{song.name}</td>
                <td className="songlist-td">{song.artist_name}</td>
                <td className="songlist-td">{song.releasedate}</td>
                <td className="songlist-td td-duration">{song.duration}</td>
                <td className="songlist-td td-favorite">
                  <button
                    onClick={() => onAddToFavorites(song)}
                    className="favorite-btn"
                    aria-label="add to favorites"
                  >
                    {isSongFavorited(song.id) ? (
                      <FaHeart color="#a855f7" size={18} />
                    ) : (
                      <FaRegHeart color="#a855f7" size={18} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongList;
