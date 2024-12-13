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

  const handleEdit = async (id, updatedData) => {
    try {
      const updatedPost = await updateProduct(id, updatedData);
      dispatch({ type: 'UPDATE_POST', payload: updatedPost });
    } catch (err) {
      console.error('Error updating post:', err);
      setError('Failed to update post.');
    }
  };

  const handleAdd = async (newPostData) => {
    try {
      const newPost = await createProduct(newPostData);
      dispatch({ type: 'ADD_POST', payload: newPost });
    } catch (err) {
      console.error('Error adding post:', err);
      setError('Failed to add post.');
    }
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum for Programmers</h1>
      <button className="form-button" onClick={() => navigate('/add-post')}>
        Add New Post
      </button>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="posts-list">
          {state.posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button
                className="form-button"
                onClick={() => navigate(`/question/${post.id}`)}
              >
                Open
              </button>
              <button
                className="edit-button"
                onClick={() => navigate(`/edit-post/${post.id}`)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ForumPage;