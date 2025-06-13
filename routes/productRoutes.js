const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const db = new Datastore({ filename: 'data/project.db', autoload: true });

router.get('/', (req, res) => {
  db.find({ type: 'product' }, (err, docs) => {
    if (err) return res.status(500).send(err);
    res.json(docs);
  });
});

router.post('/', (req, res) => {
  const product = { ...req.body, type: 'product' };
  db.insert(product, (err, newDoc) => {
    if (err) return res.status(500).send(err);
    res.json(newDoc);
  });
});

module.exports = router;