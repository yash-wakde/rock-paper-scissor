const playerText = document.querySelector('.playerText')
const computerText = document.querySelector('.computerText')
const resultText = document.querySelector('.resultText')
const selectionButtons = document.querySelectorAll('[data-selection]')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')

let player
let computer
let result
let playerWin = "You Win!"
let playerLose = "You Lose!"
let gameTie = "It's a Tie!"

selectionButtons.forEach(selection =>{
    selection.addEventListener('click', e =>{
        player = selection.textContent 
        computer = getComputerChoice()
        playerText.textContent = `You : ${player}`
        computerText.textContent = `Computer : ${computer}`
        resultText.textContent = playRound()
    })
})

function getComputerChoice(){
    let items = ["✊","✋","✌️"]
    let answer = items[Math.floor(Math.random()*items.length)]
    return answer
}

function playRound(){
    if (player ==  computer){
        return gameTie}

    else if (player == "✊" && computer == "✋"){
        computerScore.innerText = parseInt(computerScore.innerText)+1
        return playerLose}
    
    else if (player == "✊" && computer == "✌️"){
        playerScore.innerText = parseInt(playerScore.innerText)+1
        return  playerWin}
    
    else if (player == "✋" && computer == "✌️"){
        computerScore.innerText = parseInt(computerScore.innerText)+1
        return playerLose}

    else if (player == "✋" && computer == "✊"){
        playerScore.innerText = parseInt(playerScore.innerText)+1
        return playerWin}
    
    else if (player == "✌️" && computer == "✊"){
        computerScore.innerText = parseInt(computerScore.innerText)+1
        return playerLose}

    else if (player == "✌️" && computer == "✋"){
        playerScore.innerText = parseInt(playerScore.innerText)+1
        return playerWin}
}