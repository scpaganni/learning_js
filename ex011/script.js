document.addEventListener("load", carregar)

function carregar() {
    var msg = window.document.getElementById("msg");
    var trocaImagem = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto} horas`;
    if (hora >= 0 && hora < 12) {
      // Bom dia
      trocaImagem.scr = "imagens/manha.jpg";
      document.body.style.background = "#e2cd9f";
    } else if (hora >= 12 && hora < 18) {
      // Boa tarde
      trocaImagem.src = "imagens/tarde.jpg";
      document.body.style.background = "#b9846f";
    } else {
      // Boa noite
      trocaImagem.src = "imagens/noite.jpg";
      document.body.style.background = "#515154";
    }
  }