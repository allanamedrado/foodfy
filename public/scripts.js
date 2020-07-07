const recipes = document.querySelectorAll('.recipe')
const buttons = document.querySelectorAll('button')
const hidden = document.querySelector('.hide')

for (const recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute('id')        
        window.location.href = `/details/${recipeId}`
    })
}

for (const button of buttons) {
    button.addEventListener("click", function() {
        if (button.textContent == 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
            hidden.classList.add(active)
            hidden.classList.remove(desative)
        } else {
            button.innerHTML = 'ESCONDER'
            hidden.classList.add(active)
            hidden.classList.remove(desative)
        }
    })       
}




