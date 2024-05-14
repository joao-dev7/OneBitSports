const btn = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    testValue();
});

function testValue() {
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;
    const emailError = document.getElementById('email-error');
    const passError = document.getElementById('pass-error');

    if (email.length < 1) {
        emailError.classList.remove('success');
        emailError.innerText = 'Campo Vazio';
    } else {
        emailError.classList.add('success');
    }

    if (pass.length < 1) {
        passError.classList.remove('success');
        passError.innerText = 'Campo Vazio';
    } else {
        passError.classList.add('success');
    }

    if (email.length >= 1 && pass.length >= 1) {
        form.submit();
        alert('Login realizado com sucesso!')
    }
}