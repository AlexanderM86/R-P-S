const choices = ["rock","paper","scissors"]

function game() {
    playround();
}

function playround(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const Winner = checkWinner(playerSelection,computerSelection);
    console.log(Winner)
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null){
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization dosent matter"
        );
        while (input == null){
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase()
        check = validateInput(input)
    }
  //console.log(input);
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}


function checkWinner(choiceP, choiceC){
    if(choiceP === ChoiceC){
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper")
        ) { 
        return "player";
    } else{
        return "computer"
    }
}

game()