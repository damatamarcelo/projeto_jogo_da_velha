let x = document.querySelector(".x")
let o = document.querySelector(".y")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secoundPlayer;

// Contador de jogadas
let player1 = 0
let player2 = 0

// Adcionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // Quando alguém clica na caixa
    boxes[i].addEventListener("click", function () {
        let el = checkEl(player1, player2)

        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)

            // Computando a jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
        }
    })
}

// Verifica quem vai jogar
function checkEl(player1, player2) {
    if (player1 == player2) {
        // x
        el = x
    } else {
        // o
        el = o
    }

    return el
}
