const express = require('express');
const router = express.Router();

// Простая корзина для демонстрации
let cart = [];

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/', (req, res) => {
  cart.push(req.body);
  res.json({ success: true, cart });
});

router.delete('/', (req, res) => {
  cart = [];
  res.json({ success: true });
});

module.exports = router;