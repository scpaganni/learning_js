// Arrow functions
/* Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). */

// Considere o exemplo
function soma (a, b) {
    return a + b
  }
console.log(soma(1, 2))

// Esta mesma função pode ser escrita como uma arrow function
const soma = (a, b) => {
    return a + b
  }
console.log(soma(1, 2))