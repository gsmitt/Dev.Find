const createHttpError = require("http-errors");

module.exports = (permissions) => {
    return (req, res, next) => {        
        try {

            res.locals.userId = req;

            next();
        } catch (error) {
            console.log(error);
            next(createHttpError(401, "Invalid Token"));
        }    
    }    
}