console.log ('cartRoutes ���������')
const express = require('express');
const router = express.Router();
let cart = []; // ������� ������� � ������

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
    // �������� ����� � �������
    router.post('/add', (req, res) => {
        const product = req.body;
        if (product && product._id) {
            cart.push(product);
            res.json({ message: '����� �������� � �������' });
        } else {
            res.status(400).json({ error: '������������ �����' });
        }
    });

    // �������� �������
    router.post('/clear', (req, res) => {
        cart = [];
        res.json({ message: '������� �������' });
    });
    productDb.findOne({ _id: productId }, (err, product) => {
        if (err || !product) return res.status(404).send('����� �� ������');
        cart.push(product);
        res.status(200).send({ message: '����� ��������' });
    });
});

module.exports = router;