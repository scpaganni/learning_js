// Condicional com if..else
/* A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Sintaxe
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
} */

// Verificando a cor do semáforo
const semaforo = "vermelho"
if (semaforo == "verde") {
    console.log(`Sinal ${semaforo}: CONTINUE`)
} else if (semaforo == "amarelo") {
    console.log(`Sinal ${semaforo}: ATENÇÃO`)
} else if (semaforo == "vermelho") {
    console.log(`Sinal ${semaforo}: PARE`)
}

// Verificando CPF
const cpf = "123.456.789.01"
if (cpf.length == 14) {
    console.log(`O CPF ${cpf} é válido`)
} else {
    console.log(`O CPF ${cpf} é inválido`)
}

// Condicional com switch
/* A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.

Sintaxe:
switch(expressão){
    case n1:
       bloco de código 1
       break;

    case n2:
      bloco de código 2
      break;
    default:
      bloco de código 3
   } */

// Verificando a estação
let month = "Maio"
switch (month) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}


// Verificando mês
let mes = 1
let nomeMes = ""

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente"
}
console.log(`O mês atual é ${nomeMes}`)