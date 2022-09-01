function getComputerChoice() {
  str = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * str.length);
  let selection = str[index];
  console.log(selection);
}
let computerSelection = getComputerChoice();

let playerSelection = prompt("Rock", "Paper", "Scissors");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper")
    result = "You lost! Paper Wins";
  else if (playerSelection === "rock" && computerSelection === "scissors") {
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You won! Scissors beat paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You lost! Scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You lost! Rock beats Scissors";
  } else result = "Game over";
}
console.log(playRound(playerSelection, computerSelection));
