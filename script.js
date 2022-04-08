// Create a counter to keep track of the player and computer's scores, and target the score text nodes so you can update the UI.
let playerScore = 0;
const playerScoreText = document.querySelector('#player-score');
let computerScore = 0;
const computerScoreText = document.querySelector('#computer-score');

// Create a counter to keep track of the current round
let roundCount = 1;
const roundCountText = document.querySelector('#round')

// Target the result-text div so we can display who won after a round is played.
const resultText = document.querySelector('#result-text');

// Target the button nodes using selectors so you can run functions after they are clicked.
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

// Now that the nodes have been targeted, I can run the game's functions if they are clicked.
rockBtn.addEventListener("click", playerChoseRock);
paperBtn.addEventListener("click", playerChosePaper);
scissorBtn.addEventListener("click", playerChoseScissors);

// Create a function that will randomly return either 'rock', 'paper', or 'scissors' 
function computerPlay () {
    const options = ['rock', 'paper', 'scissors'];
    // Pick a random element from the options array using randomly generated index 
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Create a function that plays a single round of Rock Paper Scissors
// It should take in playerSelection and computerSelection as parameters and return a string that declares the winner
function playRound (playerSelection, computerSelection) {


    // Creating a helper function to declare the WINNER
    function playerWin (playerSelection, computerSelection) {
        // Increase the player's score by one if they win
        playerScore+=1;
        // Update the UI with the new player score
        playerScoreText.textContent = playerScore;
        // Update the UI with the new round number
        nextRound()
        // Update the UI with the results of the round
        resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return;
    }

    // Creating a helper function to declare the LOSER
    function playerLose (playerSelection, computerSelection) {
        // Increase the computer's score by one if the player loses
        computerScore+=1;
        // Update the UI with the new computer's score
        computerScoreText.textContent = computerScore;
        // Update the UI with the new round number
        nextRound();
        // Update the UI with the results of the round
        resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return;
    }

    // Creating a helper function to declare a draw!
    function declareDraw () {
        resultText.textContent = "It's a draw!"
        // Update the UI with the new round number
        nextRound();
        return;
    }

    // Creating a function to determine the winner based upon the player and computer's selection
    function determineWinner(selection) {
        // If the computer randomly chose the same option as the player did, it's a draw.
        if (computerSelection === playerSelection) {
            return declareDraw();
            // If the computer randomly chose the option that beats the player's choice, the player loses.
        } else if (computerSelection === selection) {
            return playerLose(playerSelection, computerSelection);
            // If the randomly chose the losing option, the player wins.
        } else {
            return playerWin(playerSelection, computerSelection);
        }
    }

    // Making the user's input case insensitive by turning their input lowercase regardless of how they typed it!
    playerSelection = playerSelection.toLowerCase()
    // Creating all the possible scenarios for if rock, paper, or scissors was chosen by the PLAYER
    switch (playerSelection) {
        // If the player chooses rock...
        case 'rock':
            return determineWinner('paper');
        // If the player chooses paper...
        case 'paper':
            return determineWinner('scissors');
        // If the player chooses scissors...
        case 'scissors':
            return determineWinner('rock');
    }
}

function nextRound() {
    if(roundCount < 5) {
        roundCount+=1
        roundCountText.textContent = roundCount;
    } else {
        prompt('GAME OVER')
        roundCount = 0;
        playerScore = 0;
        computerScore = 0;
        roundCountText.textContent = roundCount;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        return;
    }
    
}

function playerChoseRock() {
    playRound('rock', computerPlay());
}

function playerChosePaper() {
    playRound('paper', computerPlay());
}

function playerChoseScissors() {
    playRound('scissors', computerPlay());
}

