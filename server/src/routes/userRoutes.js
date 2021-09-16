const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", userControllers.get);
router.post("/", userControllers.create);

module.exports = router;