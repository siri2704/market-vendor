import React from 'react';

export default function VendorDashboard({ products }) {
  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <button>Add New Product</button>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: 16 }}>
            <strong>{product.name}</strong> - ${product.price} <br />
            Stock: {product.stock}
            {/* Edit, update, delete, analytics, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
}
