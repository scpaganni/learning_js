let num = [ 5, 8, 2, 9, 3 ]
num[5] = 12
num.push(15)

for(let indice = 0; indice < num.length; indice++) {
  console.log(`A posição ${indice} tem o valor: ${num[indice]}`)
}

// Outra forma de escrever o código acima é:

for( let indice in num ) {
  console.log(num[indice])
}

// Pesquisando valores dentro do vetor; não é o número do índice e sim o elemento

num.indexOf(7)