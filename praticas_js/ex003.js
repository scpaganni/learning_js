// Objetos

const person = {
    firstName: "Sergio",
    lastName: "Pagani",
    age: "37",
    games: ["Destiny", "FH5", "Assassins Creed", "Monster Hunter"]
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.games[3])

// Adicionando um novo objeto
person.cidade = "Vilhena"

console.log(person)

// Exemplos de objetos dentro de vetor
const todo = [
    {
        id: 1,
        description: "Estudar Programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler Jardim das Aflições",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Comprar Ideapad",
        isCompleted: false,
    }
]

// Acessando um índice dentro do objeto
console.log(todo[2])
console.log(todo[2].description)

// Transformando um objeto JS em JSON
const formatoJSON = JSON.stringify(todo)
console.log(formatoJSON)

// Transformando JSON em objeto JS
const todosJSON = JSON.parse(formatoJSON)
console.log(todosJSON)