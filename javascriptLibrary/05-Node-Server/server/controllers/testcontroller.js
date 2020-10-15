let express = require("express"); //1
let router = express.Router(); //2
let sequelize = require("../db");
let TestModel = sequelize.import("../models/test")

/*****************
 * Controller Method #1: Simple Response
 ********************/
/***************************
 * GET: /one
 ***************************/
router.get("/one", function(request, response) {
    
    TestModel
    .findAll ({
        attributes: ["id", "testdata"]
    })
    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            response.json(data);
        },
        function findAllError(err){
            response.send(500, err.message);
        }
    );
});


router.post("/one", function(request, response){
    // TODO :: figure this out Ashley
    // response.send("Test 1 went through!");
});
/*****************
 * Controller Method #2: Persisting Data
 ********************/

 router.post("/two", function (request, response){
     let testData = "Test data for endpoint two";

     TestModel 
     .create({
         testdata: testData
     }).then(dataFromDatabase => {
         response.send("Test two went through!")
     })
 });

 /*****************
 * Controller Method #2: Persisting Data
 ********************/

 router.post("/three", function (request, response){
     let testData = request.body.testdata.item;

     TestModel
     .create({
         testdata: testData
     })
     response.send("Test three went through!")
     console.log("Test three went through!")
 });

 /*****************
 * Controller Method #3: req.body
 ********************/

 router.post("/three", function (request, response) {
     let testData = request.body.testdata.item;

     TestModel
     .create({
         testdata: testData
     })
     response.send("Test three went through!")
     console.log("Test three went through!")
 });

 //4
 router.post("/four", function (request, response){
    let testData = request.body.testdata.item;
   
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
            response.send("Test 4 went through!");
        }
    );
 }); 
/***************************
 * Route 5: Return data in a Promise
 ***************************/
router.post("/five", function (request, response){
    let testData = request.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data) {
            response.send(data);
        }
    );
});

/***************************
 * Route 6: Return response as JSON
 ***************************/
router.post("/six", function (request, response){
    let testData = request.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata){
            response.json({
                testdata: testdata
            });
        }
    );
});

/***************************
 * Route 7: Handle errors
 ***************************/
router.post("/seven", function (request, response){
    let testData = request.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata){
            response.json({
                testdata: testdata
            });
        },
        function createError(err) {
            response.send(500, err.message)
        }
    );
});

/***************************
 * GET: Get simple message from server
 ***************************/
router.get("/helloclient", function (request, response) {
    response.send("This is a message from the server to the client.")
})

module.exports = router;
