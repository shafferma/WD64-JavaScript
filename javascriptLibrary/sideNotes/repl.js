// Write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly
// inside the object

// let lotrObj = {
//     nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
//     runTime: 288,
//     characters: [
//         {
//             name: 'Legolas',
//             age: 2931,
//             items: [
//                 {itemOne: 'Bow and Arrow'},
//                 {itemTwo: 'Dagger'},
//             ],
//         },
//         {
//             name: 'Gandalf',
//             age: 2019,
//             items:   [
//                 {itemOne: 'Sword'},
//                 {itemTwo: 'Staff'},
//             ],
//         },
//     ],
//     gernre: 'Action & Adventure'
// }

// Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of the character,
// and one of the items a character has.

// console.log(lotrObj.nameOfMovie);
// console.log(lotrObj.runTime);
// console.log(lotrObj.characters);
// console.log(lotrObj.characters[0].name);
// console.log(lotrObj.characters[0].itemOne);


/* 
 9-29 REPL

*/


// 1. A range for our user to guess between. This should be 1-10. 
// 2.	A randomized computer answer.
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
// 5. gameLost = false
let gameLost = false

checkGuess()
 
function checkGuess(){ 
  
  // 3. A user guess that will provide a prompt
  const userGuess = parseInt(prompt('Pick a number 1 through 10')); // "3" ... 3
  console.log(userGuess);
  
  // 4.	A guess count (for loop variable declaration) 
  // 6.	The user will have 3 guesses to guess the correct answer.
  for(let guessCount = 0; guessCount < 3; guessCount++) {
    
    // A way to validate the user guess - user guessed correctly 1.
    if (userGuess === randomNumber) {
      console.log('Winner');
      // forced game to end 
      guessCount = 3;
      
      
      
    }
    console.log('for loop');
    // run final expression at end of our loop
  }
} 

// TODO - prompt didn't appear after failed attempt