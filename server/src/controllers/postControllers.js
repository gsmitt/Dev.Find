const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Post } = require("../db/models");



async function create(req, res, next) {
    const user_id = res.locals.userId;
    try {
        const post = {
            ...req.body
        }
        const { description, title } = post;  
        
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

async function deletePost(req,res,next) {
    const target = req.params.id
    const userId = res.locals.userId;
    const userRole = res.locals.userRole;
    
    try {
        const post = await Post.findOne({where: { id: target } });
        
        if (!post) throw new createHttpError(404, "This post does not exist");


        if (!((userId == post.user_id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        Post.destroy({where: { id: target }})
        
        res.json()
    } catch (err) {
        console.log(err);
        next(err);
    }
}
 
async function update(req,res,next) {
    const target = req.params.id
    const userId = res.locals.userId;
    const userRole = res.locals.userRole;
    
    try{
        const post = await Post.findOne({where: { id: target } });
        
        if (!post) throw new createHttpError(404, "This post does not exist");

        if (!((userId == post.user_id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        Object.assign(post, req.body);

        const updated = await post.save();

        res.json(updated)
    } catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    create,
    deletePost,
    update
};