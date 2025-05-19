const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const { authenticate, authorizeRole } = require('../auth');

// Route to list all products (public)
router.get('/', productController.getAllProducts);

// Route to get a single product by ID (public)
router.get('/:id', productController.getProductById);

// Route to create a new product (Vendor only)
router.post('/', authenticate, authorizeRole('vendor'), productController.createProduct);

// Route to update an existing product (Vendor only)
router.put('/:id', authenticate, authorizeRole('vendor'), productController.updateProduct);

// Route to delete a product (Vendor only)
router.delete('/:id', authenticate, authorizeRole('vendor'), productController.deleteProduct);

// PATCH /api/products/stock/:id (Vendor only)
router.patch('/stock/:id', authenticate, authorizeRole('vendor'), productController.updateStock);

// GET reviews for a product (public)
router.get('/:id/reviews', productController.getProductReviews);

// POST add a review (Buyer only)
router.post('/:id/reviews', authenticate, authorizeRole('buyer'), productController.addProductReview);

// GET personalized recommendations (Authenticated)
router.get('/recommended', authenticate, productController.getRecommendedProducts);

// GET sales analytics (Vendor/Admin only)
router.get('/analytics/sales', authenticate, authorizeRole('vendor', 'admin'), productController.getSalesAnalytics);

module.exports = router;
