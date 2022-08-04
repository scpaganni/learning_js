Vídeo sobre esses assuntos: https://youtu.be/mc3TKp2XzhI

Variáveis simples só conseguem armazenar um valor por vez

Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura

Um array/vetor é uma variável que contém vários elementos e cada elemento é composto por seu valor e por uma chave de identificação

```JavaScript
let num = [5, 6, 7, 8, 9]
```

Toda função pode ter os seguintes fatores: uma chamada, um conjunto de parâmetros, ação e retorno. Nem toda função usa parâmetros e nem toda função tem retornos:

```JavaScript
function ação(param) {
  return resultado
}

ação 5
```
Exemplo de função para descobrir se um número é par ou impar

```JavaScript
// Criando a função
function parimpar(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'impar'
  }
}
// Chamando a função e passando como parâmetro o número 11
let resultado = parimp(11)
```