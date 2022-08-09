// Loop com for
for (let index = 0; index <= 10; index++) {
    console.log(index)
}

// Listando itens de um array com for
const cars = ["Ferrari", "BMW", "Porsche", "Volvo", "Toyota"]
for (index = 0; index < cars.length; index++) {
    console.log(cars[index])
}

// Listando itens de um array com for
const carros = ["Ferrari", "BMW", "Porsche", "Volvo", "Toyota"]
for (let car of carros) {
    console.log(car)
}

// Listando itens de um array com for
const automoveis = ["Ferrari", "BMW", "Porsche", "Volvo", "Toyota"]
automoveis.forEach(function(car) {
    console.log(car)
})

// Listando itens dentro de um objeto com for
const person = {
    name: "Fábio",
    age: 27,
    food: "Picanha",
    car: "Porsche"
}
for (property in person) {
    console.log(property + person[property])
}

// Loop com while
let index = 0
while (index < 10) {
    console.log(`${index} é menor do que 10`)
    index++
}