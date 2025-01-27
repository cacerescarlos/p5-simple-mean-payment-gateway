const express = require('express');
const { createCartAndPayment, confirmPaymentIntent, getPaymentIntentStatus } = require('../controllers/cart.controller');
const router = express.Router();

router.post('/', createCartAndPayment);
router.post('/confirm', confirmPaymentIntent);
router.get('/status/:paymentIntentId', getPaymentIntentStatus);

module.exports = router;
