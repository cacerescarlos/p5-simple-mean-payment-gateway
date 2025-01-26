require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Monto en centavos
      currency, // e.g., 'usd'
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error en Stripe:', error);
    throw new Error('Error al procesar el pago');
  }
};

module.exports = { createPaymentIntent };
