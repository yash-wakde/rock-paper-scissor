const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
const resultText = document.querySelector('.resultText');
const selectionButtons = document.querySelectorAll('[data-selection]');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let player = 0;
let computer = 0;
const maxScore = 5; 

let playerWin = "You Win!";
let playerLose = "You Lose!";
let gameTie = "It's a Tie!";

selectionButtons.forEach(selection => {
    selection.addEventListener('click', e => {
        if (player < maxScore && computer < maxScore) {
            const playerChoice = selection.textContent;
            const computerChoice = getComputerChoice();
            playerText.textContent = `You : ${playerChoice}`;
            computerText.textContent = `Computer : ${computerChoice}`;
            const roundResult = playRound(playerChoice, computerChoice);
            resultText.textContent = roundResult;

            if (player === maxScore || computer === maxScore) {
                announceWinner();
            }
        }
    });
});

function getComputerChoice() {
    const items = ["✊", "✋", "✌️"];
    const answer = items[Math.floor(Math.random() * items.length)];
    return answer;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return gameTie;
    } else if (
        (playerChoice === "✊" && computerChoice === "✋") ||
        (playerChoice === "✋" && computerChoice === "✌️") ||
        (playerChoice === "✌️" && computerChoice === "✊")
    ) {
        computer++;
        computerScore.innerText = computer;
        return playerLose;
    } else {
        player++;
        playerScore.innerText = player;
        return playerWin;
    }
}

function announceWinner() {
    if (player === maxScore) {
        resultText.textContent = "You have won the game!";
    } else {
        resultText.textContent = "Computer has won the game!";
    }

    selectionButtons.forEach(selection => {
        selection.removeEventListener('click', () => {});
        selection.disabled = true;
    });
}
