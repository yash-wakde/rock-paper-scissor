function getComputerChoice(){
    let items = ["rock","paper","scissors"];
    let result = items[Math.floor(Math.random()*items.length)];
    return result;
}


function playRound(){
    let playerSelection = prompt("Enter Rock, Paper or Scissors : ").toLowerCase();
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper")
    console.log("You Lose! Paper beats Rock!")

    else if (playerSelection == "rock" && computerSelection == "scissors")
    console.log("You Win! Rock beats Scissors")

    else if (playerSelection == "rock" && computerSelection == "rock")
    console.log("It's a Tie!")

    else if (playerSelection == "paper" && computerSelection == "scissors")
    console.log("You Lose! Scissors beat Paper")

    else if (playerSelection == "paper" && computerSelection == "rock")
    console.log("You Win! Paper beats Rock")

    else if (playerSelection == "paper" && computerSelection == "paper")
    console.log("It's a Tie!")

    else if (playerSelection == "scissors" && computerSelection == "rock")
    console.log("You Lose! Rock beats Scissors")

    else if (playerSelection == "scissors" && computerSelection == "paper")
    console.log("You Win! Scissors beats Paper")

    else if (playerSelection == "scissors" && computerSelection == "scissors")
    console.log("It's a Tie!")

    else console.log("Invalid input")
}

playRound();