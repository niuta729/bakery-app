const Datastore = require('nedb');
const db = new Datastore({ filename: './data/products.db', autoload: true });

const products = [
    { name: '���� �����', description: '������ ��������� ����', price: 40 },
    { name: '����� ��������', description: '������������ �����', price: 35 },
    { name: '�������� � ���������', description: '������ � ���������� ��������', price: 60 },
    { name: '������� � �������', description: '��������� �������', price: 50 },
    { name: '������� � ��������', description: '�������� �������', price: 45 }
];

// ������� ���� � ������� ����� ������
db.remove({}, { multi: true }, (err, numRemoved) => {
    db.insert(products, (err, newDocs) => {
        if (err) {
            console.error('������ ��� ���������� �������:', err);
        } else {
            console.log(`��������� ${newDocs.length} �������.`);
        }
    });
});