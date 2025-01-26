const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripeRoutes = require('./modules/payments/routes/stripe.routes');
// require('dotenv').config();
// console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/payments', stripeRoutes);

module.exports = app;
