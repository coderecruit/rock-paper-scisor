
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
//


// 6. Play a round vs computer 
// 6.1 Decide who wins each round 
// 7. Display result of round (on the console)

let playerWin = 0;
let computerWin = 0;
let roundDraw = 0;

function playRound(computerPlay, playerSelection) {
    if (playerSelection == "Paper" && computerPlay == "Rock" || playerSelection == "Scissor" && computerPlay == "Paper" || playerSelection == "Rock" && computerPlay == "Scissor" ) {
        console.log("You win! Player score: " + (playerWin += 1) );
        return playerWin;
    } else if ( playerSelection == "Paper" && computerPlay == "Scissor" || playerSelection == "Scissor" && computerPlay == "Rock"  || playerSelection == "Rock" && computerPlay == "Paper" ) {
        console.log("You Loose! Computer score: " + (computerWin += 1) );
        return computerWin;
    } else if (playerSelection == computerPlay){
        console.log("Draw. Draws: " + (roundDraw += 1) );
        return roundDraw;
    } else {
        console.log("Error. The round wasn't played");
    } 
}

console.log (playRound(computerPlay(), playerSelection()));


// 8. 
// Problem: Keep score of rounds
// Suggested solution: make the function store the result. Use return, not console.log to achieve this.


/*
function roundScore(playRound) {
    let playerWin = 0;
    let computerWin = 0;
    let roundDraw = 0;
    if (playRound(computerPlay(), playerSelection()) = "You Win") {
        console.log ("Player score: ", playerWin += 1);
    } else if (playRound(computerPlay(), playerSelection()) = "You Loose!") {
        console.log ("Computer score: ", computerWin += 1);
    } else if (playRound(computerPlay(), playerSelection()) = "Draw!") {
        console.log ("Draws: ", roundDraw += 1); 
    }
}
*/


// 9. Play 5 rounds 
// Use loops or repeat function 5 times


