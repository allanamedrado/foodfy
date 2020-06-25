const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')
const button = document.querySelector('.close-modal')

for (const card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute('id')
        const title = card.querySelector('h4').textContent
        const autor = card.querySelector('p').textContent
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src=`/assets/${imageId}.png`
        modalOverlay.querySelector('.info-content h4').innerHTML = title
        modalOverlay.querySelector('.info-content p').innerHTML = autor
    })
}

button.addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})


