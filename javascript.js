function getComputerChoice(){
    let items = ["rock","paper","scissors"];
    let result = items[Math.floor(Math.random()*items.length)];
    return result;
}


function playRound(){
    if (playerSelection == "rock" && computerSelection == "paper"){
    return "You Lose! Paper beats Rock!";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return  "You Win! Rock beats Scissors";
    }

    else if (playerSelection == "rock" && computerSelection == "rock"){
        return "It's a Tie!";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beat Paper";
    }

    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }

    else if (playerSelection == "paper" && computerSelection == "paper"){
        return "It's a Tie!"
    }

    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "It's a Tie!";
    }

    else {
        return "Not a Valid Input";
    }
}

let playerSelection = prompt("Enter Rock, Paper or Scissors : ").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));