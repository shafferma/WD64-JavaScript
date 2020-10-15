// Collection point and outlet for all models

const { Model } = require("sequelize/types");
const User = require("./userModule");

module.exports = {
    user: User, 
}