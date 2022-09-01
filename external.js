function getComputerChoice() {
  str = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * str.length);
  let selectionR = str[index];
  let selectionL = selectionR.toLowerCase();
  return selectionL;
}
let computerSelection = getComputerChoice();

let SelectionP = prompt("rock", "paper", "scissors");
let playerSelection = SelectionP.toLowerCase();
//console.log(playerSelection);
//console.log(computerSelection);
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    // (playerSelection == "rock" && computerSelection == "paper")
    //console.log("You lost! Paper Wins");
    return "You lost! Paper Wins";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You won! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You won! Scissors beat paper";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lost! Scissors beat paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lost! Rock beats Scissors";
  } else {
    return "Game over";
  }
}

//console.log(playerSelection);
//console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
