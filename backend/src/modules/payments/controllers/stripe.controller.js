const { createPaymentIntent } = require('../services/stripe.service');

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

module.exports = { handlePayment };
