const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Post } = require("../db/models");



async function create(req, res, next) {
    const user_id = res.locals.userId;
    try {
        const post = {
            ...req.body
        }
        let image = null, image_key = null;
        if(req.files.image){
            image = `${req.files.image.location}`;
            if(req.files.image.key){
                image_key = `${req.files.image.key}`;
            }
        }

        const { description, title } = post; 

        const newPost = await Post.create({
            user_id,
            description,
            title,
            image,
            image_key
        });
        
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

async function getOne(req, res, next) {
    const postId = req.params.id

    try {
        const post = await Post.findOne({where: { id: postId } });
        res.json(post);
    } catch (err) {
        console.log(err);
    }
}


async function getMany(req,res,next){
    const offset = req.params.offset
    const filter = req.params.filter
     

    try {
        const posts = await Post.findAll({
            attributes: ['id', 'updatedAt', 'createdAt', 'title', 'description', 'image', 'user_id'], 
            where:{
                [Op.or]: [
                    {title: filter !== 'nullValue' ? {
                        [Op.iLike]: `%${filter}%`
                    } : {[Op.not]: 'null',}},
                    {user_id: filter !== 'nullValue'?
                        filter: {[Op.is]: null}}
                ]
            }, 
            offset: offset, 
            limit: 16, 
            order: [
            ['updatedAt', 'DESC']
            ],
        });

        res.json(posts);
    } catch (err) {
        console.log(err);
    }
}




module.exports = {
    create,
    deletePost,
    update,
    getOne,
    getMany
};