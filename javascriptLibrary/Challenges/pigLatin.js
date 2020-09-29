/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

// function translatePigLatin(str) {

// str = str.toLowerCase ()
// const vowel = ['a', 'e', 'i', 'o', 'u'];
// let vowelIndex = 0;

// if(vowel.includes(str[0]))
//     return str + 'ay';
// }
// else {
//     for (let char of str) {
//         if (vowel.includes(char)){
//             vowelIndex = str.indexOf(char);
//             break;
//         }
//     }
//     return.str.slice(vowelIndex) + str.slice(0, vowelIndex);
// }
// console.log(pigLatin(''));


// function translatePigLatin(str) {
// // Create variables to be used
// let pigLatin = "";
// let regex = /[aeiou]/i;
// str = str.toLowerCase();
// // Check if the first character is a vowel
// if (str[0].match(regex)) {
//     pigLatin = str + "ay";
// } else if (str.match(regex) === null) {
//     // Check if the string contains only consonants
//     pigLatin = str + "ay";
// } else {
//     // Find how many consonants before the first vowel.
//     let vowelIndice = str.indexOf(str.match(regex)[0]);

//     // Take the string from the first vowel to the last char
//     // then add the consonants that were previously omitted and add the ending.
//     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
// }

// return pigLatin;
// }
// // test here
// console.log(translatePigLatin("Pig Latin"))




const pig = "pig latin phrase";             // our string
let phrase = pig.toLowerCase();             // converts to lower case
let phraseArray = phrase.split(" ");        // converts phrase to an array
let finalPhrase = "";                       // declares returned array
let lastLetter = "";                        // declares the last letter(s)
console.log(phraseArray);                   // DELETE
function parseThroughPhrase(phrase) {
  let index = 0;
  for(word of phrase) {                     // Iterates through each string(word) in the array
    console.log(phrase);
    let firstLetter = word[0];              // grabs the first letter of the word
    switch (firstLetter) {
      case(firstLetter === "a" || firstLetter === "A"):
        lastLetter = "ay";
        break;
      case(firstLetter === "e" || firstLetter === "E"):
        lastLetter = "ay";
        break;
      case(firstLetter === "i" || firstLetter === "I"):
        lastLetter = "ay";
        break;
      case(firstLetter === "o" || firstLetter === "O"):
        lastLetter = "ay";
        break;
      case(firstLetter === "u" || firstLetter === "U"):
        lastLetter = "ay";
        break;
      default:
        lastLetter = firstLetter + "ay";
    };
    //  add lastLetter to word
    word = word + lastLetter;               // adds lastLetter to our word
    // insert lastLetter and index wordLength
    let endSlice = word.length;
    word = word.slice(1, endSlice)
    console.log(word);                      // DELETE
    // replace word in phrase array with new word
    phrase.splice(index,1,word);
    index = index + 1;
    };      // End of word conversion
  return phrase;
};      //  End of Word conversion
finalPhrase = parseThroughPhrase(phraseArray);    // Calls main function
finalPhrase = phraseArray.join(" ");              // Rejoins final array
console.log(finalPhrase);                         // Logs final array