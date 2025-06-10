const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const path = require('path');

const db = new Datastore({
    filename: path.join(__dirname, '../data/products.db'),
    autoload: true
});

// �������� ��� ������
router.get('/', (req, res) => {
    db.find({}, (err, docs) => {
        if (err) return res.status(500).send(err);
        res.json(docs);
    });
});

// �������� �����
router.post('/', (req, res) => {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
        return res.status(400).json({ message: '��������� ��� ����' });
    }

    const product = { name, price, description };
    db.insert(product, (err, newDoc) => {
        if (err) return res.status(500).json({ message: '������ ��� ���������� ������' });
        res.status(201).json(newDoc);
    });
});

module.exports = router;