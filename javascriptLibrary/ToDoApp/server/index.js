const Express = require("express");
const applicationControllers = require("./controllers/index");
const expressApplicationObject = new Express();

expressApplicationObject.use('/test', applicationControllers.test)


expressApplicationObject.get("/", (request, response) => {
    console.log("[server: Root GET request received");
    console.log("TYPE:", request.method);
    console.log("URL:", request.url);
    console.log("[server]: Response being dispatched ->");
    response.send("Root Route Hit, hello from the todo server");
});

// Challenge: Receive a POST request at the route "/challenge"
// Take 2 values inside of the body:
// Name -> a string for a name
// Age -> A number for the age
// Respond with this message: 
// IF the user is 18 and older, the message will be: 
// "<name>, you are an adult!"
// Otherwise the message will be:
// "<name>, you will be an adult soon"

// router.post('/challenge', function(request, response){

//     let name = 'Ashley';
//     let age = 27;
//     let user = '';

//     user.create({
//       username: name,
//       userage: age

//     }).then(
//         function message() {
//             if(age < 18){
//                 response.send(name, "You are an adult!")
//             } else{
//                 response.send(name, "you will be an adult soon!")
//             }
//         }
//     );
// });

// JSON in a request is a STRING

expressApplicationObject.use(Express.json());

expressApplicationObject.post("/challenge", (request, response) => {
    let data = request.body;
    let message = 
        data.age >= 18 
        ? `${data.name}, you are an adult!` 
        : `${data.name}, you will be an adult`;

    response.send("challenge route hit");
});

expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001")
    });

