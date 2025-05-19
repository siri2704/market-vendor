import React, { useEffect, useState } from 'react';
import BuyerDashboard from './BuyerDashboard';
import VendorDashboard from './VendorDashboard';
import AdminDashboard from './AdminDashboard';

const PRODUCT_API_URL = import.meta.env.VITE_PRODUCT_SERVICE_URL || 'http://localhost:5002/api/products';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [role, setRole] = useState('buyer');
  const [token] = useState(localStorage.getItem('token'));

  // For vendor: add product form
  const [showAdd, setShowAdd] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', category: '', stock: '' });

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

    // Get user role from JWT (if present)
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setRole(payload.role || 'buyer');
      } catch {
        setRole('buyer');
      }
    }
  }, [token]);

  // Vendor: Add product handler
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(PRODUCT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (res.ok) {
        setProducts([...products, data]);
        setShowAdd(false);
        setNewProduct({ name: '', description: '', price: '', category: '', stock: '' });
      } else {
        alert(data.message || 'Error adding product');
      }
    } catch {
      alert('Server error');
    }
  };

  // Vendor: Delete product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      const res = await fetch(`${PRODUCT_API_URL}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setProducts(products.filter((p) => p._id !== id));
      else alert('Error deleting product');
    } catch {
      alert('Server error');
    }
  };

  // Buyer: Add review
  const handleAddReview = async (id, rating, review) => {
    try {
      const res = await fetch(`${PRODUCT_API_URL}/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, review }),
      });
      if (res.ok) alert('Review added!');
      else alert('Error adding review');
    } catch {
      alert('Server error');
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  if (role === 'vendor')
    return (
      <div>
        <h2>Vendor Dashboard</h2>
        <button onClick={() => setShowAdd((v) => !v)}>{showAdd ? 'Cancel' : 'Add New Product'}</button>
        {showAdd && (
          <form onSubmit={handleAddProduct} style={{ margin: '1rem 0' }}>
            <input placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required />
            <input placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} required />
            <input placeholder="Price" type="number" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} required />
            <input placeholder="Category" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} required />
            <input placeholder="Stock" type="number" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })} required />
            <button type="submit">Add</button>
          </form>
        )}
        <ul>
          {products.map((product) => (
            <li key={product._id} style={{ marginBottom: 16 }}>
              <strong>{product.name}</strong> - ${product.price} <br />
              Stock: {product.stock}
              <button onClick={() => handleDeleteProduct(product._id)} style={{ marginLeft: 8 }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );

  if (role === 'admin')
    return (
      <div>
        <h2>Admin Dashboard</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id} style={{ marginBottom: 16 }}>
              <strong>{product.name}</strong> - ${product.price} <br />
              Vendor: {product.vendorId}
              <button onClick={() => handleDeleteProduct(product._id)} style={{ marginLeft: 8 }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );

  // Buyer dashboard
  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: 16 }}>
            <strong>{product.name}</strong> - ${product.price} <br />
            {product.description}
            <ReviewForm productId={product._id} onAddReview={handleAddReview} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewForm({ productId, onAddReview }) {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onAddReview(productId, rating, review); setRating(''); setReview(''); }} style={{ marginTop: 8 }}>
      <input placeholder="Rating (1-5)" type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} required />
      <input placeholder="Review" value={review} onChange={e => setReview(e.target.value)} required />
      <button type="submit">Add Review</button>
    </form>
  );
}
