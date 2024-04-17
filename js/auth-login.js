const btn = document.querySelector('button')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')


btn.addEventListener('click',(e) => {
    e.preventDefault()
    testValue()
})

function testValue() {
    if(email.value < 1) {
        document.getElementById('email-error').innerText = 'Campo Vázio'
    }
    if(email.value > 1) {
        document.getElementById('email-error').style.display = 'inline'
    }
}
