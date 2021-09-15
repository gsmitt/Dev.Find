const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Review } = require("../db/models");

async function get(req, res, next) {
    const reviewId = req.params.id
    try {
        const review = await Review.findOne({where: { id: reviewId} });
        console.log(review);

        res.json(review);
    } catch (err) {
        console.log(err);
    }
}

async function create(req, res, next) {
    try {
        const review = {
            ...req.body
        }
        const { description, score, user_req, user_get } = review;  
        
        const [ newReview, created ] = await Review.findOrCreate({
            where: {[Op.and]: [{ user_req }, { user_get }]},
            defaults: { description, score }
        });
    
        if (!created) {
            throw new createHttpError(409, "This user has already made a review for this user!");
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