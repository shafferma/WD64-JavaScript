/*
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/


let FB = null;

for (let i = 1; i <=100; i++)  {
if(i % 3 === 00 && i % 5 === 0) {
    FB = 'Fizz Buzz';
} else if (i % 3 === 0)  {
    FB = 'Fizz'
} else if (i % 5 === 0)  {
    FB = 'Buzz'
} else {FB = ''}
console.log(i, FB)
}


for (let fb=0; fb <=100; fb++){
    if(fb % 15 == 0) console.log('Fizz Buzz');
    else if(fb % 5 == 0) console.log('Buzz');
    else if(fb % 3 == 0) console.log('Fizz');
    else console.log(fb);
}


let fb = 30;

(fb % 3 === 0 && fb 5 === 5 ? console.log('Fizz Buzz') :
(fb % 5 === 0) ? console.log('Buzz') :
(fb % 3 === 0) ? console.log('Fizz') : console.log(fb); 