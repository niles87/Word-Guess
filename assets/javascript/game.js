var choices = ["TheCranberries", "soundgarden", "radiohead", "oasis", "nirvana", "weezer", "blur", "candlebox", "FooFighters", "ThirdEyeBlind"];

var userWins = 0;

var guessCount = 0;

document.onkeypress = function (event) {
    var wordPossibilites = choices[Math.floor(Math.random() * choices.length)];

    var guessCount = (wordPossibilites.length * 1.5);

    document.findElementById("guessCount").innerHTML = guessCount;

    document.onkeypress = function (event) {

        var userInput = event.key;


    }
}