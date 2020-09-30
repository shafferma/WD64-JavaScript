/*
**************
! CLASSES
**************
    - Classes can be defined by either expression or declaration
    - Classes are functions.
    - Classes act as a blueprint for creating objects.
        ex: model could be a property of a class of Automobile. Each new automobile we create that's a copy of our
        original class and could have a different value for the property model.
    - Body of a class is between {}
    - Constructor method is a special method for creating and initilizing an object that was created with a class.
        - There can only be ONE constructor method.
        - Can use the keyword "super"
        - The super keyword is used to access and call functions on an object parent.
    - Introduced in ESS
    - New way to write previous existing prototype-based inheritance.
    - Closest thing in vanilla JS to OOP.
*/

/*
************
! CLASS DECLARATION
************
*/

class Automobile {
    constructor(make, model){
        // instanced properties must be defined inside of class methods, like the constructor method.
        this.make = make;
        this.model = model;
    }
}

// Hoisting: Unlike function declarations, class declarations are not hoisted. A class declaration needs to be declared before accessing it.

/*
************
! CLASS EXPRESSION
************
    - can be named or not named
    - the name given to an unamed class expression is local to the class's body.
        - The name of a named class can be retreived through the class's name property
*/

//* unnamed:
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name);

//* named:

let Auto = class Mobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};
console.log(Auto.name);


/*
************
! METHODS
************
    - Introduced in ES5
        - prototype methods are shorter for method definitions.
*/
//Method Definition: OLD STYNTAX
const automobile = {
    start: function() {
        //
    },
    stop: function(){
        //
    }
};

// Prototye Method: NEW SYNTAX
const autoMobile = {
    start() {
        //
    },
    stop() {
        //
    }
};

class AutoMobile {
    constructor(make, model){
        this.make = model;
        this.model = make;
    }


// Method 1:
start(){
    console.log(`This ${this.make} ${this.model}'s engine started.`);
}

// Method 2:
stop(){
    console.log(`This ${this.make} ${this.model}'s engine stopped.`)
    }
};

/*
**********
! NEW INSTANCE
**********
    using the keyword 'new' we can create a new object/instance of the AutoMobile class.
*/
// new object/instance of the class
let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();

/* 
**************
! CONSTRUCTOR METHOD
**************
    - Helps create an initializes an object created from a class.
    - works along with the 'new' keyword.
    - Needs to be included to create new objects and instances of our class.
        - set properties
        - passes values for properties.
*/

class Cookie {
    constructor(type, icing, shape){
        // the parameters we note will be the values we want passed and stored in the object.
        this.t = type;
        this.i = icing;
        this.s = shape;
    // LEFT SIDE: assigning keys for the values we pass in.
                // RIGHT SIDE: the accepted values from our parameters.
    }
}
// new is allowing use to generate a new object 
let chocolateChip = new Cookie('Chocolate Chip', false, 'circle');
// console.log(chocolateChip.type); -- you get undefined not chocolate chip because you didn't define 't'
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);

/*
********
! EXTENDS
********
    - keyword used in class delcarations/expression to create a new class
    - each new class created inherits the properties and methods from the parent class.
    - can have it's own properties and methods.
        - also known as a subclass.
*/

//* PARENT
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food.`);
    }
}

//* SUBCLASS

class Dog extends Animal {
    constructor(name, breed){
        super(name);    //'super' prior to 'this' keyword - will cause error
        this.type = breed;
    }

    play() {
        console.log(`The ${this.type} named ${this.name} fetches the ball!`);
    }
}

let Fido = new Dog('Fido', 'mutt');
Fido.eat();
Fido.play();
// Animal.play(); // breaks - can't access method within Dog


/*
An object (which is the instantiation of a class) is created so that it may perform the tasks (methods) of its class.
not much point of a class, if it doesn't DO something.
*/