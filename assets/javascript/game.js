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
    guessCount = Math.floor(wordPossibilites.length);
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
            guessCount -= 1;
            updateDisplay()
        }
    }
    
    winOrLose();
}

function winOrLose() {
    if (currentWord.join("") === wordPossibilites && guessCount > 0) {
        var img = document.getElementById("image");
        var audio = document.getElementById("audio");
        userWins++;
        console.log("---below is the current wins on the page---");
        console.log(userWins);
        pauseGame = true;
        console.log("You won!");
        updateDisplay();
        
        if (wordPossibilites === choices[0]) {
            img.src = "assets/images/cranberries.jpeg"
            audio.src = "assets/images/The-Cranberries-Zombie.mp3"
        } else if (wordPossibilites === choices[1]) {
            img.src = "assets/images/soundgarden.jpeg"
            audio.src = "assets/images/Soundgarden-Black-Hole-Sun-With.mp3"
        } else if (wordPossibilites === choices[2]) {
            img.src = "assets/images/radiohead.jpeg"
            audio.src = "assets/images/Radiohead-Creep.mp3"
        } else if (wordPossibilites === choices[3]) {
            img.src = "assets/images/oasis.jpeg"
            audio.src = "assets/images/Oasis-Wonderwall.mp3"
        } else if (wordPossibilites === choices[4]) {
            img.src = "assets/images/nirvana.jpeg"
            audio.src = "assets/images/Nirvana-Smells-Like-Teen-Spirit.mp3"
        } else if (wordPossibilites === choices[5]) {
            img.src = "assets/images/weezer.jpeg"
            audio.src = "assets/images/Weezer-BuddyHolly.mp3"
        } else if (wordPossibilites === choices[6]) {
            img.src = "assets/images/blur.jpeg"
            audio.src = "assets/images/Blur-Song-2.mp3"
        } else if (wordPossibilites === choices[7]) {
            img.src = "assets/images/candlebox.jpeg"
            audio.src = "assets/images/Candlebox-FarBehind.mp3"
        } else if (wordPossibilites === choices[8]) {
            img.src = "assets/images/foofighters.png"
            audio.src = "assets/images/FooFighters-Everlong.mp3"
        } else if (wordPossibilites === choices[9]) {
            img.src = "assets/images/thirdeyeblind.jpeg"
            audio.src = "assets/images/ThirdEyeBlind-Semi-Charmed-Life.mp3"
        }
        resetGame();
    }
    if (guessCount === 0) {
        currentWord = wordPossibilites.split();
        pauseGame = true;
        console.log("you lost try again");
        resetGame();
    }
    
}