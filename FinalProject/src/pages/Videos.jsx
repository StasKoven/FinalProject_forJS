import React from "react";
import "../styles/Videos.css";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "React for Beginners",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=SuH0ElAeB1s&ab_channel=%D0%94%D0%9D%D0%95%D0%9F%D0%A0%D0%9E%D0%92%D0%A1%D0%9A%D0%98%D0%99%D0%A1%D0%98%D0%9D%D0%94%D0%98%D0%9A%D0%90%D0%A2",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=BDi9oxmxgjs&ab_channel=%D0%9C%D0%B5%D0%BC%D0%B8%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E",
    },
    {
      id: 3,
      title: "HTML & CSS Basics",
      thumbnail: "https://via.placeholder.com/300x200",
      url: "https://www.youtube.com/watch?v=yHFwYD7ypPo&ab_channel=snxchw",
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
