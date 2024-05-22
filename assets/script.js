document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("text");
    text.textContent = "Clique no 🤍 para uma surpresa!";

    // Propriedades do envelope
    let envelopeImg = document.getElementById("envolpe_img");
    let img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/liviavianna/pedido_date_py/main/envelope.png";
    img.width = 200;
    img.height = 200;

    // Adicionando a imagem do envelope ao elemento do envelope
    envelopeImg.appendChild(img);

    // Tornando a imagem clicável
    img.addEventListener("click", openDialogModal);

    // Propriedades do botão
    let button = document.getElementById("button");
    button.addEventListener("click", openDialogModal);

    // Propriedades do diálogo
    let dialog = document.getElementById("dialog");

    // Função para abrir o diálogo modal
    function openDialogModal() {
        dialog.innerHTML = `<div class='dialog'>
            <h2>Só pode dizer sim!!!</h2>
            <p>Quer namorar comigo para sempre? 💍</p>
            <div class="buttons">
            <button id='yes'>Sim</button>
            <button id='no'>Não</button>
            </div>
            </div>`;

        // Caixa do diálogo
        let dialogBox = document.querySelector(".dialog");
        dialogBox.style.display = "block";

        // Botão do sim
        let yesButton = document.getElementById("yes");

        // Botão do não
        let noButton = document.getElementById("no");
        noButton.addEventListener("click", openDialog);
        yesButton.addEventListener("click", function (e) {
            if (e.target === yesButton) {
                dialogBox.style.display = "none";
            }
        });
    }

    // Função para fechar o diálogo
    function closeDialog() {
        let dialogBox = document.querySelector(".dialog");
        dialogBox.style.display = "none";
    }

    // Função para abrir o diálogo quando a pessoa clicar em "Não"
    function openDialog() {
        dialog.innerHTML = `<div class='dialog'>
            <div class="fecharModal"><p class="fecharModalP">X</p></div>
            <h2>Resposta errada! Diga sim logo!</h2>
            </div>`;
        let dialogBox = document.querySelector(".dialog");
        dialogBox.style.display = "block";
        let fecharModalBox = document.querySelector(".fecharModalP");
        fecharModalBox.addEventListener("click", function (e) {
            if (e.target === fecharModalBox) {
                dialogBox.style.display = "none";
            }
        });
    }
});
