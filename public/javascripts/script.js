const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('loginForm');
const closeButton = document.getElementById('close-login-form');

loginButton.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    loginForm.classList.add('hidden');
});