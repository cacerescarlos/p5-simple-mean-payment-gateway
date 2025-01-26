const products = [
    { id: 1, name: 'Producto A', price: 1000 }, // Precio en centavos (10.00 USD)
    { id: 2, name: 'Producto B', price: 2000 }, // Precio en centavos (20.00 USD)
    { id: 3, name: 'Producto C', price: 3000 }, // Precio en centavos (30.00 USD)
  ];
  
  const getProducts = () => products;
  
  const getProductById = (id) => products.find((product) => product.id === id);
  
  module.exports = { getProducts, getProductById };
  