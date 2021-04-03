
//
// 1. Make a function for the computer random selection return Rock, Paper or Scisor 
// 2. Make computerPlay() random
//

function computerPlay () {
    let computerOptions = ["Rock", "Paper", "Scissor"];
    let random = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return random;
}
 
console.log(computerPlay());

//
// 3. playerSelection function
//
// 4. Acept only strings (R,P,S)
// if, else if, else if, else if, else (alert)
//

function playerSelection() {
    let playerOptions = prompt("Choose: Rock, Paper or Scissor");
    if (playerOptions == "Rock" ) {
        return (playerOptions);
    } else if (playerOptions == "Paper" ) {
        return (playerOptions);
    } else if (playerOptions == "Scissor" ) {
        return (playerOptions);
    } else {
        alert ('Invalid input! Reload the page and try again');
    }5
}
console.log (playerSelection());


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
    }5
}

*/






// 6. Play a round vs computer 





// 6.1 Decide who wins each round




// 7. Display result of round


// 8. Keep score of rounds


/* 9. Play 5 rounds 
    Use loops or repeat function 5 times */


