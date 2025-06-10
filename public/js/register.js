document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(res => {
            if (!res.ok) throw new Error('Ошибка регистрации');
            return res.json();
        })
        .then(() => {
            alert('Регистрация успешна!');
            window.location.href = 'login.html';
        })
        .catch(() => alert('Пользователь с таким email уже существует'));
});