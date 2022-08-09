// Map, Filter e Reduce
// Map
/* O método map() permite percorrer um vetor e obter um novo vetor cujos itens são o resultado de uma função de callback que recebe como parâmetro cada item original. */

const numbers = [1, 2, 3, 4, 5]


const multiplicaPorDois = numbers.map(function (number) {
    return number * 2
})

console.log(numbers)
console.log(multiplicaPorDois)


// Filter
/* O método filter() cria um novo vetor com os elementos do vetor original desde que satisfaçam a um determinado critério */
const idades = [8, 13, 20, 33, 51, 60, 72]

const evenAges = idades.filter(function (age){
    return age % 2 === 0
})

console.log(evenAges)

// Reduce
/* O método reduce() executa uma função, como o nome sugere, de reduzir todos os elementos de um array em um único valor. Nesse exemplo o reduce aceita dois parâmetros, o total e o currentValue. Quando o laço começa, o valor total é o número na extrema esquerda (8) e o currentValue é o número ao seu lado (13)
 */
const ages = [8, 13, 20, 33, 51, 60, 72]

const sumOfAges = ages.reduce(function (total, currentValue) {
    return total + currentValue
}, 0)

console.log(sumOfAges)

// Exemplo de fixação do reduce()
var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
console.log(`${original} array original`);
return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)