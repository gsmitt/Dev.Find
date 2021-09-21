const { Op } = require("sequelize");
const createHttpError = require("http-errors");
const { Review } = require("../db/models");

async function get(req, res, next) {
    const reviewedId = req.params.id
    try {
        const reviews = await Review.findAll({where: { user_get: reviewedId} });
        console.log(reviews);

        res.json(reviews);
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
        
        const user1 = await User.findOne({where: { id: user_req } });
        const user2 = await User.findOne({where: { id: user_get } });

        if(!user1 || !user2){
            throw new createHttpError(404, "User does not exist");
        }


        const [ newReview, created ] = await Review.findOrCreate({
            where: {[Op.and]: [{ user_req }, { user_get }]},
            defaults: { description, score, user_req, user_get}
        });
    
        if (!created) {
            throw new createHttpError(409, "This user has already made a review for this user");
        }

        res.json(newReview);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function deleteReview(req,res,next) {
    const reviewId = req.params.id
    try {
        const review = await Review.findOne({where: { id: reviewId } });
        if (!review){
            throw new createHttpError(404, "This review does not exist");
        } else {
            Review.destroy({where: { id: reviewId }})
        }
        res.json()
    } catch (err) {
        console.log(err);
        next(err);
    }
}
 
async function update(req,res,next) {
    const reviewId = req.params.id
    try{
        const review = await Review.findOne({where: { id: reviewId } });
        
        if (!review) throw new createHttpError(404, "This review does not exist");

        Object.assign(review, req.body);

        const updated = await review.save();

        res.json(updated)
    } catch(err) {
        console.log(err);
        next(err);
    }
}




module.exports = {
    get,
    create,
    deleteReview,
    update
};