
// // Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing 
// // the current word the user is attempting to guess. That means the constructor should define:

// // * An array of `new` Letter objects representing the letters of the underlying word

// // * A function that returns a string representing the word. This should call the function on each letter object 
// // (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// // * A function that takes a character as an argument and calls the guess function on each letter object (the second function 
// //     defined in `Letter.js`) 

// var Letter = require("./letter.js");
// var inquirer = require('inquirer');

// function Word(currentWord) {
//     //An array of `new` Letter objects representing the letters of the underlying word
//     var letterOne = new Letter("a");
//     this.currentWord = [];
//     //A function that returns a string representing the word. This should call the 
//     //function on each letter object (the first function defined in `Letter.js`) 
//     //that displays the character or an underscore and concatenate those together.
//     this.revealWord = this.revealChar.toString() 
//     //A function that takes a character as an argument and calls the guess function 
//     //on each letter object (the second function defined in `Letter.js`)
// }

// //console.log(new Letter("a"));

var randomWords = require('random-words');
// Call the letter.js constuctor.
var Letter = require('./letter.js');

// word.js constructor
var Word = function(computerWord) {

	this.computerWord = computerWord;
	this.lettersInWord = [];
	this.playerWord = '';
	this.lettersInPlayerWord = [];
	this.duplicateLetter = true;
	this.playerGuesses = [];
	this.wordGuessed = false;

	var self = this;

	// Build an array of all the letters in the guess word. Build an blank array to hold correct player guesses in word.
	this.getLettersInWord = function(){
		for(var i=0; i < this.computerWord.length; i++){
			this.newLetter = new Letter(this.computerWord.substr(i,1));
			this.newLetter.letterInWord = true;
			this.lettersInWord.push(this.newLetter.showLetter(this.newLetter.computerWordLetter));
			this.newLetter.letterInWord = false;
			this.lettersInPlayerWord.push(this.newLetter.showLetter(this.newLetter.computerWordLetter));
		}
		// console.log(computerWord+' '+this.lettersInWord+' '+this.lettersInPlayerWord);
	};

	// Build player word from the correct player guess array.
	this.showPlayerWord = function(){
		this.playerWord = (this.lettersInPlayerWord.toString()).replace(/,/g, "");
		// return this.playerWord;
	};

	// Check guess letter to see if its in the guess word.
	this.checkLetter = function(letterGuess){
		// Set duplicate flag to true.
		this.duplicateLetter = true;
		// Loop thru all letters in the guess word.
		for(var i = 0; i < this.computerWord.length; i++){
			// Check to see if letter quessed previously. If not push into array of letters guessed. Reset duplicate flag to false.
			if(this.playerGuesses.indexOf(letterGuess) == -1){
				this.playerGuesses.push(letterGuess);
				console.log('i '+this.playerGuesses);
				this.duplicateLetter = false;
			}
			// Check to see if guess letter in quess word.
			if(this.lettersInWord[i] == letterGuess){
				this.lettersInPlayerWord[i] = letterGuess;
			}
		}
	};

	// Check to see if player quess word equals guess word
	this.checkWord = function(){
		if(this.playerWord == this.computerWord){
			this.wordGuessed = true;
		}
	};

};

module.exports = Word;