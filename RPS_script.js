
// 1. Make a function for the computer random selection return Rock, Paper or Scisor 
// 2. Make computerSelection() random

function computerSelection() {
    let computerOptions = ["Rock", "Paper", "Scissor"];
    let random = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return random;
}

// 3. playerSelection function
// 4. Acept only strings (R,P,S)

function playerSelection() {
    let playerOptions = prompt("Choose: Rock, Paper or Scissor");
    if (playerOptions == "Rock" || playerOptions == "Paper" || playerOptions == "Scissor") {
        return (playerOptions);
    } else {
        alert ('Invalid input! Reload the page and try again');
    }
}

//
// 5. Make playerSelection case insensitive
// still missing
//


// 6. Play a round vs computer 
// 6.1 Decide who wins each round 
// 7. Display result of round (on the console)
// 8. Keep score of rounds

let playerWin = 0;
let computerWin = 0;
let roundDraw = 0;

function playRound(computerSelection, playerSelection) {
    if (playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissor" && computerSelection == "Paper" || playerSelection == "Rock" && computerSelection == "Scissor" ) {
        console.log("You win!");
        console.log("Player score: " + (playerWin += 1) + ". Computer score: " + computerWin + ".");
    } else if ( playerSelection == "Paper" && computerSelection == "Scissor" || playerSelection == "Scissor" && computerSelection == "Rock"  || playerSelection == "Rock" && computerSelection == "Paper" ) {
        console.log ("You Loose!");
        console.log("Player score: " + playerWin + ". Computer score: " + (computerWin += 1) + "." );
    } else if (playerSelection == computerSelection){
        console.log ("Round Draw.");
        console.log("Player score: " + playerWin + ". Computer score: " + computerWin + "." );
    } else {
        console.log("Error. The round wasn't played");
    } 
}

// 9. Play until a player win 5 rounds 

let gameWinner = playerWin || computerWin;

// Loop only stops when playerWin reaches 5. 
for (i=0; gameWinner < 2; i++){
    console.log (playRound(computerSelection(), playerSelection()));
}


