
// 1. Make a function for the computer random selection return Rock, Paper or Scisor 
// 2. Make computerPlay() random

function computerPlay() {
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

function playRound(computerPlay, playerSelection) {
    if (playerSelection == "Paper" && computerPlay == "Rock" || playerSelection == "Scissor" && computerPlay == "Paper" || playerSelection == "Rock" && computerPlay == "Scissor" ) {
        console.log("You win!");
        console.log("Player score: " + (playerWin += 1) + ". Computer score: " + computerWin + ".");
        return playerWin;
    } else if ( playerSelection == "Paper" && computerPlay == "Scissor" || playerSelection == "Scissor" && computerPlay == "Rock"  || playerSelection == "Rock" && computerPlay == "Paper" ) {
        console.log ("You Loose!");
        console.log("Player score: " + playerWin + ". Computer score: " + (computerWin += 1) + "." );
        return computerWin;
    } else if (playerSelection == computerPlay){
        console.log ("Round Draw.");
        console.log("Player score: " + playerWin + ". Computer score: " + computerWin + "." );
    } else {
        console.log("Error. The round wasn't played");
    } 
}

// 9. Play until a player win 5 rounds 

for (i=0; i<5; i++) {
    console.log (playRound(computerPlay(), playerSelection()));
}
