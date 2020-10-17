let express = require("express"); 
let router = express.Router(); 
let sequelize = require("../db");
let User = sequelize.import("../models/user");
let bcrypt = require('bcryptjs');
let jwt = require("jsonwebtoken");

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
                bcrypt.compare(request.body.password, user.passwordhash, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        response.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    }else {
                        response.status(502).send({error: "you failed, yo"});
                    }
                });
            } else {
                response.status(500).send({ error: "failed to authenticate"});
            }
        },
        function (err) {
            response.status(501).send({error: "you failed, yo"});
        }
    );
});

module.exports = router;
