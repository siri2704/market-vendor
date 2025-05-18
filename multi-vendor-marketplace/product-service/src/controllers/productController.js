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
