import React from "react";
import "../styles/Videos.css";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "React for Beginners",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=abcd1234",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=efgh5678",
    },
    {
      id: 3,
      title: "HTML & CSS Basics",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=ijkl9012",
    },
  ];

  return (
    <div className="videos-container">
      <h2>Рекомендовані відео</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <h3>{video.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Videos;
