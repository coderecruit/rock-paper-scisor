

/* Drafts
let playerSelection = prompt("Choose: Rock, Paper or Scissor", "");

if (playerSelection != "paper" || "rock" || "scissor") {
    alert ('Invalid input! Reload the page and try again');
} else {
    console.log(playerSelection);
}
*/

//
// 5. Make playerSelection case insensitive
//



/* Right now it is accepting all values. I want it to only accept R, P or S

function playerSelection() {
    let playerOptions = prompt("Choose: Rock, Paper or Scissor");
    if (playerOptions === "Rock" || "rock" || "ROCK" ) {
        return (playerOptions);
    } else if (playerOptions === "Paper" || "paper" || "PAPER" ) {
        return (playerOptions);
    } else if (playerOptions === "Scissor" || "scissor" || "SCISSOR" ) {
        return (playerOptions);
    } else {
        alert ('Invalid input! Reload the page and try again');
    }
}
*/



/*
function playRound (computerPlay, playerSelection) {
    if ( (playerSelection == "Paper" && computerPlay == "Rock") || (playerSelection == "Scissor" && computerPlay == "Paper" ) || (playerSelection == "Rock" && computerPlay == "Scissor") ) {
        console.log("Player wins this round");
    }  else {
        console.log("play again");
    }
}
*/


/*

// only draws work. Else if not working
function playRound (computerPlay, playerSelection) {
    if (computerPlay == playerSelection) {
        console.log("Draw");
    } else if (computerPlay === "Scissor" && playerSelection === "Paper") {
        console.log("Computer win. Scissor beats Paper");
    } else {
        console.log("there was a winner");
    }
}


if (computerPlay == playerSelection) {
        console.log("Draw");
    } else {
        console.log("there was a winner");
    }
*/

/* step 6
 This is working, but doesn't print the computer result. And player have to put the input 2 times
computerPlay();
playerSelection();

console.log (playRound(computerPlay(), playerSelection()));
*/

// console.log (playRound(computerPlay(), playerSelection())); is calling the functions and working. There is no need to do console.log of other functions

