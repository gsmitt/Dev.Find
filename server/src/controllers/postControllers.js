const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Post, User } = require("../db/models");



async function create(req, res, next) {
    const user_id = res.locals.userId;
    try {
        const post = {
            ...req.body
        }
        let image = null, image_key = null;
        if (req.file) {
            image = `${req.file.location}`;
            if (req.file.key) {
                image_key = `${req.file.key}`;
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

async function deletePost(req, res, next) {
    const target = req.params.id
    const userId = res.locals.userId;
    const userRole = res.locals.userRole;

    try {
        const post = await Post.findOne({ where: { id: target } });

        if (!post) throw new createHttpError(404, "This post does not exist");


        if (!((userId == post.user_id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        Post.destroy({ where: { id: target } })

        res.json()
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function update(req, res, next) {
    const target = req.params.id
    const userId = res.locals.userId;
    const userRole = res.locals.userRole;

    try {
        const post = await Post.findOne({ where: { id: target } });

        if (!post) throw new createHttpError(404, "This post does not exist");

        if (!((userId == post.user_id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        Object.assign(post, req.body);

        const updated = await post.save();

        res.json(updated)
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getOne(req, res, next) {
    const postId = req.params.id

    try {
        const post = await Post.findOne({ where: { id: postId } });
        res.json(post);
    } catch (err) {
        console.log(err);
    }
}


async function getMany(req, res, next) {
    const offset = req.params.offset
    const filter = req.params.filter


    try {
        const count = await Post.count({
            where: {
                title: filter !== 'nullValue' ? {
                    [Op.iLike]: `%${filter}%`
                } : { [Op.not]: 'null', }
            }
          });

        const list = await Post.findAll({
            attributes: ['id', 'updatedAt', 'createdAt', 'title', 'description', 'image', 'user_id'],
            include: [
                { model: User, attributes: ["name", "avatar"], as: "user" }
            ],
            where: {

                title: filter !== 'nullValue' ? {
                    [Op.iLike]: `%${filter}%`
                } : { [Op.not]: 'null', }

            },
            offset: offset,
            limit: 6,
            order: [
                ['updatedAt', 'DESC']
            ],
        });
        
        const posts = {count, list}


        res.json(posts);
    } catch (err) {
        console.log(err);
    }
}

async function getByUser(req, res, next) {
    const offset = req.params.offset
    const filter = req.params.filter
    try {
        const count = await Post.count({
            where: {
                user_id: filter
            }
          });

        const list = await Post.findAll({
            attributes: ['id', 'updatedAt', 'createdAt', 'title', 'description', 'image'],
            where: {
                user_id: filter
            },
            offset: offset,
            limit: 3,
            order: [
                ['updatedAt', 'DESC']
            ],
        });
        const posts = {count, list}

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
    getMany,
    getByUser
};