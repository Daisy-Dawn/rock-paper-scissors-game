const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));
function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if (player == computer){
        return "DRAW";
    }
    else if (computer == "ROCK"){
        if (player == "PAPER"){
            return "YOU WIN!";
        }
        else{
            return "YOU LOSE!"
        }
    }
    else if (computer == "SCISSORS"){
        if (player == "ROCK"){
            return "YOU WIN!"
        }
        else{
            "YOU LOSE!"
        }
    }
}