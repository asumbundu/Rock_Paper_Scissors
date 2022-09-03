function getComputerChoice() {
  str = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * str.length);
  let selectionR = str[index];
  let selectionL = selectionR.toLowerCase();
  return selectionL;
}
let computerSelection = getComputerChoice();
let PlayerScore = 0;
let ComputerScore = 0;
let SelectionP = prompt("rock", "paper", "scissors");
let playerSelection = SelectionP.toLowerCase();
//console.log(playerSelection);
//console.log(computerSelection);
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    // (playerSelection == "rock" && computerSelection == "paper")
    //console.log("You lost! Paper Wins");
    //return "You lost! Paper Wins";
    return "Player wins";
    //ComputerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player wins";
    //return "You won! Rock beats Scissors";
    // PlayerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    //return "You won! Scissors beat paper";
    return "Player wins";

    // PlayerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Compputer wins";
    //return "You lost! Scissors beat paper";
    //ComputerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer wins";
    //return "You lost! Rock beats Scissors";
    // ComputerScore++;
  } else {
    return "Game over";
  }
}

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    //let playerSelection = SelectionP.toLowerCase();
  
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) == "Player wins")
      PlayerScore++;
    else if (playRound(playerSelection, computerSelection) == "Computer wins")
      ComputerScore++;
      else 
      return 
  }
}
console.log(playRound(playerSelection, computerSelection));
console.log(PlayerScore);
console.log(ComputerScore);
