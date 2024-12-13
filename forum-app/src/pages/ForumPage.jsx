import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../services/API';
import { useAppContext } from '../AppContext';

function ForumPage() {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchProducts();
        dispatch({ type: 'SET_POSTS', payload: data });
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      dispatch({ type: 'DELETE_POST', payload: id });
    } catch (err) {
      console.error('Error deleting post:', err);
      setError('Failed to delete post.');
    }
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum for Programmers</h1>
      <button className="button button-primary" onClick={() => navigate('/add-post')}>
        Add New Post
      </button>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="posts-list">
          {state.posts.map((post) => (
            <div key={post.id} className="post-card fade-in">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div className="button-group">
                <button
                  className="button button-primary"
                  onClick={() => navigate(`/question/${post.id}`)}
                >
                  Open
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => navigate(`/edit-post/${post.id}`)}
                >
                  Edit
                </button>
                <button
                  className="button button-delete"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ForumPage;