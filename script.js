
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(){
    let userChoice = prompt("Enter a value between 0 and 2.\n0 = Rock. 1 = Paper. 2 = Scissors");
    userChoice = parsePlay(+userChoice);
    console.log(`User choice: ${userChoice}`);
    
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = parsePlay(computerChoice);
    console.log(`Computer choice: ${computerChoice}`);
    
    if (
        computerChoice === "Rock" && userChoice === "Scissors" ||
        computerChoice === "Paper" && userChoice === "Rock" ||
        computerChoice === "Scissors" && userChoice === "Paper"
    ) {
        computerScore++;
        console.log("Computer wins");
    }
    else if (computerChoice === userChoice) {
        tieScore++;
        console.log("Tie");
    }
    else if (userChoice === "Incorrect value"){
        console.log("Invalid round");
    }
    else {
        userScore++;
        console.log("User Wins");
    }

    console.log(`Total scores:
        User: ${userScore}.
        Computer: ${computerScore}.
        Ties: ${tieScore}.`)
}
    
function parsePlay(choice){
    switch(choice){
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
                default: return "Incorrect value";
            }
}