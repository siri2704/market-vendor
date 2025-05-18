// Basic Express app setup for Product Service
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/product_service';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for Product Service'))
.catch((err) => console.error('MongoDB connection error:', err));

// Health check route
app.get('/api/products/health', (req, res) => {
    res.json({ status: 'Product Service is running' });
});

// Product routes
const productRoutes = require('./routes/index');
app.use('/api/products', productRoutes);

// Category routes
const categoryRoutes = require('./categoryRoutes');
app.use('/api/categories', categoryRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
