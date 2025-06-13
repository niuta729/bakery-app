const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const db = new Datastore({ filename: 'data/project.db', autoload: true });

router.post('/', (req, res) => {
  const order = { ...req.body, type: 'order', date: new Date() };
  db.insert(order, (err, newDoc) => {
    if (err) return res.status(500).send(err);
    res.json(newDoc);
  });
});

module.exports = router;