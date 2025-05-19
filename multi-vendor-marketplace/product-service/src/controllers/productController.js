const ProductService = require('../productService');
const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductService.getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product', error });
    }
};

exports.createProduct = async (req, res) => {
    const productData = req.body;
    try {
        const newProduct = await ProductService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    try {
        const updatedProduct = await ProductService.updateProduct(id, productData);
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductService.deleteProduct(id);
        if (deletedProduct) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

// PATCH /api/products/stock/:id (Vendor only)
exports.updateStock = async (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;
    try {
        const updated = await Product.findByIdAndUpdate(id, { stock }, { new: true });
        if (!updated) return res.status(404).json({ message: 'Product not found' });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating stock', error });
    }
};

// GET reviews for a product (public)
exports.getProductReviews = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product.reviews || []);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

// POST add a review (Buyer only)
exports.addProductReview = async (req, res) => {
    const { id } = req.params;
    const { rating, review } = req.body;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        const newReview = {
            userId: req.user.id,
            rating,
            review,
            createdAt: new Date()
        };
        product.reviews = product.reviews || [];
        product.reviews.push(newReview);
        await product.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

// GET personalized recommendations (Authenticated)
exports.getRecommendedProducts = async (req, res) => {
    // Stub: return random products for now
    try {
        const products = await Product.find().limit(5);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recommendations', error });
    }
};

// GET sales analytics (Vendor/Admin only)
exports.getSalesAnalytics = async (req, res) => {
    // Stub: return dummy analytics
    res.json({ totalSales: 0, revenue: 0, bestSellers: [] });
};
