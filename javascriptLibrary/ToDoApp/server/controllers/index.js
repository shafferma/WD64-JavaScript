// Purpose: (CRUD - CREATE READ UPDATE DELETE)
// Crud for LISTS
// Crud for ITEMS
// Optional: Crud for USERS

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

// Current Goal: Test Controller

const {request} = require("express");

const TestController = require("./TestController");

module.exports = {
    test: TestController
}