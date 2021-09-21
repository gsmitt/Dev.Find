const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports = (permissions) => {
    return (req, res, next) => {   
        const authToken = req.headers.authorization || "";

        if (!authToken) {
            next(createHttpError(401, "Token is missing"));
        }
        
        const [, token] = authToken.split(" ");

        try {
            const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);               

            if (!permissions.includes(payload.role)) {
                next(createHttpError(403, "You don't have permission"));    
            }
            res.locals.userId = payload.id;
            res.locals.userRole = payload.role;

            next();
        } catch (err) {
            console.log(err);
            next(createHttpError(401, "Invalid Token"));
        }    
    }    
}