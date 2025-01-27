require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Monto en centavos
      currency, // Moneda (e.g., 'usd')
      payment_method_types: ['card'], // Métodos de pago permitidos
      return_url: 'https://tu-dominio.com/success', // URL de retorno
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error en createPaymentIntent:', error);
    throw new Error('Error al procesar el pago');
  }
};


const confirmPayment = async (paymentIntentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      return_url: 'https://tu-dominio.com/success',
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error al confirmar el PaymentIntent:', error);
    throw new Error('Error al confirmar el pago');
  }
};


const getPaymentIntent = async (paymentIntentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    console.error('Error al obtener el PaymentIntent:', error);
    throw new Error('Error al recuperar el estado del PaymentIntent');
  }
};

const createCheckoutSession = async (items, currency) => {
  const lineItems = items.map((item) => ({
    price_data: {
      currency: currency,
      product_data: { name: item.name },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  });

  // console.log('Stripe Session:', session);

  // Devuelve la sesión completa
  return session;
};


module.exports = { createPaymentIntent, confirmPayment, getPaymentIntent, createCheckoutSession };