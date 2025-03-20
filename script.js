document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const registerBtn = document.getElementById('register-btn');
    const loginLink = document.getElementById('login-link');

    registerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});
