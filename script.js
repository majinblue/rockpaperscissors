// Create a function that will randomly return either 'rock', 'paper', or 'scissors' 
function computerPlay () {
    const options = ['rock', 'paper', 'scissors'];
    const hand = options[Math.floor(Math.random() * options.length)];
    return hand;
}

// Create a function that plays a single round of Rock Paper Scissors
// It should take in playerSelection and computerSelection as parameters and return a string that declares the winner
function playRound (playerSelection, computerSelection) {
    // Creating a helper function to declare the winner
    function declareWinner (playerSelection, computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    // Creating a helper function to declare the loser
    function declareLoser (playerSelection, computerSelection) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    // Creating a helper function to declare a draw!
    function declareDraw () {
        return `It's a draw!`
    }

    // Making the user's input case insensitive by turning their input lowercase regardless of how they typed it!
    playerSelection = playerSelection.toLowerCase()
    // Creating all the possible scenarios for if rock, paper, or scissors was chosen by the PLAYER
    switch (playerSelection) {
        // If the player chooses rock...
        case 'rock':
            if (computerSelection === playerSelection) {
                return declareDraw();
            } else if (computerSelection === 'paper') {
                return declareLoser(playerSelection, computerSelection);
            } else {
                return declareWinner(playerSelection, computerSelection);
            }
            break;
        // If the player chooses paper...
        case 'paper':
            if (computerSelection === playerSelection) {
                return declareDraw();
            } else if (computerSelection === 'scissors') {
                return declareLoser(playerSelection, computerSelection);
            } else {
                return declareWinner(playerSelection, computerSelection);
            }
            break;
        // If the player chooses scissors...
        case 'scissors':
            if (computerSelection === playerSelection) {
                return declareDraw();
            } else if (computerSelection === 'rock') {
                return declareLoser(playerSelection, computerSelection)
            } else {
                return declareWinner(playerSelection, computerSelection)
            }
    }
}



function game() {
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt('Please type one of the following options: rock, paper, or scissors', 'rock');
        console.log(playRound(playerSelection, computerPlay()))
    }
}

game();