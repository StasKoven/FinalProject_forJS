import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPostPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const postToEdit = savedPosts.find((post) => post.id === parseInt(id, 10));
    if (postToEdit) {
      setFormData(postToEdit);
    } else {
      alert("Post not found");
      navigate("/");
    }
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = savedPosts.map((post) =>
      post.id === parseInt(id, 10) ? { ...post, ...formData } : post
    );

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Post Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPostPage;
