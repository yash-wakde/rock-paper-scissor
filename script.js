const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const selections = document.querySelectorAll('.selections')

let player;
let computer;
let result;

selections.forEach(button)(button => addEventListener('click', () => {
    player = button.textContent
    computer = getComputerChoice()
    playerText.textContent = `You : ${player}`
    computerText.textContent = `Computer : ${computer}`
    resultText.textContent = playRound()
}))

function getComputerChoice(){
    let items = ["✊","✋","✌️"]
    let answer = items[Math.floor(Math.random()*items.length)]
    return answer
}

function playRound(){
    if (playerSelection == "rock" && computerSelection == "paper"){
        return playerLose;}
    
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return  playerWin;}
    
    else if (playerSelection == "rock" && computerSelection == "rock"){
        return gameTie;}
    
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return playerLose;}

    else if (playerSelection == "paper" && computerSelection == "rock"){
        return playerWin;}

    else if (playerSelection == "paper" && computerSelection == "paper"){
        return gameTie;}
    
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return playerLose;}

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return playerWin;}

    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return gameTie;}
}