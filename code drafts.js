

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


/* Working playRound function

function playRound (computerPlay, playerSelection) {
    if (playerSelection == "Paper" && computerPlay == "Rock" || playerSelection == "Scissor" && computerPlay == "Paper" || playerSelection == "Rock" && computerPlay == "Scissor" ) {
        console.log("You win!");
    } else if ( playerSelection == "Paper" && computerPlay == "Scissor" || playerSelection == "Scissor" && computerPlay == "Rock"  || playerSelection == "Rock" && computerPlay == "Paper" ) {
        console.log("You Loose!");
    } else if (playerSelection == computerPlay){
        console.log("Draw");
    } else {
        console.log("Error. The round wasn't played");
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


/* The objetive of this function is to play a round and save the result of the rounds. It's not working 
function playRound (computerPlay, playerSelection) {
    let playerWin = 0;
    let computerWin = 0;
    let roundDraw = 0;
    if (playerSelection == "Paper" && computerPlay == "Rock" || playerSelection == "Scissor" && computerPlay == "Paper" || playerSelection == "Rock" && computerPlay == "Scissor" ) {
        return "You win! Player score: " + (playerWin += 1) + ". Computer Score: " + computerWin + ". Rounds Draw: " + roundDraw;
    } else if ( playerSelection == "Paper" && computerPlay == "Scissor" || playerSelection == "Scissor" && computerPlay == "Rock"  || playerSelection == "Rock" && computerPlay == "Paper" ) {
        return "You loose! Player score: " + playerWin + ". Computer Score: " + (computerWin += 1) + ". Rounds Draw: " + roundDraw;    
    } else if (playerSelection == computerPlay){
        return      "Draw! Player score: " + playerWin + ". Computer Score: " + computerWin + ". Rounds Draw: " + (roundDraw += 1);
    } else {
        console.log("Error. The round wasn't played");
    } 
}
*/


/* Not working. It's alwats printing a 1 without text.
function roundResult (playRound) {
    let playerWin = 0;
    let computerWin = 0;
    let roundDraw = 0;
    if (playRound = "You Win") {
        return ("Player score: ", playerWin += 1);
    } else if (playRound = "You Lookse!") {
        return ("Computer score: ", computerWin += 1);
    } else {
        return ("Draws: ", roundDraw += 1); 
    }
}

console.log(roundResult(playRound()));
*/


/*
if (playerWin == 5) {
    console.log ("The Player win the game!");
}else if (computerWin ==5 ) {
    console.log ("Computer wins the game!");
} else {
    console.log ("Error. the winner wasn't found")
}
    
*/

/*
function gameWinner (playRound) {
    for (i=0; i<5; i++) {
        console.log (playRound(computerSelection(), playerSelection()));
    }
}
*/

/*
function gameWinner (playerWin, computerWin) {
    if (playerWin == 5) {
        console.log ("The Player win the game!");
    } else if (computerWin == 5) {
        console.log ("Computer wins the game!");
    }
}
*/


/*
let gameWinner = (playerWin) || (computerWin);
*/

/*
if (playerWin == 5) {
    console.log ("The Player win the game!");
}else if (computerWin ==5 ) {
    console.log ("Computer wins the game!");
} else {
    console.log ("Error. the winner wasn't found")
}
*/