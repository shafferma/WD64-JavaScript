/*
* *********
! FUNCTIONS
* *********

Functions are processes that we call upon to run an action.
    - Take in input so that it can process it, modifiy it or just respond to it.
    - Returns a value (but not always)
    - Can be invoked (called upon) as often as we need.
*/
// (1)   (2)
function hi(){
    console.log('Hi');
}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)      (2)        (3)              
function functionName() {          //coffee maker
//      (4)
    return value
};
// (5)                             function
functionName()


/*
    - 1: KEYWORD "function"
    - 2: NAME of "functionName"
    - 3: PARAMETER "currently empty"
    - 4: STATMENT "to process"
    - 5: INVOKE "on switch"
*/


//? Function Declaration
// A chunk of code that performs a set action when it is invoked
function funcOne(hgjfjhghjgnf) {
    console.log(hgjfjhghjgnf * 2);
}
funcOne(9);
// funcOne(7);
// funcOne(6);
// funcOne(5);
// funcOne(4);



// 1. create function
function beep(x, y) {              
    let val = x + y;
    console.log(val);
}
// 2. use function
beep(1, 2);         


function subtractBeep(x) { // sum = 3
    return x - 1 // 3 - 1 = 2
}

function boop(r, e) { // 1, 2
    let sum = r + e; // sum = 3
    console.log(subtractBeep(sum)); // 2
}

boop(1, 2); // 2
boop(5, 1); // 5



function subtract (x) {
    console.log(x - 1);
}
subtract(2) // 1
subtract(1) // 0
subtract(5) // 4
subtract(123123) // 123122
//? Function Expression
// Assigning a function to a variable is what is called an EXPRESSION
let first = function funcTwo() {
    console.log('Second Statement')
};
first();
// console.log(first);

//? Anonymous Function
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function() {
    console.log('anon function')
}

anon();

//? Parameters
// Allow us to accept information already delared.
// Function: think of rolling dice in an roleplaying game.  
// The rolling itself is the function. The parameters you send when
// you invoke it are the type of dice to roll and the number of dice you are going to roll.  
// The function rolls the dice and returns the total (value).


function parameterFunc (num) {
    console.log(num);
}

parameterFunc(2);
parameterFunc(9);

let returnVal = 5;
parameterFunc(returnVal);

// think of the parameters as (firstArgumentSent, secondArgumentSent, thirdArgumentSent, …)

let firstName = "Jane";
let lastName = "Doe";

function greeting(first, last) {
    console.log(`Hi ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}

// greeting(firstName);
// greeting(lastName);
// greeting(firstName, lastName);
// greeting(firstName, null);
// greeting('', lastName;
greeting(firstName, null);

//