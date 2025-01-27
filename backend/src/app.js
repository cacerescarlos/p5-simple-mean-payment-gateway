const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripeRoutes = require('./modules/payments/routes/stripe.routes');
const productRoutes = require('./modules/payments/routes/products.routes');
const cartRoutes = require('./modules/payments/routes/cart.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/payments', stripeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


module.exports = app;
