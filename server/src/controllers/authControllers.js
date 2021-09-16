const createHttpError = require("http-errors");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");
 

function createAcessToken(id) {

}

async function login(req, res, next) {
    try {
        const { credential, password } = req.body;

        let registeredUser
    
        if (validator.validate(credential)){
            registeredUser = await User.findOne({ where: { email: credential } });
        } else {
            registeredUser = await User.findOne({ where: { username: credential } });
        }

        if (!registeredUser) {
            throw new createHttpError(401, "Invalid credentials");
        }
        
        const isPasswordValid = registeredUser.isPasswordValid(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "Invalid credentials");
        }

        res.json("Arrumar depois");

    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    login
}