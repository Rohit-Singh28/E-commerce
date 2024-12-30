const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECERET_KEY);

module.exports = stripe;