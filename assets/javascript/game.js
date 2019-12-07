var choices = ["TheCranberries", "soundgarden", "radiohead", "oasis", "nirvana", "weezer", "blur", "candlebox", "FooFighters", "ThirdEyeBlind"];

var userWins = 0;

var guessCount = 0;

var blankWord = " _ "

document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();
    console.log(userInput);
    var wordPossibilites = choices[Math.floor(Math.random() * (choices.length - 1))];
    console.log(wordPossibilites);
    guessCount = Math.floor(wordPossibilites.length * 1.5);
    console.log(guessCount);

    document.getElementById("guessCount").innerHTML = guessCount;

    document.getElementById("word").innerHTML = blankWord.repeat(wordPossibilites.length - 1);

   

   



}