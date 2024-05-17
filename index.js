const express = require('express');
const bodyParser = require('body-parser');
require('./db')
const categoryRoutes = require('./routes/category.js');
const productRoutes = require('./routes/product.js');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
