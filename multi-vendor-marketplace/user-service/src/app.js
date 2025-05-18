// Basic Express app setup for User Service
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://siriananth04:Siri2704@cluster0.on3n4ip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Health check route
app.get('/api/users/health', (req, res) => {
    res.json({ status: 'User Service is running' });
});

// User routes
const userRoutes = require('./routes');
app.use('/api/users', userRoutes);

// Root route for friendly message
app.get('/', (req, res) => {
    res.send('User Service API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
