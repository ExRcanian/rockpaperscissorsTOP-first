let playerScore = 0;
let compScore = 0;

function getCompChoice() {
    var selector = Math.floor(Math.random() * 3) + 1;
    let compChoice = 'None';
    if (selector == 1) {
        compChoice = 'rock';
        document.getElementById('cImg').src = './images/rock.png'
    } else if (selector == 2) {
        compChoice = 'paper';
        document.getElementById('cImg').src = './images/paper.png'
    } else {
        compChoice = 'scissors';
        document.getElementById('cImg').src = './images/scissors.png'
    }
    return compChoice;
}

let playerChoice = ''

function chooseRock() {
    document.getElementById('pImg').src = './images/rock.png'
    playerChoice = 'rock'
    compareScore()
    checkWinner()
}

function choosePaper() {
    document.getElementById('pImg').src = './images/paper.png'
    playerChoice = 'paper'
    compareScore()
    checkWinner
}

function chooseScissors() {
    document.getElementById('pImg').src = './images/scissors.png'
    playerChoice = 'scissors'
    compareScore()
    checkWinner()
}


function compareScore() {
    const compSelection = getCompChoice();
    if (playerChoice === compSelection) {
        return 'You tied!';
    } else if (playerChoice === 'rock' && compSelection === 'scissors') {
        playerScore++;
        document.getElementById('pScore').innerHTML = playerScore;
    } else if (playerChoice === 'rock' && compSelection === 'paper') {
        compScore++;
        document.getElementById('cScore').innerHTML = compScore;
    } else if (playerChoice === 'scissors' && compSelection === 'paper') {
        playerScore++;
        document.getElementById('pScore').innerHTML = playerScore;
    } else if (playerChoice === 'scissors' && compSelection === 'rock') {
        compScore++;
        document.getElementById('cScore').innerHTML = compScore;
    } else if (playerChoice === 'paper' && compSelection === 'rock') {
        playerScore++;
        document.getElementById('pScore').innerHTML = playerScore;
    } else {
        compScore++;
        document.getElementById('cScore').innerHTML = compScore;
    }
}

function checkWinner() {
    if (playerScore == 5) {
        document.getElementById('winner').innerHTML = "YOU WON THE GAME!";
        playerScore = 0     
        compScore = 0
        document.getElementById('pScore').innerHTML = playerScore;
        document.getElementById('cScore').innerHTML = compScore;
    } else if (compScore == 5) {
        document.getElementById('winner').innerHTML = "YOU LOST THE GAME!";
        playerScore = 0
        compScore = 0
        document.getElementById('pScore').innerHTML = playerScore;
        document.getElementById('cScore').innerHTML = compScore;
    }
}







