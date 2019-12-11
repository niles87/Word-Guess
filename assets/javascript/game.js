// list of possible words
var choices = ["the cranberries", "soundgarden", "radiohead", "oasis", "nirvana", "weezer", "blur", "candlebox", "foo fighters", "third eye blind"];
// total wins
var userWins = 0;
// used to store total guess allowed
var guessCount = 0;
// used to set the possible word to blanks
var blankWord = "_";
// word to be guessed
var currentWord = [];
// guessed letters
var guesses = [];
// this is the games word
var wordPossibilites = choices[Math.floor(Math.random() * choices.length)];

var pauseGame = false;

resetGame()

document.onkeyup = function (event) {
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toLowerCase());
    }
}

// make sure a letter is used
function isAlpha(ch) {
    return typeof ch === "string" && /[a-z]/.test(ch);
}
// updates the window
function updateDisplay() {
    document.getElementById("wins").innerText = userWins;
    document.getElementById("word").innerText = currentWord;
    document.getElementById("guessCount").innerText = guessCount;
    document.getElementById("letterGuess").innerText = guesses.join(" ");
}
// resets game
function resetGame() {
    wordPossibilites = choices[Math.floor(Math.random() * choices.length)];
    console.log(wordPossibilites);
    pauseGame = false;

    // Reset word arrays
    guesses = [];
    currentWord = [];

    // Get a new word
    guessCount = Math.floor(wordPossibilites.length * 1.5);
    console.log(guessCount);
    updateDisplay();


    // Reset the guessed word
    for (var i = 0, j = wordPossibilites.length; i < j; i++) {
        // Put a space instead of an underscore between multi word answers
        if (wordPossibilites[i] === " ") {
            currentWord.push(" ");
        } else {
            currentWord.push("_");
        }
    }

    // Update the Display
    updateDisplay()
}

// checks current word for matching letters
function checkForLetter(letter) {
    var foundLetter = false;
    // for correct guesses
    for (var i = 0, j = wordPossibilites.length; i < j; i++) {
        if (letter === wordPossibilites[i]) {
            currentWord[i] = letter;
            foundLetter = true;
            console.log("Thats correct guess again!");
            if (guesses[i] === letter) {
                console.log("im hitting")
                updateDisplay();
            } else {
                console.log("i missed the if")
                guesses.push(letter);
                updateDisplay();
            }
        }
    }
    // if statement for missed guess
    if (!foundLetter) {
        console.log("Thats not correct try again!")
        if (!guesses.includes(letter)) {
            guesses.push(letter);
            updateDisplay()
        }
    }
    guessCount -= 1;
    winOrLose();
}

function winOrLose() {
    if (currentWord.join("") === wordPossibilites && guessCount > 0) {
        userWins++;
        console.log("---below is the current wins on the page---");
        console.log(userWins);
        pauseGame = true;
        console.log("You won!");
        updateDisplay();
        resetGame();
    }
    if (guessCount === 0 && currentWord !== wordPossibilites) {
        currentWord = wordPossibilites.split();
        pauseGame = true;
        console.log("you lost try again");
        resetGame();
    }
}