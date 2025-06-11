
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

let userSCR = document.querySelector("#userSCR")
userSCR.innerHTML = userScore;
let computerSCR = document.querySelector("#computerSCR");
computerSCR.innerHTML = computerScore;
let tieSCR = document.querySelector("#tieSCR");
tieSCR.innerHTML = tieScore;

// function playGame(){
//     console.clear();
//     userScore = 0;
//     computerScore = 0;
//     tieScore = 0;
//     let roundCounter = 0;

//     while (roundCounter < 5){
//         playRound();
//         roundCounter++;
//     }

//     console.log(`Total scores:
//         User: ${userScore}.
//         Computer: ${computerScore}.
//         Ties: ${tieScore}.`);
        
//     if (userScore < computerScore){
//         console.log("Computer wins the game");
//     }
//     else if (userScore > computerScore){
//         console.log("User wins the game");
//     }
//     else {
//         console.log("Its a tie!");
//     }
// }

const choicesContainer = document.querySelector("#choicesContainer");
choicesContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound(0);
            break;
        case "paper":
            playRound(1);
            break;
        case "scissors":
            playRound(2);
            break;
    }
});

function playRound(userChoice){
    // let userChoice = prompt("Enter a value between 0 and 2.\n0 = Rock. 1 = Paper. 2 = Scissors");
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
        computerSCR.innerHTML = computerScore;
        // console.log("Computer wins");
    }
    else if (computerChoice === userChoice) {
        tieScore++;
        tieSCR.innerHTML = tieScore;
        // console.log("Tie");
    }
    else {
        userScore++;
        userSCR.innerHTML = userScore;
        // console.log("User Wins");
    }

    
}
    
function parsePlay(choice){
    switch(choice){
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
            }
}

