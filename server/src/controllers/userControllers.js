const userServices = require("../services/userServices");

async function get(req, res, next) {
    try {   
        const user = await userServices.getUser(res.locals.userId);
        res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const user = {
            ...req.body
        }
        const newUser = await userServices.createUser(user);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    get,
    create
};