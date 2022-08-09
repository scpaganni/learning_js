// Selecionando Elementos dentro do HTML


// Selecionando através do query selector
const addUserText = document.querySelector("h1#add-user")
console.log(addUserText)

// Alterar o elemento 'Add User'
addUserText.textContent = "Adicionar usuário"
addUserText.style.color = "blue"
addUserText.style.background = "pink"
addUserText.style.textAlign = "center"
addUserText.style.textTransform = "capitalize"

// Selecionando o botão Submit
const button = document.querySelector("input.btn")
button.style.background = "red"
button.style.color = "black"
button.style.textTransform = "uppercase"

// Pegando Eventos no HTML
const submitButton = document.querySelector("input.btn")
const nameInput = document.querySelector("input#name")
const mailInput = document.querySelector("input#email")

const items = document.querySelector("ul.items")

const nameValue = nameInput.value
const mailValue = mailInput.value


button.addEventListener("click", function(event) {
    event.preventDefault() // Impede que o evento click recarregue a página
    console.log(nameValue) // Fazendo o debug no console
    console.log(mailValue) // Fazendo o debug no console
    items.firstElementChild.textContent = nameValue
    items.children[1].textContent = mailValue
})