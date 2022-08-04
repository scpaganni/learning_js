function tabuada () {
  var nFator = document.getElementById('nFator')
  var nProduto = document.getElementById('nProduto')

  if ( nFator.value.length == 0 ) {
    window.alert(`Digite um número válido`)
  } else {
    var fator = Number(nFator.value)
    var c = 1
    nProduto.innerHTML = ''
    while ( c <= 10 ) {
      var item = document.createElement('option')
      item.text = `${fator} x ${c} = ${fator * c}`
      nProduto.appendChild(item)
      c++
    }
  }
}
