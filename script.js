let humanScore = 0;
let computerScore = 0;
const results = document.getElementById("results");
const urScore = document.getElementById("your-score");
const compScore = document.getElementById("comp-score");
const buttons = document.querySelector(".buttons");
let clicks = 0;

function getComputerChoice(){
    let randNum = Math.random() * 100;
    if(0 <= randNum && randNum < 33){
        return "rock";
    }else if(33 <= randNum && randNum < 66){
        return "paper"
    }else if(66 <= randNum && randNum < 100){
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    let result = null;

    if(humanChoice === ("ROCK")){
        if(computerChoice === ("ROCK")){
            result = "Oops. Tied! We both picked the same move.";
        }else if(computerChoice === ("PAPER")){
            result = "You lost! The computer chose paper!";
            computerScore++;
        }else if(computerChoice === ("SCISSORS")){
            result = "You win! The computer chose scissors!";
            humanScore++;
        }
    }else if(humanChoice === ("PAPER")){
        if(computerChoice === ("PAPER")){
            result = "Oops. Tied! We both picked the same move.";
        }else if(computerChoice === ("ROCK")){
            result = "You win! The computer chose rock!";
            humanScore++;
        }else if(computerChoice === ("SCISSORS")){
            result = "You lost! The computer chose scissors!";
            computerScore++;
        }
    }else if(humanChoice === ("SCISSORS")){
        if(computerChoice === ("SCISSORS")){
            result = "Oops. Tied! We both picked the same move.";
        }else if(computerChoice === ("PAPER")){
            result = "You win! The computer chose paper!";
            humanScore++;
        }else if(computerChoice === ("ROCK")){
            result = "You lost! The computer chose rock!";
            computerScore++;
        }
    }

    results.textContent = result;
    urScore.textContent = `Your Score: ${humanScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;

    if(humanScore == 5 || computerScore == 5){
        gameOver();
    }
}

function handleInput(event){
    let target = event.target;
    
    switch(target.id){
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
}

function gameOver(){
    buttons.removeEventListener("click", handleInput, false);
    if(humanScore == 5){
        results.textContent = "The game is over. You win!\nIf you wish to play again, click the reset button!";
    }else{
        results.textContent = "The game is over. You lost!\nIf you wish to play again, click the reset button!";
    }
    
    const reset = document.createElement("button");
    reset.classList.add("button");
    reset.textContent = "Reset";
    reset.id = "reset"
    const result_section = document.querySelector(".scores-results");
    const scoreDiv = document.querySelector(".scores");
    result_section.insertBefore(reset, scoreDiv);
    
    reset.addEventListener("click", () => {
        result_section.removeChild(reset);
        playGame();
    })
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    buttons.addEventListener("click", handleInput);

    results.textContent = "";
    urScore.textContent = `Your Score: ${humanScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
}

playGame();