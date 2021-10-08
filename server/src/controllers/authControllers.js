const createHttpError = require("http-errors");
const { User, RefreshToken } = require("../db/models");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");
const ms = require("ms");
const { OAuth2Client } = require('google-auth-library');
const { randomBytes } = require("crypto");


async function createRefreshToken(id, role) {
    // Define a Expiração
    const refreshTokenExpiration = Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION);    

    // Cria o Token
    const newRefreshToken = jwt.sign(
        { id, role }, 
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: refreshTokenExpiration }
    );

    // Armazena o Token
    try {
        const [refreshToken, created] = await RefreshToken.findOrCreate({
            where: { user_id: id },
            defaults: {
                token: newRefreshToken,
                expiresIn: refreshTokenExpiration
            }
        });
    
        if (!created) {
            refreshToken.token = newRefreshToken;
            refreshToken.expiresIn = refreshTokenExpiration;
            await refreshToken.save();
        }
        
        return newRefreshToken;
    } catch (error) {
        console.log(error);
        throw new createHttpError(500, "Refresh token creation error");
    }        
}

function createAccessToken(id, role) {
    const token = jwt.sign(
        { id, role }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    return token;
}

async function login(req, res, next) {
    try {
        const { credential, password } = req.body;

        let registeredUser
    
        if (validator.validate(credential)){
            registeredUser = await User.findOne({ where: { email: credential } });
        } else {
            registeredUser = await User.findOne({ where: { username: credential } });
        }

        if (!registeredUser) {
            throw new createHttpError(401, "Invalid credentials");
        }
        
        const isPasswordValid = registeredUser.isPasswordValid(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "Invalid credentials");
        }

        const accessToken = createAccessToken(registeredUser.id, registeredUser.role);
        const refreshToken = await createRefreshToken(registeredUser.id, registeredUser.role);
        res.json({ accessToken, refreshToken });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function refresh(req, res, next) {
    const { refreshToken } = req.body;

    try {
        const validRefreshToken = await RefreshToken.findOne({
            where: {
                token: refreshToken
            },
            include: "user"
        });
    
        if (!validRefreshToken) {
            throw new createHttpError(401, "Invalid refresh-token");
        }        

        if (validRefreshToken.expiresIn < Date.now()) {
            throw new createHttpError(401, "Expirated refresh-token")
        }        
    
        const accessToken = createAccessToken(validRefreshToken.user.id, validRefreshToken.user.role);
        
        res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Falta terminar, não aguento mais.
async function loginGoogle(req, res, next) {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);

    try {
        const { googleToken } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: googleToken,
            audience: CLIENT_ID,
        });
    
        const payload = ticket.getPayload();      
        
        console.log(payload);


        const [ user ] = await User.findOrCreate({
            where: {
                email: payload.email
            },
            defaults: {
                name: payload.name,
                password: randomBytes(16).toString("hex")

            }
        });

        const accessToken = await createAccessToken(user.id);
        const refreshToken = await createRefreshToken(user.id);

        const tokens = { accessToken, refreshToken };

        res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
        throw new createHttpError(401, "Invalid Google Token");
    }
}


module.exports = {
    login,
    refresh,
    loginGoogle
}