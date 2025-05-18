import React, { useEffect, useState } from 'react';

const PRODUCT_API_URL = import.meta.env.VITE_PRODUCT_SERVICE_URL || 'http://localhost:5002/api/products';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(PRODUCT_API_URL);
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Server error');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h2>Product Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: 16 }}>
            <strong>{product.name}</strong> - ${product.price} <br />
            {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
