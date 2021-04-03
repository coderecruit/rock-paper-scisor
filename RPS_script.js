
//
// 1. Make a function for the computer random selection return Rock, Paper or Scisor 
// 2. Make computerPlay() random
//

function computerPlay() {
    let computerOptions = ["Rock", "Paper", "Scissor"];
    let random = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return random;
}


console.log(computerPlay());


//
// 3. playerSelection function
//
// 4. Acept only strings (R,P,S)
// if, else if, else if, else if, else (alert) » update April 3rd: symplified the if
//

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


function playRound (computerPlay, playerSelection) {
    computerPlay();
    playerSelection();
    if (playerSelection == "Paper" && computerPlay == "Rock" || playerSelection == "Scissor" && computerPlay == "Paper" || playerSelection == "Rock" && computerPlay == "Scissor" ) {
        console.log("Player wins this round");
    } else if ( playerSelection == "Paper" && computerPlay == "Scissor" || playerSelection == "Scissor" && computerPlay == "Rock"  || playerSelection == "Rock" && computerPlay == "Paper" ) {
        console.log("Computer wins this round");
    } else {
        console.log("Draw");
    }
}
 

console.log (playRound(computerPlay(), playerSelection()));










// 6.1 Decide who wins each round




// 7. Display result of round


// 8. Keep score of rounds


/* 9. Play 5 rounds 
    Use loops or repeat function 5 times */


