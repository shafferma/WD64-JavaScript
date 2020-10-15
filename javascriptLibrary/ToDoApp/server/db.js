const Sequelize = require("sequelize");

const applicationSequelizeObject = new Sequelize( 
    "todo-db", 
    "postgres", 
    "Goku1koji2", 
    {
    host: "localhost",
    dialect: "postgres",
    }
);
  

module.exports = applicationSequelizeObject;