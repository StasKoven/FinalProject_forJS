import React, { useState, useEffect } from "react";
import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyDKy0PfpYnzp1rgokIjEpXK2YRy1p5h5B4"; // Ваш API Key
const PLAYLISTS = [
  { id: "all", title: "All" },
  { id: "PLDyJYA6aTY1lPWXBPk0gw6gR8fEtPDGKa", title: "Python" },
  { id: "PLDyJYA6aTY1laYPs6iS-SrYl9DZLVCUKr", title: "C#" },
  { id: "PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO", title: "HTML" },
  { id: "PL0MUAHwery4o9I7QQVj_RP4ZVpmdx6evz", title: "CSS" },
  { id: "PL0MUAHwery4qn4Y27iUxmzC-JiauX7vSL", title: "JavaScript" },
];

function CoursesPage() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState("all");

  const fetchVideos = async (playlistId, pageToken = "") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet",
            maxResults: 10,
            playlistId,
            key: YOUTUBE_API_KEY,
            pageToken,
          },
        }
      );

      setVideos((prevVideos) =>
        pageToken ? [...prevVideos, ...response.data.items] : response.data.items
      );
      setNextPageToken(response.data.nextPageToken || null);
    } catch (err) {
      setError("Failed to load videos. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPlaylist === "all") {
      // Fetch all playlists
      const fetchAllPlaylists = async () => {
        setVideos([]);
        for (const playlist of PLAYLISTS.filter((pl) => pl.id !== "all")) {
          await fetchVideos(playlist.id);
        }
      };
      fetchAllPlaylists();
    } else {
      fetchVideos(selectedPlaylist);
    }
  }, [selectedPlaylist]);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(selectedPlaylist, nextPageToken);
    }
  };

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Programming Courses</h1>

      {error && <p className="text-red-500">{error}</p>}

      {/* Playlist Selector */}
      <div className="filter-container">
        <select
          className="filter-dropdown"
          value={selectedPlaylist}
          onChange={(e) => {
            setVideos([]);
            setNextPageToken(null);
            setSelectedPlaylist(e.target.value);
          }}
        >
          {PLAYLISTS.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.title}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Video List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId?.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="text-lg font-semibold mt-2">{video.snippet.title}</h2>
            <p className="text-gray-600">{video.snippet.description}</p>
          </div>
        ))}
      </div>

      {nextPageToken && !loading && (
        <button onClick={loadMoreVideos} className="form-button mt-4">
          Load More Videos
        </button>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default CoursesPage;
