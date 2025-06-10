document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const payload = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(res => {
            if (!res.ok) throw new Error('Ошибка входа');
            return res.json();
        })
        .then(() => {
            alert('Вы успешно вошли!');
            window.location.href = 'catalog.html';
        })
        .catch(() => alert('Неверный логин или пароль'));
});