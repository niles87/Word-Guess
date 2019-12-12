# Word-Guess


## Overview

This is a hangman style game without drawing the hanging figure. I based it on some of my favorite bands growing up in the 90s. Bootstrap was used to do most of the web page layout and styling. Audio and images along with pushing letters guessed and the current word used javaScript.

## How to play

Its the same idea of hangman
* The browser will pick a word based on a predetermined list.
* Next you will guess letters for the chosen word.
    * With each correct guess the letter will populate the letters guessed and current word element.
    * With each incorrect guess the guesses remaining element will decrease by one.
* If the word is correctly completed an image will replace the stock image and audio from a track will play, then a new game begins.
* If the word isn't guessed when there are zero guesses left the game will reset and start again.
