const Datastore = require('nedb');
const path = require('path');

// Создаём/открываем файл базы данных пользователей
const userDB = new Datastore({
    filename: path.join(__dirname, '../data/users.db'),
    autoload: true,
});

module.exports = userDB;