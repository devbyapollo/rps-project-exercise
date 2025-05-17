let humanScore = 0;
let computerScore = 0;

function getComputerChoice(str1 = "rock", str2 = "paper", str3 = "scissors") {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return str1;
  } else if (random === 2) {
    return str2;
  } else {
    return str3;
  }
}

function getHumanChoice() {
  let humanPk = prompt("Your turn: ");
  let userChoice = humanPk.toLowerCase();
  return userChoice;
}

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice == computerChoice) {
//     console.log("Draw! Try again");
//   } else if (humanChoice == "rock" && computerChoice == "scissors") {
//     console.log("You win!, rock beats scissors.");
//     humanScore++;
//   } else if (computerChoice == "rock" && humanChoice == "scissors") {
//     console.log("You lose!, rock beats scissors.");
//     computerScore++;
//   } else if (humanChoice == "scissors" && computerChoice == "paper") {
//     console.log("You win!, scissors cuts paper.");
//     humanScore++;
//   } else if (computerChoice == "scissors" && humanChoice == "paper") {
//     console.log("You lose!, scissors cuts paper.");
//     computerScore++;
//   } else if (humanChoice == "paper" && computerChoice == "rock") {
//     console.log("You win!, paper beats rock");
//     humanScore++;
//   } else {
//     console.log("You lose!, paper beats rock.");
//     computerScore++;
//   }

//   playRound(humanSelection, computerSelection);
// }

// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Draw! Try again");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win!, rock beats scissors.");
      humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("You lose!, rock beats scissors.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win!, scissors cuts paper.");
      humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("You lose!, scissors cuts paper.");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win!, paper beats rock");
      humanScore++;
    } else {
      console.log("You lose!, paper beats rock.");
      computerScore++;
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    return alert(
      "You won! " +
        "Your score: " +
        humanScore +
        " " +
        "Computer score: " +
        computerScore
    );
  } else if (humanScore < computerScore) {
    return alert(
      "You lose! " +
        "Your score: " +
        humanScore +
        " " +
        "Computer score: " +
        computerScore
    );
  } else {
    return alert(
      "Draw! " +
        "Your score: " +
        humanScore +
        " " +
        "Computer score: " +
        computerScore
    );
  }
}

playGame();
