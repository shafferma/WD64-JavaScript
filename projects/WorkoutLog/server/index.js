let express = require("express");
let app = express();
let test = require("./controllers/testcontroller");

app.listen(3000, function(){
    console.log("App is listening on 3000.")
});

app.use("/test", test)