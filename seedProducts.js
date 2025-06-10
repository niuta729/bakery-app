const Datastore = require('nedb');
const db = new Datastore({ filename: './data/products.db', autoload: true });

const products = [
    { name: 'Хлеб белый', description: 'Свежий пшеничный хлеб', price: 40 },
    { name: 'Батон нарезной', description: 'Классический батон', price: 35 },
    { name: 'Круассан с шоколадом', description: 'Слойка с шоколадной начинкой', price: 60 },
    { name: 'Булочка с корицей', description: 'Ароматная булочка', price: 50 },
    { name: 'Пирожок с капустой', description: 'Домашний пирожок', price: 45 }
];

// Очистим базу и добавим новые товары
db.remove({}, { multi: true }, (err, numRemoved) => {
    db.insert(products, (err, newDocs) => {
        if (err) {
            console.error('Ошибка при добавлении товаров:', err);
        } else {
            console.log(`Добавлено ${newDocs.length} товаров.`);
        }
    });
});