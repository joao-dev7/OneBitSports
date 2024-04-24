const btn = document.querySelector('button')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const form = document.querySelector('form')

btn.addEventListener('click',(e) => {
    e.preventDefault()
    testValue()
})

function testValue() {
    if(email.value < 1) {
        document.getElementById('email-error').innerText = 'Campo Vázio'
    } else {
        document.getElementById('email-error').classList.add('sucess')
    }
    if(pass.value < 1) {
        document.getElementById('pass-error').innerText = 'Campo Vázio'
    } else {
        document.getElementById('pass-error').classList.add('sucess')
    }
}
