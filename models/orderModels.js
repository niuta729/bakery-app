const Datastore = require('nedb');
const path = require('path');

const orderDB = new Datastore({
  filename: path.join(__dirname, '../data/orders.db'),
  autoload: true,
});

module.exports = orderDB;