import express from 'express';
import asyncHandeler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc      Fetch all products
// @route     Get /api/products
// @access    Public
router.get(
  '/',
  asyncHandeler(async (_req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);


// @desc      Fetch Single products
// @route     Get /api/products/:id
// @access    Public
router.get(
  '/:id',
  asyncHandeler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
