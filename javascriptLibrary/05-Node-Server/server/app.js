/*
1. Here we require the use of the express npm package that we've installed in our dependencies.
2. We create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows us to create an Express app.
3. app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node’s http.Server.listen().
4. The given path is localhost:3000.
5. We call a callback function when the connection happens with a simple console.log.
*/
// If i ever see this error ... 
//  Error: listen EADDRINUSE: address already in use :::
// run the following command in CMD 
//  taskkill /F /IM node.exe
// this will find all instances of node running on my computer and attempt to terminate them
// then run my script again

let express = require('express'); //1
let app = express(); //2
let test = require('./controllers/testcontroller')
let sequelize = require('./db');

app.get('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.")
});

sequelize.authenticate().then(
    function() { //12
        console.log('Connected to workoutlog postgres database');
        sequelize.sync(); // tip: pass in{force: true} for resetting tables
    },
);

app.use(express.json());

app.use('/test', test)

//3             //4
app.listen(3000, function() {
    console.log('Hey you!!!')//5
});