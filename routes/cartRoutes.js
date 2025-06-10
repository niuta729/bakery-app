console.log ('cartRoutes подключён')
const express = require('express');
const router = express.Router();
let cart = []; // Простая корзина в памяти

const Datastore = require('nedb');
const productDb = new Datastore({ filename: './data/products.db', autoload: true });

router.get('/', (req, res) => {
    res.json(cart);
});
router.get('/ping', (req, res) => {
    res.send('Cart route is working');
});
router.post('/', (req, res) => {
    const { productId } = req.body;
    // Добавить товар в корзину
    router.post('/add', (req, res) => {
        const product = req.body;
        if (product && product._id) {
            cart.push(product);
            res.json({ message: 'Товар добавлен в корзину' });
        } else {
            res.status(400).json({ error: 'Некорректный товар' });
        }
    });

    // Очистить корзину
    router.post('/clear', (req, res) => {
        cart = [];
        res.json({ message: 'Корзина очищена' });
    });
    productDb.findOne({ _id: productId }, (err, product) => {
        if (err || !product) return res.status(404).send('Товар не найден');
        cart.push(product);
        res.status(200).send({ message: 'Товар добавлен' });
    });
});

module.exports = router;