const recipes = document.querySelectorAll('.recipe')
const buttons = document.querySelectorAll('button')
const hidden = document.querySelectorAll('.hide')

for (const recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute('id')        
        window.location.href = `/details/${recipeId}`
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (buttons[i].textContent == 'ESCONDER') {
            buttons[i].innerHTML = 'MOSTRAR'
            hidden[i].classList.add('active')
        } else {
            buttons[i].innerHTML = 'ESCONDER'
            hidden[i].classList.remove('active')
        }
    })    
}






