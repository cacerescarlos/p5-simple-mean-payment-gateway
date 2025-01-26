const app = require('./app');
const PORT = process.env.PORT || 3000;
// require('dotenv').config();
// console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
