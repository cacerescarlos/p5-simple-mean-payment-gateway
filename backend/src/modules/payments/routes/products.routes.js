const express = require('express');
const { listProducts, getProduct } = require('../controllers/products.controller');
const router = express.Router();

// Rutas
router.get('/', listProducts); // Listar todos los productos
router.get('/:id', getProduct); // Obtener producto por ID

module.exports = router;
