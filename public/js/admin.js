document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('product-form');
    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const productList = document.getElementById('product-list');

    // Загрузка товаров
    fetch('/api/products')
        .then(res => res.json())
        .then(products => {
            productList.innerHTML = '';
            products.forEach(p => {
                const item = document.createElement('li');
                item.textContent = `${p.name} — ${p.price}₽`;
                productList.appendChild(item);
            });
        });

    // Обработка отправки формы
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const product = {
            name: nameInput.value,
            price: parseFloat(priceInput.value)
        };
        fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                const item = document.createElement('li');
                item.textContent = productList.appendChi
                productList.appendChild(item);
                form.reset();
            });
    });
});