const Datastore = require('nedb');
const path = require('path');
const db = new Datastore({ filename: 'data/products.db', autoload: true });

module.exports = {
    getAll: (callback) => db.find({}, callback),

    add: (product, callback) => db.insert(product, callback),

    remove: (id, callback) => db.remove({ _id: id }, {}, callback),
};