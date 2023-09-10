const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const selections = document.querySelectorAll('.selections')

let player
let computer
let result
let playerWin = "You Win!"
let playerLose = "You Lose!"
let gameTie = "It's a Tie!"

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
    if (player ==  computer){
        return gameTie}

    else if (player == "✊" && computer == "✋"){
        return playerLose}
    
    else if (player == "✊" && computer == "✌️"){
        return  playerWin}
    
    else if (player == "✋" && computer == "✌️"){
        return playerLose}

    else if (player == "✋" && computer == "✊"){
        return playerWin}
    
    else if (player == "✌️" && computer == "✊"){
        return playerLose}

    else if (player == "✌️" && computer == "✋"){
        return playerWin}
}