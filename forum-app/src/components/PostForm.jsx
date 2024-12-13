import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PostForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          required
        />
      </div>
      <button type="submit" className="button button-primary">
        Submit
      </button>
    </form>
  );
}

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;