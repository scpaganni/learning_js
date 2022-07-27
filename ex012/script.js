function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var dataNascimento = document.getElementById('anoNascimento')
  var mostraResultado = document.getElementById('resultado')


  if (dataNascimento.value.length == 0 || dataNascimento.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {

    var pegaGenero = document.getElementsByName('radsex')
    var pegaIdade = ano - Number(dataNascimento.value)
    var mostraGenero = ''
    var criaImagem = document.createElement('img')
    criaImagem.setAttribute('id', 'foto')

    if (pegaGenero[0].checked) {
      mostraGenero = 'Homem'
      if (pegaIdade >= 0 && pegaIdade < 10) {
        // Criança
        criaImagem.setAttribute('src', 'img/foto-bebe-m.png')
      } else if (pegaIdade < 21) {
        // Jovem
        criaImagem.setAttribute('src', 'img/foto-jovem-m.png')
      } else if (pegaIdade < 50) {
        // Adulto
        criaImagem.setAttribute('src', 'img/foto-adulto-m.png')
      } else {
        // Idoso
        criaImagem.setAttribute('src', 'img/foto-idoso-m.png')
      }
    } else if (pegaGenero[1].checked) {
      mostraGenero = 'Mulher'
      if (pegaIdade >= 0 && pegaIdade < 10) {
        // Criança
        criaImagem.setAttribute('src', 'img/foto-bebe-f.png')
      } else if (pegaIdade < 21) {
        // Jovem
        criaImagem.setAttribute('src', 'img/foto-jovem-f.png')
      } else if (pegaIdade < 50) {
        // Adulto
        criaImagem.setAttribute('src', 'img/foto-adulto-f.png')
      } else {
        // Idoso
        criaImagem.setAttribute('src', 'img/foto-idoso-f.png')
      }
    }
    mostraResultado.style.textAlign = 'center'
    mostraResultado.innerHTML = `Detectamos ${mostraGenero} com ${pegaIdade} anos`
    mostraResultado.appendChild(criaImagem)
  }
}