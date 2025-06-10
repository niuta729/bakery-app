console.log('orderRoutes подключён')
const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const path = require('path');

const db = new Datastore({ filename: path.join(__dirname, '../data/orders.db'), autoload: true });

router.post('/', (req, res) => {
    const order = {
        items: req.body.items,
        createdAt: new Date()
    };

    db.insert(order, (err, newOrder) => {
        if (err) {
            console.error('Ошибка при сохранении заказа:', err);
            return res.status(500).json({ message: 'Ошибка сервера' });
        }

        res.status(201).json({ message: 'Заказ сохранён', order: newOrder });
    });
});

module.exports = router;