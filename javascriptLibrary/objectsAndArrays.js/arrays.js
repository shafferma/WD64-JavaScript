/*
* ********
! ARRAYS
* ********
*/

//? POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NONTATION.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];

// console.log(typeof students);       //type of - keyword that defines a function
console.log(students instanceof Array); //the instanceof operator is used to check the type of an object at run time. Remember that arra

console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
//Index Position: (0)       (1)     (3)     (4)     (5)                  (6)        (array with 3 different strings)
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];        
//                                                              (0)     (1)     (2)

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students}[6][2]`);
console.log(`Hello ${students[1]}`);

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (foodItem of food) {            //for loop is to go through all index in an array
    console.log(foodItem);
}

//Add to our array
food.push('Pizza'); // Appends Pizza to the end of our array
console.log('push: ', food);


//Remove and insert
food.splice(1, 1, 'Bananas'); // Removes Shrimp and add Banana => (position, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice 2: ', food);

//Remove from end
food.pop(); // pop removes the last item of an array
console.log('pop: ', food);

//Adds to the start
food.unshift('Popcorn', 'Steak'); //unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

//Remove from start
food.shift(); // shift removes the first element in an array
console.log('shift: ', food);


