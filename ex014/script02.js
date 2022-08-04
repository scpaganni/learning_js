// Descobrindo se um número é par ou ímpar
function parimpar(n) {
  if (n % 2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

let resultado = parimpar(8)
console.log(resultado)

// Fatorial de um número

function fatorial(n) {
  let fatorial = 1
  for(let c = n; c > 1; c--) {
    fatorial *= c
  }
  return fatorial
}

console.log(fatorial(6))