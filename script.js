let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let retVal = prompt("Enter a choice: ", "rock, paper, or scissors");
    return retVal;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if(humanChoice === ("ROCK")){
        if(computerChoice === ("ROCK")){
            console.log("Oops. Tied! We both picked the same move.");
        }else if(computerChoice === ("PAPER")){
            console.log("You lost! The computer chose paper!");
            computerScore++;
        }else if(computerChoice === ("SCISSORS")){
            console.log("You win! The computer chose scissors!");
            humanScore++;
        }
    }else if(humanChoice === ("PAPER")){
        if(computerChoice === ("PAPER")){
            console.log("Oops. Tied! We both picked the same move.");
        }else if(computerChoice === ("ROCK")){
            console.log("You win! The computer chose rock!");
            humanScore++;
        }else if(computerChoice === ("SCISSORS")){
            console.log("You lost! The computer chose scissors!");
            computerScore++;
        }
    }else if(humanChoice === ("SCISSORS")){
        if(computerChoice === ("SCISSORS")){
            console.log("Oops. Tied! We both picked the same move.");
        }else if(computerChoice === ("PAPER")){
            console.log("You win! The computer chose paper!");
            humanScore++;
        }else if(computerChoice === ("ROCK")){
            console.log("You lost! The computer chose rock!");
            computerScore++;
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}