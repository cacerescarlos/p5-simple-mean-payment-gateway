const { createPaymentIntent, createCheckoutSession } = require('../services/stripe.service');

const handlePayment = async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await createPaymentIntent(amount, currency);
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      message: 'PaymentIntent creado con éxito',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controlador para crear una sesión de Stripe Checkout
 * - Recibe una lista de productos y la moneda en el cuerpo de la solicitud
 * - Devuelve la URL de la sesión de Stripe Checkout
 */
const handleCreateCheckoutSession = async (req, res) => {
  try {
    const { items, currency } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'El parámetro items es obligatorio y debe ser un array' });
    }
    if (!currency) {
      return res.status(400).json({ message: 'El parámetro currency es obligatorio' });
    }

    const session = await createCheckoutSession(items, currency);

    res.status(200).json({
      url: session.url,
      paymentIntentId: session.payment_intent, // PaymentIntent asociado
    });
  } catch (error) {
    console.error('Error al crear la sesión de checkout:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};


module.exports = { handlePayment, handleCreateCheckoutSession };
