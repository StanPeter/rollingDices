//select player's dices & rolling button & message box
const playerDice = document.querySelector("#img1");
const computerDice = document.querySelector("#img2");
const rollingBtn = document.querySelector("#rollingBtn");
const message = document.querySelector("#message");

//add Events
rollingBtn.addEventListener("click", gameRoll);

//add some margin in the beginning
function renderer() {
    playerDice.parentElement.classList.toggle("dice-space");
}

//generate a random 1-6 number
function randomRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

//main function
function gameRoll() {
    playerDice.parentElement.classList.remove("dice-space");
    const playerScore = randomRoll();
    const computerScore = randomRoll();

    playerDice.setAttribute("src", "images/dice" + playerScore + ".png");
    computerDice.setAttribute("src", "images/dice" + computerScore + ".png");

    messager(playerScore, computerScore);
}

//changing message
function messager(playerScore, computerScore) {
    if (playerScore > computerScore) message.textContent = "You won!";
    else if (computerScore > playerScore) message.textContent = "You lost. :(";
    else message.textContent = "Draw!";
}

renderer();