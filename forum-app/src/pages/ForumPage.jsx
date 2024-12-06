import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [activePostId, setActivePostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Завантаження постів із localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const editPost = (id) => {
    navigate(`/edit-post/${id}`);
  };

  const handlePostClick = (id) => {
    setActivePostId(id === activePostId ? null : id);
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum for Programmers</h1>
      <button
        className="form-button"
        onClick={() => navigate("/add-post")}
      >
        Add New Post
      </button>
      <div className="posts-list">
        {posts.length === 0 ? (
          <p>No posts available. Add one to get started!</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className={`post-card ${
                activePostId === post.id ? "post-card-active" : ""
              }`}
              onClick={() => handlePostClick(post.id)}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {activePostId === post.id && (
                <div className="post-actions">
                  <button onClick={() => editPost(post.id)} className="form-button">
                    Edit
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="form-button delete-button"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ForumPage;
