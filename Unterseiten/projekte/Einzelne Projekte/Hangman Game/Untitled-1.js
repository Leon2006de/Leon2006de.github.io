var Buchstaben = [];
var guessedLetters = [];

function start() {
    var input = document.getElementById("input").value.toLowerCase();
    var outputU = document.getElementById("outputU");
    Buchstaben = input.split('');
    guessedLetters = [];

    outputU.innerHTML = "";  

    for (let i = 0; i < input.length; i++) {
        outputU.innerHTML += "_" + " "; 
    }
    document.getElementById("input").value = "";
}

function guessLetter() {
    var guess = document.getElementById("guess").value.toLowerCase();
    var outputU = document.getElementById("outputU");

    if (guess.length !== 1 || guessedLetters.includes(guess)) {
        alert("Please enter a single, new letter.");
        return;
    }

    guessedLetters.push(guess);

    outputU.innerHTML = "";  

    var allFound = true; // Flag to check if all letters are found

    for (let i = 0; i < Buchstaben.length; i++) {
        if (guessedLetters.includes(Buchstaben[i])) {
            outputU.innerHTML += Buchstaben[i] + " ";
        } else {
            outputU.innerHTML += "_" + " "; 
            allFound = false; // Set flag to false if any letter is still missing
        }
    }


    document.getElementById("guess").value = "";


    if (allFound) {
        alert("Congratulations! You've found all the letters.");
    }


}