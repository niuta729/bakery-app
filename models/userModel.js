const Datastore = require('nedb');
const path = require('path');

// ������/��������� ���� ���� ������ �������������
const userDB = new Datastore({
    filename: path.join(__dirname, '../data/users.db'),
    autoload: true,
});

module.exports = userDB;