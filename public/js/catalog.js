document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/products')
        .then(res => res.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';

            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price} ₽</strong></p>
          <button onclick="addToCart('${product._id}')">Добавить в корзину</button>
        `;
                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки товаров:', error);
        });
});

function addToCart(productId) {
    fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    })
        .then(res => res.json())
        .then(() => alert('Товар добавлен в корзину!'))
        .catch(err => alert('Ошибка добавления товара.'));
}