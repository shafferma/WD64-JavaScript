const { Router, request, response } = require("express");

const UsersControllerRouter = Router();

// CRUD-DY CODE FOR USERS
// C - Create a user by registration (url): "/register"
// R - Read the user profile         (url): "/profile", "/login"
// U - Update user information       (url): "/update"
// D - (delete) NUKE the user        (url): "/terminate"

// Kinds request:
// POST - Create new info, insert infor into db, or sends information 
// GET - Retrieve information, or pull information from db (give me an html doc)
// PUT - Modifies existing information
// DELETE - Exterminate data from the db

UsersControllerRouter.post("/register", (request, response) => {
    // PROCESS:
    // Retrieve the data from the body of the request
    // !!!! Use that data to craft a USER
    // !!!! Save the USER to the db
    // Respond with the status of the action 

    response.json({
        message: "Hello from the user Register route!",
    })
});

UsersControllerRouter.post("/login", (request, response) => {
    //PROCESS:
    // Retrieve the data from the body of the request
    // Verify the user exists, and the data matches what is in the record
    // If so: respond with a token 
    // If not: respond with "You shall not pass!!"
    response.json({
        message: "Hello from the user Login route!",
    })
});

// TODO: Implement the following routes: "profile", "update", "terminate"

module.exports = UsersControllerRouter;