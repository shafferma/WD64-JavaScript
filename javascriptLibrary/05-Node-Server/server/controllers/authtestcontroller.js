let router = require("express").Router();
let sequelize = require("../db");
let User = sequelize.import("../models/user");
let AuthTestModel = sequelize.import("../models/authtest");
/* ***************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************** */
router.get("/getall", function(request, response){
    let userid = request.user.id;
    AuthTestModel
        .findAll({
            where: { owner: userid}
        })
        .then(
            function findAllSuccess(data) {
                response.json(data);
            },
            function findAllError(err){
                response.send(500, err.message);
            }
        );
});

/* ***************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************** */
router.post("/create", function (request, response){
    let owner = request.user.id;
    let authTestData = request.body.authtestdata.item;

    AuthTestModel
    .create({
        authtestdata: authTestData,
        owner: owner
    })
    .then(
        function createSuccess(authtestdata){
            response.json({
                authtestdata: authtestdata
            });
        },
        function createError(err){
            response.send(500, err.message);
        }
    );
});
/* ***************************
* GET SINGLE ITEM FOR INDIVIDUAL USER
*************************** */
router.get("/id", function(request, response){
    let data = request.params.id;
    let userid = request.user.id;

    AuthTestModel 
    .findOne({
        where: { id: data, owner: userid}
    }).then(
        function findOneSuccess(data) {
            response.json(data);
        },
        function findOneError(err){
            response.send(500, err.message);
        }
    );
});
/* ***************************
* DELETE ITEM FOR INDIVD USER
*************************** */
router.delete("/delete/:id", function(request, response){
    let data = request.params.id;
    let userid = request.user.id;

    AuthTestModel
    .destroy({
        where: { id: data, owner: userid }
    }).then(
        function deleteLogSuccess(data){
            response.send("you removed a log");
        },
        function deleteLogError(err){
            response.send(500, err.message);
        }
    );
});

/* ***************************
* UPDATE ITEM FOR INDIVID. USER
*************************** */
router.put("/update/:id", function(request,response){
    let data = request.params.id; 
    let authtestdata = request.body.authtestdata.item;

    AuthTestModel
    .update({
        authtestdata: authtestdata
    },
    {where: {id:data}}
    ).then(
        function updateSuccess(updatedLog){
            response.json({
                authtestdata: authtestdata
            });
        },
        function updateError(err){
            response.send(500, err.message);
        }
    )
});


module.exports = router;