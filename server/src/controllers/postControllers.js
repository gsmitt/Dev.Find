const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Post } = require("../db/models");



async function create(req, res, next) {
    try {
        const post = {
            ...req.body
        }
        const { user_id, description, title } = post;  
        
        const newPost = await Post.create({
            user_id,
            description,
            title
        });
        
        if (!newPost){

        }
        res.json(newPost);
    } catch (err) {
        console.log(err);
        next(err);
    }
}



module.exports = {
    create
};