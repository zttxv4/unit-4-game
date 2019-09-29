$(document).ready(function () {
// Establish global variables
var redCrys = Math.floor(Math.random() * 10);
var blueCrys = Math.floor(Math.random() * 10);
var greenCrys = Math.floor(Math.random() * 10);
var whiteCrys = Math.floor(Math.random() * 10);
var computerNumber = Math.floor(Math.random() * 100);
var count = 0;
var wins = 0;
var losses = 0;


$("#winCount").text(wins);
$("#lossCount").text(losses);



function assignNum() {
    redCrys = Math.floor(Math.random() * 10);
    blueCrys = Math.floor(Math.random() * 10);
    greenCrys = Math.floor(Math.random() * 10);
    whiteCrys = Math.floor(Math.random() * 10);
    computerNumber = Math.floor(Math.random() * 100);
}


// Function to reset the game after a win or loss

function resetGame() {
    assignNum()
    redCrys = Math.floor(Math.random() * 10);
    blueCrys = Math.floor(Math.random() * 10);
    greenCrys = Math.floor(Math.random() * 10);
    whiteCrys = Math.floor(Math.random() * 10);
    computerNumber = Math.floor(Math.random() * 100);
    $("#scoreCount").text(count);
    $("#computerpick").text(computerNumber)
}

// Function when player wins

function winner() {
    wins++;
    $("#winCount").text(wins);
    resetGame();
    alert("YOU WIN!");
}

// Function when player loses

function loser() {
    losses++;
    $("#lossCount").text(losses);
    resetGame();
    alert("Sorry, too many.");
}

// Set up onclicks for each crystal and keep count

$("#redCrystal").on ("click", function() {
    count = count + redCrys;
    $("#scorecount").text(count);

    if(count === computerNumber){
        winner();
        resetGame()
    } else if(count > computerNumber) {
        loser()
        resetGame()
    }
});


$("#blueCrystal").on ("click", function() {
    count = count + blueCrys;
    $("#scorecount").text(count);

    if(count === computerNumber){
        winner();
        resetGame();
    } else if(count > computerNumber) {
        loser();
        resetGame();

    }
});

$("#greenCrystal").on ("click", function() {
    count = count + greenCrys;
    $("#scorecount").text(count);

    if(count === computerNumber){
        winner();
        resetGame();
    } else if(count > computerNumber) {
        loser();
        resetGame();
    }
});


$("#whiteCrystal").on ("click", function() {
    count = count + whiteCrys;
    $("#scorecount").text(count);

    if(count === computerNumber){
        winner();
        resetGame();
    } else if(count > computerNumber) {
        loser();
        resetGame();
    }
});

})
