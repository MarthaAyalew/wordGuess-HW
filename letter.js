// Contains a constructor, Letter. This constructor should be able to either display an underlying 
// character or a blank placeholder (such as an underscore), depending on whether or not the user 
// has guessed the letter. That means the constructor should define:
// */

  var inquirer = require('inquirer');

  var [,,...userInput] = process.argv;

  function Letter(char) {
      //A string value to store the underlying character for the letter
      this.char = char.toUpperCase();
      //A boolean value that stores whether that letter has been guessed yet
      this.correctLetterGuessed = false;
      //A function that returns the underlying character if the letter has been guessed, or a placeholder 
      //(like an underscore) if the letter has not been guessed
      this.revealChar = function() {
          if (this.correctLetterGuessed = true) {
              console.log(this.char);
          } else {fd
              console.log('-');
          }
      }
      //A function that takes a character as an argument and checks it against the underlying character, 
      //updating the stored boolean value to true if it was guessed correctly
      this.checkUserGuess = function() {
          if (this.char = userInput) {
              this.correctLetterGuessed = true;
              this.reavealChar();
          }
      }
  }

//export Letter constructor to make available for word.js 
module.exports = Letter;


// Add CommentCollapse 