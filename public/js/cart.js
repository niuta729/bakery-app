// Получаем корзину из localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Функция для отображения корзины
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
        totalPriceElement.textContent = '0';
        return;
    }

    cart.forEach((item, index) => {
        const itemElem = document.createElement('div');
        itemElem.className = 'cart-item';
        itemElem.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Цена: ${item.price} ₽</p>
      <button onclick="removeFromCart(${index})">Удалить</button>
    `;
        cartItemsContainer.appendChild(itemElem);
        total += item.price;
    });

    totalPriceElement.textContent = total;
}

// Удаление товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Обработка оформления заказа
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    alert('Заказ оформлен!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
});

renderCart();