const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const db = new Datastore({ filename: './data/users.db', autoload: true });

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    db.findOne({ email }, (err, user) => {
        if (user) return res.status(400).send('Пользователь уже существует');

        db.insert({ name, email, password }, (err, newUser) => {
            if (err) return res.status(500).send('Ошибка регистрации');
            res.status(200).send({ message: 'Успешно зарегистрирован' });
        });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.findOne({ email, password }, (err, user) => {
        if (!user) return res.status(401).send('Неверные данные');
        res.send({ message: 'Успешный вход' });
    });
});

module.exports = router;