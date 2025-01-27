const express = require('express');
const { handlePayment, handleCreateCheckoutSession } = require('../controllers/stripe.controller');
const router = express.Router();

router.post('/stripe', handlePayment);
router.post('/create-checkout-session', handleCreateCheckoutSession);

module.exports = router;
