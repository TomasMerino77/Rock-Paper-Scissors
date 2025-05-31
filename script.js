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
    console.log("Computer wins");
}
else if (computerChoice === userChoice) {
    console.log("Tie");
}
else {
    console.log("User Wins");
}

function parsePlay(choice){
    switch(choice){
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
                default: console.log("Incorrect value");
            }
}