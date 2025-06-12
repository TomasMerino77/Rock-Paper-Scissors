
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

let userSCR = document.querySelector("#userSCR")
userSCR.innerHTML = userScore;
let computerSCR = document.querySelector("#computerSCR");
computerSCR.innerHTML = computerScore;
let tieSCR = document.querySelector("#tieSCR");
tieSCR.innerHTML = tieScore;

let userHand = document.querySelector("#userHand");
let computerHand = document.querySelector("#computerHand");
let result = document.querySelector("#result");


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
    // console.log(`User choice: ${userChoice}`);
    
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = parsePlay(computerChoice);
    // console.log(`Computer choice: ${computerChoice}`);
    
    userHand.innerHTML = userChoice;
    computerHand.innerHTML = computerChoice;

    if (
        computerChoice === "Rock" && userChoice === "Scissors" ||
        computerChoice === "Paper" && userChoice === "Rock" ||
        computerChoice === "Scissors" && userChoice === "Paper"
    ) {
        computerScore++;
        result.innerHTML = "Computer wins";
        computerSCR.innerHTML = computerScore;
    }
    else if (computerChoice === userChoice) {
        tieScore++;
        result.innerHTML = "Tie";
        tieSCR.innerHTML = tieScore;
    }
    else {
        userScore++;
        result.innerHTML = "User Wins";
        userSCR.innerHTML = userScore;
    }


    if (userScore === 5 ||
        computerScore === 5) {
            let winner = (userScore === 5) ? "User" : "Computer";
            let loserScore = (userScore === 5) ? computerScore : userScore;
            alert(`Game finished!
            ${winner} won 5 - ${loserScore}
            Ties: ${tieScore}`);

            //Resets score board and last round info
            userSCR.innerHTML = userScore = 0;
            computerSCR.innerHTML = computerScore = 0;
            tieSCR.innerHTML = tieScore = 0;
            userHand.innerHTML = "";
            computerHand.innerHTML = "";
            result.innerHTML = "";

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

