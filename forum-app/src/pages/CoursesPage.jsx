import React, { useState, useEffect } from "react";
import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyDKy0PfpYnzp1rgokIjEpXK2YRy1p5h5B4"; // Ваш API Key
const YOUTUBE_PLAYLIST_ID = "PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL"; // Публічний плейлист із Python курсами

function CoursesPage() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (pageToken = "") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          maxResults: 10,
          playlistId: YOUTUBE_PLAYLIST_ID,
          key: YOUTUBE_API_KEY,
          pageToken,
        },
      });

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setNextPageToken(response.data.nextPageToken || null);
    } catch (err) {
      setError("Failed to load videos. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Programming Courses</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
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
        <button
          onClick={loadMoreVideos}
          className="form-button mt-4"
        >
          Load More Videos
        </button>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default CoursesPage;
