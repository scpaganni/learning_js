// Arrays

// Criando um Array
const names = ["Felipe", "João", "Sergio", "Thiago"]

// Adicionando um elemento na última posição do array
names.push("Pedro")

// Adicionando um elemento na primeira posição do array
names.unshift("Maria")

// Acessando todo o array
console.log(names)

// Acessando uma posição específica do array
console.log(names[3])

// Acessando a quantidade índices dentro de uma lista
console.log(names.length)

// Acessando o índice de um elemento
console.log(names.indexOf("Thiago"))

// Colocando em ordem alfabética um array
console.log(names.sort())

// Verificando se um array é mesmo um array
let verificaArray = Array.isArray(names)
console.log(verificaArray)