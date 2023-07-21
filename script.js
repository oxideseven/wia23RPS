//Global Game Variables
const choices = [`rock`, `paper`, `scissors`];
let aiSelection = undefined;
let playerSelection = undefined;
let playerScore = 0;
let aiScore = 0;
let currentRound = 0;

//AI makes a choice
function getComputerChoice() {
    aiSelection = Math.floor(Math.random() * choices.length);
}

//Get the players selection
function getPlayerChoice() {
    let askPlayer = prompt(`Rock, Paper, or Scissors?`);
    
    switch (askPlayer.toLowerCase()) {
        case `rock`:
            playerSelection = 0;
            console.log(`You picked rock;`);
            break;
        case `paper`:
            playerSelection = 1;
            console.log(`You picked paper;`);
            break;
        case `scissors`:
            playerSelection = 2;
            console.log(`You picked scissors;`);
            break;
        case null:
            console.log(`You've canceled... You're no fun.`);
            break;
        default:
            console.log(`Please try again`);
            getPlayerChoice();
    }
}

//Figure out a winner
function whoWon() {
    switch (true) {
        case (aiSelection === playerSelection):
            console.log(`Round ${currentRound} is a draw!`);
            break;
        case (aiSelection === 0 && playerSelection === 1) || (aiSelection === 1 && playerSelection === 2) || (aiSelection === 2 && playerSelection === 0):
            console.log(`You win round ${currentRound}, human.`);
            ++playerScore;
            break;
        case (aiSelection === 0 && playerSelection === 2) || (aiSelection === 1 && playerSelection === 0) ||(aiSelection === 2 && playerSelection === 1):
            console.log(`Behold meat vessel, my superior intelect has won me round ${currentRound}.`);
            ++aiScore;
            break;
    }
}

//Play a round
function playRound() {
    ++currentRound;
    getComputerChoice();
    getPlayerChoice();
    console.log(`I have selected ${choices[aiSelection]}.`);
    whoWon();
    isGameOver();
};

function isGameOver() {
    if (currentRound == 5 && playerScore > aiScore) {
        console.log(`You've won this game human. Perhaps you're actually an AI?. ${playerScore} to ${aiScore}`);
        resetGame();
    } else if (currentRound == 5 && playerScore < aiScore) {
        console.log(`Flesh creature, it's over. I have won. ${aiScore} to ${playerScore}`);
        resetGame();
    } else if (currentRound == 5 && playerScore == aiScore) {
        console.log(`We are evenly matched. There may be hope for you yet. ${aiScore} to ${playerScore}`);
        resetGame();
    }
    else {
        playRound();
    }
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    currentRound = 0;
}

function playGame() {
    playRound();
}