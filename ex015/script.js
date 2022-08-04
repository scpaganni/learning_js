/* Essa função pega um número inicial e um número final e faz uma contagem em intervalos definidos no passo. A contagem pode ser feita tanto em ordem crescente quanto em ordem decrescente */

function contar() {
  var numInicial = document.getElementById('nInicial')
  var numFinal = document.getElementById('nFinal')
  var numIncremento = document.getElementById('nPasso')
  var numSoluçao = document.getElementById('resultado')

  if (numInicial.value.length == 0 || numFinal.value.length == 0 || numIncremento.value.length == 0) {
    numSoluçao.innerHTML = `Impossível contar, faltam dados`
  } else {
    numSoluçao.innerHTML = `Contando...`
    var i = Number(numInicial.value)
    var f = Number(numFinal.value)
    var s = Number(numIncremento.value)

    // Verificando o valor do incremento
    if (s == 0 ) {
      window.alert(`In(De)cremento Inválido! Atribuindo Incremento 1`)
      s = 1
    }

    if (i < f) {
      // Contagem crescente
      for (var c = i; c <= f; c += s) {
        numSoluçao.innerHTML += `\u{1F449} ${c} `
      }
    } else {
      // Contagem decrescente
      for (var c = i; c >= f; c -= s) {
        numSoluçao.innerHTML += `\u{1F449} ${c} `
      }
    }
  }
}