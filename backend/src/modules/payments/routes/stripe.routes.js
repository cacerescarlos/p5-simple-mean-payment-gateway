const express = require('express');
const { handlePayment } = require('../controllers/stripe.controller');
const router = express.Router();

router.post('/stripe', handlePayment);

module.exports = router;
