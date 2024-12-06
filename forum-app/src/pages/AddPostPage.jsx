import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostPage() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.content) {
      const newPost = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
      };

      const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedPosts = [...savedPosts, newPost];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));

      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter the title of your post"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Post Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your post here"
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPostPage;
