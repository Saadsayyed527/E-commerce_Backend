const Product = require('../models/products');
const Category = require('../models/category');

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // Check if the category exists
        const categoryExists = await Category.findOne({ name: category });
        if (!categoryExists) {
            return res.status(400).json({ error: 'Category does not exist' });
        }

        let product = new Product({ name, price, description, category });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
