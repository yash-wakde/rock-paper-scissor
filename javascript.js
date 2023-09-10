
let playerWin = "You Win!";
let playerLose = "You Lose!";
let gameTie = "It's a Tie!";

let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    let items = ["rock","paper","scissors"];
    let result = items[Math.floor(Math.random()*items.length)];
    return result;
}


function playRound(){
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper"){
        compScore += 1;
        return playerLose;
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return  playerWin;
    }
    
    else if (playerSelection == "rock" && computerSelection == "rock"){
        playerScore += 1;
        compScore += 1;
        return gameTie;
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        compScore += 1;
        return playerLose;
    }

    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return playerWin;
    }

    else if (playerSelection == "paper" && computerSelection == "paper"){
        playerScore += 1;
        compScore += 1;
        return gameTie;
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        compScore += 1;
        return playerLose;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return playerWin;
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        playerScore += 1;
        compScore += 1;
        return gameTie;
    }
    
    else {
        return "Not a Valid Input";
    }
}

function game(){
    for (let i=0; i<5; i++){
        console.log(playRound());
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    }
     
    if (playerScore > compScore){
        console.log("You won the game!");
    }
    else if (compScore > playerScore){
        console.log("You lost the game!");
    }

    else {
        console.log("The game is a Tie!");
    }
}


// game();