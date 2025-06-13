const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const Datastore = require('nedb');

const db = new Datastore({ filename: 'data/project.db', autoload: true });
const app = express();
const PORT = process.env.PORT || 3000;

// Создание папки data, если нет
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Подключение маршрутов
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// ✅ Запускаем сервер только один раз
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
