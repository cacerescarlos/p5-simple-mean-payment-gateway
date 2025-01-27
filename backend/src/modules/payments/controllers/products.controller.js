const { getProducts, getProductById } = require('../services/products.service');

// Listar todos los productos
const listProducts = (req, res) => {
  const products = getProducts();
  res.status(200).json({ products });
};

// Obtener un producto por su ID
const getProduct = (req, res) => {
  const { id } = req.params;
  const product = getProductById(Number(id));
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.status(200).json({ product });
};

module.exports = { listProducts, getProduct };
