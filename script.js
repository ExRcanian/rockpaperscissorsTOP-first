let playerScore = 0;
let compScore = 0;

function getCompChoice() {
    var selector = Math.floor(Math.random() * 3) + 1;
    let compChoice = 'None';
    if (selector == 1) {
        compChoice = 'rock';
    } else if (selector == 2) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    return compChoice;
}


function playRound(playerChoice, compSelection) {
    if (playerChoice === compSelection) {
        return 'You tied!';
    } else if (playerChoice === 'rock' && compSelection === 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
    } else if (playerChoice === 'rock' && compSelection === 'paper') {
        compScore++;
        return 'You Lose! Paper beats Rock';
    } else if (playerChoice === 'scissors' && compSelection === 'paper') {
        playerScore++;
        return 'You Win! Scissors beats paper';
    } else if (playerChoice === 'scissors' && compSelection === 'rock') {
        compScore++;
        return 'You Lose! Rock beats Scissors';
    } else if (playerChoice === 'paper' && compSelection === 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    } else {
        compScore++;
        return 'You Lose! Scissors beats Paper';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        const compSelection = getCompChoice();
        console.log(playRound(playerChoice, compSelection))
    }

    if (playerScore > compScore) {
        console.log('You are the winner!!!');
    } else if (playerScore < compScore) {
        console.log('You are the loser!!!');
    } else {
        console.log(' You tied with the computer!!!');
    }
}

game();






