//Global Game Variables
const choices = [`Rock`, `Paper`, `Scissors`];
let aiSelection = undefined;
let playerSelection = undefined;
let playerScore = 0;
let aiScore = 0;
let currentRound = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id);
    });
});

const currentRoundText = document.getElementById("currentRound");
const playerChoiceText = document.getElementById("playerChoice");
const aiChoiceText = document.getElementById("aiChoice");  
const roundResultText = document.getElementById("roundResults");
const gameScoreText = document.getElementById("gameScore")
const gameWinnerText = document.getElementById("gameResult");

//AI makes a choice
function getComputerChoice() {
    aiChoiceText.innerHTML = `AI Choice: `;
    aiSelection = Math.floor(Math.random() * choices.length);
}

//Get the players selection
function getPlayerChoice(buttonPressed) {
    playerChoiceText.innerHTML = "Player Choice: ";    
    switch (buttonPressed) {
        case `rock`:
            playerSelection = 0;
            break;
        case `paper`:
            playerSelection = 1;
            break;
        case `scissors`:
            playerSelection = 2;
            break;
    }
}

//Figure out a winner
function whoWon() {
    roundResultText.innerHTML = `Round Winner: `;
    console.log(`Player: ${playerScore} | AI ${aiScore}`)
    switch (true) {
        case (aiSelection === playerSelection):
            roundResultText.innerHTML += `Draw`;
            break;
        case (aiSelection === 0 && playerSelection === 1) || (aiSelection === 1 && playerSelection === 2) || (aiSelection === 2 && playerSelection === 0):
            roundResultText.innerHTML += `Player`;
            ++playerScore;
            break;
        case (aiSelection === 0 && playerSelection === 2) || (aiSelection === 1 && playerSelection === 0) ||(aiSelection === 2 && playerSelection === 1):
            roundResultText.innerHTML += `AI`;
            ++aiScore;
            break;
    }
}

//Play a round
function playRound(buttonPressed) {
    ++currentRound;
    getComputerChoice();
    getPlayerChoice(buttonPressed);
    whoWon();
    updateText();
    isGameOver();
};

function updateText() {
    currentRoundText.innerHTML = `Round: ${currentRound}`;
    playerChoiceText.innerHTML += choices[playerSelection];
    aiChoiceText.innerHTML += choices[aiSelection];
    gameScoreText.innerHTML = `Player: ${playerScore} | AI: ${aiScore}`;
}

function isGameOver() {
    gameWinnerText.innerHTML = `Game Winner: `;
    if ((playerScore === 5) || (aiScore === 5)){
        if (playerScore > aiScore) {
            gameWinnerText.innerHTML += `Player`;
            resetGame();
        } else if (playerScore < aiScore) {
            gameWinnerText.innerHTML += `AI`;
            resetGame();
        } else if (playerScore == aiScore) {
            gameWinnerText.innerHTML += `Draw`;
            resetGame();
        }
    }
    
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    currentRound = 0;
}