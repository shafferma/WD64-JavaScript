//! ASYNCHRONOUS PROGRAMMING
/*
    - synchronous programming is code read line by line

    - Asynchronous programming allows a program to do more than one thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.
*/

//? Synchronous Sample: Execution Stack
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// "First Hello" - then "Second Hello" - then "End". Once the one before is completed, the next will execute.
// - managing 

//? Asynchronous Sample
const neworkRequest = () => {
    setTimeout(() => {
    console.log('Async Code')
    }, 2000); // setTimeout has two arguments: Once the one before is completed, the next will execute.
};
console.log('Hello World');
neworkRequest();
console.log('The End');

// Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting
// callback that needs to be executed (our console.log('Async Code')).

//! API

/*
    API : Application Program Interface

    - is NOT a database or server.
    - Allows us access points to server
        - comes in the form of ENDPOINTS
        - endpoints directs us to set of data.

    ? REST API
    - Representational State Transfer
        - creates an object of requested data by the client, send values in response to user. 
    - Methods:
        CRUD
            Create (POST)    
            Read (GET)
            Update (PUT)
            Delete (DELETE)
*/

//! FETCH()
/*
    - the fetch() method is an asynchronous method. Part of the browser - NOT JS.
    - the fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
        - an unknown value when created
        - represents the eventual fulfilled value or rejection (error)
    *Promises always one of these states:
        1. Pending: initial state, neither fulfilled or rejected
        2. Fulfilled: Meaning the operation completed successfully
        3. Rejected: Meaning the operation failed
*/


function callbackFunction(){
    const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting(callbackFunction())
)

/*
/*

    We see that in the showGreeting(callbackFunction()) line of code, we are invoking the function that we created above called callbackFunction().
    The purpose of our showGreeting() function is to return a string that is built with data that will be coming from our argument.
*/




/**
 * Personal Notes
 */


// concise function
response => response.json()
(response) => response.json()
() => console.log('pewp')

// the concise function written out with a block body; block body is {}
function(response) {
  return response.json()
}

// example 1
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// example 2
fetch(url)
    .then(function(response) {
    return response.json()
  })
  .then(data => console.log(data));
