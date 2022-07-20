O JavaScript possui várias famílias de operadores aritméticos

- aritméticos ( + - \* / % \*\* )
- atribuição ( = )
- relacionais ( > < >= <= == != )
- lógicos ( ! = negação, && = conjunção, || = disjunção )
- ternário ( ? : )
- typeof

Ordem de precedência dos operadores aritméticos

- ( ) Parenteses primeiro
- \*\* Potências
- \* / % Multiplicação, Divisão e Resto da Divisão
- \+ \- Soma e Subtração

Ordem de precedência dos operadores lógicos

1. negação
2. conjunção
3. disjunção

Ordem de precedência dos operadores de forma geral

1. aritméticos
2. relacionais
3. lógicos

Auto-atribuição são atribuições a própria variável

```JavaScript
var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
```

Pode-se simplificar as auto-atribuições

```JavaScript
n+=4
n-=5
n*=4
n/=2
n**=2
n%=5
```