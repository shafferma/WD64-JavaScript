/* 
* *******
! ARRAY DESTRUCTING
* *******

    - allows us to unpack values from arrays or properties from objects. 
    - similiar syntax as array literals BUT is on the LEFT side of the assignment operator.
        - This defines what values to unpack.
    great for pulling info out of an array/object and assigning that data to it's own variable.
*/

const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

// const gameOne = boardGames[0];

const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);

/*
    - within the brackets (on left of assignment operator), we have our desired variables names. These coincide with each value within the array
    that is in the original variable. (shorthand way of pulling out a variable from an array or object that you are going to use over and over and giving it a name)
*/

/*
* *******
! REST SYNTAX
* *******

    - Rest syntax looks exactly like spread syntax.
        - Spread expands an array into its elements
        - Rest collects multiple elements and condenses into a single element.
        - MUST be the last element defined when using array destructuring.
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);
// Using the spread operator syntax like this is known as 'rest' syntax with Array Destructuring. Using it, we are packing up the REST of the values into a new array.

hitchhikersGuide.push('Marvin', 'Deep Thought', 'Zaphod Beeblebrox');
[charOne, charTwo, ...otherInfo] = hitchhikersGuide
console.log(otherInfo);

[charTwo, charTwo, , , ...otherInfo] = hitchhikersGuide;        // ...otherInfo is the array with the rest of the info
console.log('SKIPPED');
console.log(charTwo);
console.log(charTwo);
console.log(otherInfo);                 

/* 
* *******
! OBJECT DESTRUCTING 
* *******
*/

const game = {
    title: 'Fallout 76',
    developer: 'Bethesda Game Studios',
    platforms: [
        'PC', 'PS4', 'XBoxOne'
    ]
};
const {title, platforms} = game;
console.log(`${title} is on ${platforms}`);

const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);

for({title, developer} of games) {
    console.log(`${title} is developed by ${developer}`);           
}
for({title, platforms} of games) {
    for(p in platforms) {
    console.log(`${title} is on ${platforms[p]}`);
    }
}