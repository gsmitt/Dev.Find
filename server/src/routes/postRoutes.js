const router = require("express").Router();
const postControllers = require("../controllers/postControllers");
const auth = require("../middlewares/authMiddleware");

router.post("/", postControllers.create);
//router.delete("/:id", postControllers.delete)

module.exports = router;