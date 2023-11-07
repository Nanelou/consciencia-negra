function mostrarMensagem() {
    var mensagem = document.getElementById("mensagem");
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
}
