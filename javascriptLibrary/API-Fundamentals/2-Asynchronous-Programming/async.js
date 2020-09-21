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

    We see that in the showGreeting(callbackFunction()) line of code, we are invoking the function that we created above called callbackFunction().
    The purpose of our showGreeting() function is to return a string that is built with data that will be coming from our argument.
*/