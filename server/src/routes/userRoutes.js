const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", auth([]), userControllers.get);
router.post("/", auth([]), userControllers.create);

module.exports = router;