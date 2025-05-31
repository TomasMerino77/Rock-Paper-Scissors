//Ask user to imput a move
let userChoice = prompt("Enter a value between 0 and 2.\n0 = Rock. 1 = Paper. 2 = Scissors");
userChoice = parsePlay(+userChoice);
console.log(userChoice);

let computerChoice = Math.floor(Math.random() * 3);
computerChoice = parsePlay(computerChoice);
console.log(computerChoice);


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