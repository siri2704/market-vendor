import React from 'react';

export default function AdminDashboard({ products }) {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: 16 }}>
            <strong>{product.name}</strong> - ${product.price} <br />
            Vendor: {product.vendorId}
            {/* Approve/reject, remove, analytics, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
}
