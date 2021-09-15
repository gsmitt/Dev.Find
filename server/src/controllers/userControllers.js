const createHttpError = require("http-errors");
const { User } = require("../db/models");


async function get(req, res, next) {
    const userId = req.params.id

    try {
        const user = await User.findOne({where: { id: userId} });
        console.log(user);

        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

async function create(req, res, next) {
    try {
        const user = {
            ...req.body
        }
        const { name, email, password, role} = user;  
        
        const [ newUser, created ] = await User.findOrCreate({
            where: { email },
            defaults: {name, password,role}
        });
    
        if (!created) {
            throw new createHttpError(409, "User already exists");
        }

        res.json(newUser);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    get,
    create
};