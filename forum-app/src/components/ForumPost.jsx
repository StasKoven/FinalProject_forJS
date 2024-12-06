import React from "react";

function ForumPost({ title, content, author, date }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="text-sm text-gray-500">
        By {author} on {date}
      </div>
    </div>
  );
}

export default ForumPost;
