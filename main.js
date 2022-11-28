const choices = ["rock","paper","scissors"]
function game() {
    playround();
}

function playround(){
    const playerSelection = playerChoice();
    const computerselection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


game()