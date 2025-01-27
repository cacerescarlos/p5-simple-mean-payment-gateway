const products = [
  { id: 1, name: 'Pizza', price: 1500 }, // Precio en centavos (15.00 USD)
  { id: 2, name: 'Hamburguesa', price: 1200 },
  { id: 3, name: 'Tacos', price: 800 },
];

  
  const getProducts = () => products;
  
  const getProductById = (id) => products.find((product) => product.id === id);
  
  module.exports = { getProducts, getProductById };
  