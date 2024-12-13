import React from 'react';
import PropTypes from 'prop-types';

function ForumPost({ title, content, author, date }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="text-small">
        By {author} on {date}
      </div>
    </div>
  );
}
ForumPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ForumPost;
