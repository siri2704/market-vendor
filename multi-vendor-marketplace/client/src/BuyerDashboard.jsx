import React from 'react';

export default function BuyerDashboard({ products }) {
  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: 16 }}>
            <strong>{product.name}</strong> - ${product.price} <br />
            {product.description}
            {/* Add to cart, wishlist, view details, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
}
