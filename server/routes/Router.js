const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

router.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body); 
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

module.exports = router;
