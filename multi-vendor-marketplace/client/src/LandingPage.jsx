import React, { useState } from 'react';
import './App.css';

export default function LandingPage({ onShowLogin, onShowRegister }) {
  return (
    <div className="landing-page bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Multi-Vendor Marketplace</h1>
        <p className="text-lg text-gray-700 mb-6 animate-fade-in-delay">Shop, Sell, and Succeed Together</p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary" onClick={onShowRegister}>Sign Up</button>
          <button className="btn-secondary" onClick={onShowLogin}>Login</button>
        </div>
      </header>
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay">
        <div className="card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="/featured-products.svg" alt="Featured Products" className="w-20 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Featured Products</h3>
          <p className="text-gray-600 text-center">Discover trending items and best sellers from top vendors.</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="/vendor-success.svg" alt="Vendor Success" className="w-20 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Vendor Success</h3>
          <p className="text-gray-600 text-center">Read inspiring stories from our most successful sellers.</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="/testimonials.svg" alt="Testimonials" className="w-20 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Customer Testimonials</h3>
          <p className="text-gray-600 text-center">See what buyers love about our marketplace experience.</p>
        </div>
      </section>
      <footer className="text-gray-500 mt-auto mb-4 animate-fade-in-delay">&copy; 2025 Multi-Vendor Marketplace. All rights reserved.</footer>
    </div>
  );
}
