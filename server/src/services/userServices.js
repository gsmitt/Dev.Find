const createHttpError = require("http-errors");
const { User } = require("../db/models");

async function createUser(user) {
    const { name, email, password, role} = user;  

    const [ newUser, created ] = await User.findOrCreate({
        where: { email },
        defaults: {
            name,
            password,
            role
        }
    });

    if (!created) {
        throw new createHttpError(409, "User already exists");
    }
    
    return newUser;               
}

async function getUser(userId) {   
    const user = await User.findOne({ where: { id: userId }});

    if (!user) {
        throw new createHttpError(404, "User not found!");
    }

    return user;
}

module.exports = {
    createUser,
    getUser
};