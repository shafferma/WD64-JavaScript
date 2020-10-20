//ES6 JS Classes
class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log("Welcome back", + this.name);
    }
    //Method 2
    status(){
        console.log("Current status:" + this.type);
    }
}

//Instance of the class/new object
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//super
class BronzeLevelUser extends User {
    //We add the ccinfo property the user here.
    constructor(username, password, ccinfo){

        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}
let bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "42424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);