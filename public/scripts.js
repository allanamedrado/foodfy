const cards = document.querySelectorAll('.card')
const buttons = document.querySelectorAll('button')
const hidden = document.querySelector('.hide')

for (const card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute('id')
        window.location.href = `/details?id=${imageId}`
    })
}

for (const button of buttons) {
    button.addEventListener("click", function() {
        if (button.textContent == 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
            hidden.classList.add(desative)
        } else {
            button.innerHTML = 'ESCONDER'
            hidden.classList.add(active)
        }
    })       
}



