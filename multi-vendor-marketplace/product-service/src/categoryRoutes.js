const express = require('express');
const router = express.Router();
const Category = require('./models/Category');

// Create a new category (Admin only)
router.post('/', async (req, res) => {
    try {
        const { name, parentCategory } = req.body;
        if (!name) return res.status(400).json({ message: 'Name is required' });
        const category = new Category({ name, parentCategory: parentCategory || null });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
