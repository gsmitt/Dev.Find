const createHttpError = require("http-errors");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");
 

async function login(req, res, next) {
    try {
        const { credential, password } = req.body;

        let registeredUser
    
        if (validator.validate(credential)){
            registeredUser = await User.findOne({ where: { email: credential } });
        } else {
            registeredUser = await User.findOne({ where: { username: credential } });
        }
            
        res.json(registeredUser);

    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    login
}