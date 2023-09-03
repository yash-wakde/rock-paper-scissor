function getComputerChoice(){
    let items = ["Rock","Paper","Scissors"];
    let result = items[Math.floor(Math.random()*items.length)];
    console.log(result)
}

getComputerChoice();