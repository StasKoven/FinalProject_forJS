import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
import Button from '../components/Button';

function ForumPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddPost = () => {
    alert('Add post functionality will be implemented later!');
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="forum-page p-4">
      <h1 className="text-2xl font-bold mb-4">Forum</h1>
      <Button label="Add Post" onClick={handleAddPost} variant="primary" />
    </div>
  );
}

export default ForumPage;