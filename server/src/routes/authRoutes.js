const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/login", authControllers.login);
router.post("/refreshToken", authControllers.refresh);

// login google
// router.post("/login-google", authControllers.loginGoogle);

module.exports = router;
