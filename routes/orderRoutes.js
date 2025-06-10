console.log('orderRoutes ���������')
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
            console.error('������ ��� ���������� ������:', err);
            return res.status(500).json({ message: '������ �������' });
        }

        res.status(201).json({ message: '����� �������', order: newOrder });
    });
});

module.exports = router;