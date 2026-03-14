document.querySelectorAll(".botao-mais").forEach(botao => {
    botao.addEventListener("click", () => {
        const descricao = botao.previousElementSibling;

        descricao.classList.toggle("expandida");

        if (descricao.classList.contains("expandida")) {
            botao.textContent = "mostrar menos";
        } else {
            botao.textContent = "...mais";
        }
    });
});