
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
// 3. Prompt for playerSelection()
//



let playerSelection = prompt("Choose: Rock, Paper or Scissor", "");

if (playerSelection === "Paper" || "Rock" || "Scissor") {
    console.log(playerSelection);
} else {
    alert ('Invalid input! Reload the page and try again');
}



// 4. Acept only strings




// 5. Make it case insensitive


// 6. Play a round vs computer 



// 6.1 Decide who wins each round




// 7. Display result of round


// 8. Keep score of rounds


/* 9. Play 5 rounds 
    Use loops or repeat function 5 times */


