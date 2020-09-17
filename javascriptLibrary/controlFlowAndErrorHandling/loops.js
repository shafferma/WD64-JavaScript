/*
* *********
! FOR LOOPS
* *********

    - Loops helps us repeat a process without writing a lot of code

    We need to:
        1) Create an Index
        2) Run a condition
        3) Change to the indexing variable (execution of condition)
*/

// 1. Forloop
// 2. initialization / variable
// 3. condition/defining how long the loop will run
// 4. final expression / logic that runs at the end of loop
//  (1) (2)       (3)   (4)
for(let i = 0; i <=10; i++) { // expressions
    console.log(i);
    if(i%2 == 0) {
        console.log('the number is even')
    } else {
        console.log('the number is odd')
    }
}
for(let i = 0; i <=10; i++){            
    console.log(i);
    console.log('the number is ' + (i%2 == 0 ? 'even' : 'odd'))
}
for(let i = 0; i <=10; i++) {
    console.log(i);
    console.log(`the number is ${i%2 == 0 ? 'even' : 'odd'}`)
}

/*


*/

/*
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against 
        (index; condition; change index -> result)

    for (<create index variable>; <run condition>; <change index>) {
        <return results.
        *will cont. until run condition is met.
    }
*/

//   lex x = 20;
//   let i = 10
//    for(i; i <= x; i++){
//      console.log(i);
//

//! CHALLENGE:
//* Using a for loop, set an index of 2. Make a condtion where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

for(let i = 2; i > -10; i -= 4) {
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious'

for(let i = 0; i < word.length; i++) {
    console.log(i, word[i])
}

/*
* ********
! FORIN LOOP
* ********
*/


// 


let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/*
    for ( variable IN object) {
        <statement>
    }  
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for (item in list) {
    console.log(item)
    console.log(list[item]);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName; 

for(char in name) {             // when naming - make it to make sense 'char' = character or  n for name' 
//   let lowChar = name[char].toLowerCase();
//   console.log(lowChar);
//   console.log(char);
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}
console.log(fullName);

/*
    1) We are taking the value of the "n" index and declaring the position of 0
    2) We assign our empty variable to equal that positioned value.
    3) If that index is 0, we will take that value and run a ".topUpperCase()"" method on it.
    4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value
    (or n++)
    5) If the index is NOT 0, we want to run a ".toLowerCase()" method so that all letters are in proper case.
*/

/*
* *********
! FOROF LOOP
* *********

    - In order to run a FOR OF loop, the "thing" must be numbered like an array.

    let object = {
        key: value,
        key: value,
        key: value
    };

    for(o of object) {
        <breaks>
    }

*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/*
? QUICK Recap:
    for loop: loops through a block of code until the counter reaches a specified number.
    for in loops: loops through properties of an object.
    for of loops: loops over iterable objects as an arrays and strings *strings can be accessed much in the same way as arrays.
*/

