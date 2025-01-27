const { createPaymentIntent, confirmPayment, getPaymentIntent } = require('../services/stripe.service');
const { getProductById } = require('../services/products.service');

const createCartAndPayment = async (req, res) => {
  const { items } = req.body; // Ejemplo: [{ id: 1, quantity: 2 }]

  try {
    // Calcula el total
    const totalAmount = items.reduce((sum, item) => {
      const product = getProductById(item.id);
      if (!product) throw new Error(`Producto con ID ${item.id} no encontrado`);
      return sum + product.price * item.quantity;
    }, 0);

    // Crea el PaymentIntent
    const paymentIntent = await createPaymentIntent(totalAmount, 'usd');
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      message: 'PaymentIntent creado con éxito',
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const confirmPaymentIntent = async (req, res) => {
    const { paymentIntentId } = req.body;
  
    try {
      const paymentIntent = await confirmPayment(paymentIntentId);
      res.status(200).json({ message: 'Pago confirmado con éxito', paymentIntent });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const getPaymentIntentStatus = async (req, res) => {
    const { paymentIntentId } = req.params;
  
    try {
      const paymentIntent = await getPaymentIntent(paymentIntentId);
      res.status(200).json({
        message: 'Estado del PaymentIntent recuperado con éxito',
        paymentIntent,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = { createCartAndPayment, confirmPaymentIntent, getPaymentIntentStatus };
