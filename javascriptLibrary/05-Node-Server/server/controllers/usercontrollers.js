let express = require("express"); 
let router = express.Router(); 
let sequelize = require("../db");
let User = sequelize.import("../models/user");
let bcrypt = require('bcryptjs');
let jwt = require("jsonwebtoken");
const { response } = require("express");

/****************
 ** Create User Endpoint: Starter** 
 ****************/
router.post("/createuser", function (request, response){
    let username = request.body.user.username
    let pass = request.body.user.password

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    })
    .then(
        function createSucess(user){
            let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
            
            response.json({
                user: user,
                message: "created",
                sessionToken: token
            });    
        },
        function createError(err){
            response.send(500, err.message);
        }
    );
})

router.post('/signin', function(request, response){
    User.findOne( { where: { username: request.body.user.username}})
        .then(
        function(user) {
            if (user) {
                response.json(user);
            } else {
                response.status(500).send({ error: "you failed, yo"});
            }
        }
    );
});

module.exports = router;
