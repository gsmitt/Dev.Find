const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { User, Review } = require("../db/models");
//const fs = require("fs")
const aws = require("aws-sdk");


async function getOne(req, res, next) {
    const userId = req.params.id

    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        });

        //user.score = Math.round(reviewCount / reviewSum * 10) / 10
        
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

async function getMany(req, res, next) {
    const offset = req.params.offset
    const filter = req.params.filter
    try {
        const count = await User.count({
            where: {
                [Op.and]: [{
                    [Op.or]: [
                        {
                            name: filter !== 'nullValue' ? {
                                [Op.iLike]: `%${filter}%`
                            } : { [Op.not]: 'null', }
                        },
                        {
                            description: filter !== 'nullValue' ? {
                                [Op.iLike]: `%${filter}%`
                            } : { [Op.not]: 'null', }
                        }
                    ]
                },
                { role: "dev" }
                ]
            }
        });

        const list = await User.findAll({
            attributes: ['id', 'updatedAt', 'createdAt', 'name', 'avatar', 'description'],
            where: {
                [Op.and]: [{
                    [Op.or]: [
                        {
                            name: filter !== 'nullValue' ? {
                                [Op.iLike]: `%${filter}%`
                            } : { [Op.not]: 'null', }
                        },
                        {
                            description: filter !== 'nullValue' ? {
                                [Op.iLike]: `%${filter}%`
                            } : { [Op.not]: 'null', }
                        }
                    ]
                },
                { role: "dev" }
                ]
            },
            offset: offset,
            limit: 6,
            order: [
                ['updatedAt', 'DESC']
            ],
        });

        const users = { count, list }

        console.log(users);

        res.json(users);
    } catch (err) {
        console.log(err);
    }
}

async function create(req, res, next) {
    try {
        const user = {
            ...req.body
        }
        const { name, email, password, role, username } = user;

        const [newUser, created] = await User.findOrCreate({
            where: { [Op.or]: [{ email }, { username }] },
            defaults: { name, password, role, email, username }
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

async function deleteUser(req, res, next) {
    const target = req.params.id
    const userId = res.locals.userId;
    const userRole = res.locals.userRole;
    try {
        const user = await User.findOne({ where: { id: target } });

        if (!user) throw new createHttpError(404, "This user does not exist");

        if (!((userId == user.id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        User.destroy({ where: { id: target } })

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

    const newData = { ...req.body }

    if (req.files.avatar) {
        av = req.files.avatar[0]
        newData.avatar = `${av.location}`
        if (av.key) {
            newData.avatar_key = `${av.key}`;
        }
    }

    if (req.files.background) {
        bg = req.files.background[0]
        newData.background = `${bg.location}`;
        if (bg.key) {
            newData.background_key = `${bg.key}`;
        }
    }

    try {
        const user = await User.findOne({ where: { id: target } });

        if (!user) throw new createHttpError(404, "This user does not exist");

        if (!((userId == user.id) || (userRole == "admin"))) throw new createHttpError(403, "You don't have permission to do this");

        const s3 = new aws.S3()

        if (user.avatar_key) {
            var avatar_params = {
                Bucket: process.env.BUCKET_NAME,
                Key: user.avatar_key
            };

            s3.deleteObject(avatar_params, function (err, data) {
                if (err) console.log(err, err.stack);
                else console.log(data);
            });
        }

        if (user.background_key) {
            var background_params = {
                Bucket: process.env.BUCKET_NAME,
                Key: user.background_key
            };

            s3.deleteObject(background_params, function (err, data) {
                if (err) console.log(err, err.stack);
                else console.log(data);
            });
        }


        Object.assign(user, newData);
        console.log(user)

        const updated = await user.save();

        res.json(updated)
    } catch (err) {
        console.log(err);
        next(err);
    }
}


module.exports = {
    getOne,
    create,
    deleteUser,
    update,
    getMany
};