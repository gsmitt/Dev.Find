const router = require("express").Router();
const reviewControllers = require("../controllers/reviewControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", reviewControllers.get);
router.post("/", reviewControllers.create);

module.exports = router;