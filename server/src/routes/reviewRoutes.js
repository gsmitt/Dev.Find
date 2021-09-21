const router = require("express").Router();
const reviewControllers = require("../controllers/reviewControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", reviewControllers.get);
router.post("/", reviewControllers.create);
router.delete("/:id", reviewControllers.deleteReview);
router.put("/:id", reviewControllers.update);

module.exports = router;