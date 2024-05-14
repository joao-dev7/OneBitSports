const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    testInputs()
})

function testInputs() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach( input => {
        if (input.value.length < 1) {
            
        } else {
            
        }
    })
}