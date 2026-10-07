const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent = "Você clicou no botão! 🎉";
    mensagem.style.color = "blue";
    document.body.style.backgroundColor = "#f0f8ff";
});