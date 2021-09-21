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

async function deletePost(req,res,next) {
    const postId = req.params.id
    try {
        const post = await Post.findOne({where: { id: postId } });
        
        if (!post) throw new createHttpError(404, "This post does not exist");

        Post.destroy({where: { id: postId }})
        
        res.json()
    } catch (err) {
        console.log(err);
        next(err);
    }
}
 
async function update(req,res,next) {
    const postId = req.params.id
    try{
        const post = await Post.findOne({where: { id: postId } });
        
        if (!post) throw new createHttpError(404, "This post does not exist");

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