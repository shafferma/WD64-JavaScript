/*
* ******
! SYNTAX
* ******

keyword varName = [...arrayName];
*/

const nameOne = ['Ashley', 'Shaffer'];
const nameTwo = ['Goku', 'Koji'];
const copiedNames = ['Chris', 'Nick',...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ['Chris', 'Nick', nameOne, nameTwo];
console.log(copiedNamesDiff);

/*
    Since the spread operator is pulling out all items of an array, we need to make use the spread operator within a new array. This is
    so the values that were pulled out gets placed into our new array.

    ..arrName (if not within array, will throw error)

    - We can add to our original array without altering our copied array.
        - dependent on what data types we are using.
*/

nameOne.unshift('Ms');          // array method
console.log('Altered: ', nameOne, 'Spread', copiedNames);

/*
* ********
! ... NUMBERS
* ********
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];           
console.log(Math.min(prices));  //expects numbers, not an array (array is not a number)
console.log(Math.min(...prices)); // Spread op pulls elements out of the prices array to allow the min method to work (stepping into an array)

/*
* *******
! OBJECTS
* *******
*/

const persons = [
    {
        name: 'Lore',
        species: 'Android'
    },
    {
        name:'Picard',
        species: 'Human'
    },
];

const copiedPersons = [...persons];              
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPersons);
// We are only changing the original array. 
// pass by reference vs pss by value

/*
    - primitive variable = primitive value
        ex: 
            let x = 10
            let y = 'abc;
            let z = null;
    - JS stores to memory both variable and values:
        Variables   Values
        x           10
        y           'abc'
        z           null

        ex:
        let a = x;
        let b = y;
        console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'
    
    - Altering one wouldn't affect the previous
        a = 5;
        b = 'xyz'
        console.log(x, y, a, b) -> 10, 'abc', 5, 'xyz'

    - 3 Data Types that are passed by reference: Array, Functions, and Objects
        - technically objects.
        -non primitive variables are given a reference to the value - the reference points to the location in memory.

        * pretend datatype: address - denoted by < >

        let arr = [];
        arr.push(1);

        - How our code would look in memory:

        VARIABLES      VALUES       ADDRESS     OBJECT
        arr             <#001>      #001        []
        arr             <#001>      #001        [1]

        let ref = [1];
        let refCopy = ref;

        - Memory:
          VARIABLES      VALUES       ADDRESS     OBJECT
          ref            <#001>         #001        [1]
          refCopy        <#001>      

        ref.push(2)
        console.log(ref, refCopy) -> [1,2], [1,2]
*/

copiedPersons[0].name = "Data";
console.log('Obj:', persons, 'SO:', copiedPersons);

/*
* *******
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* *******
*/
//comics an array of object 
const comics = [  
    {title: 'Spider-Man', year: 1962}, {title: 'Detective Comics', year: 1939}
];

const copiedComics = comics.map(comic => ({     // 
    title: comic.title,
    year: comic.year
}));

comics.push({title: 'Calivn and Hobbes', year: 1985});
console.log('Before Altering: ', copiedComics);
copiedComics[1].title = 'Detective Comics #27';
console.log('After Altering: ', comics, copiedComics);