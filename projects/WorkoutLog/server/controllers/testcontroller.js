let express = require("express");
let router = express.Router();

router.get("/", function (request, response){
    response.send("Do you see me? Test Route");
});

module.exports = router;