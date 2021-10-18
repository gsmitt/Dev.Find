const router = require("express").Router();
const reviewControllers = require("../controllers/reviewControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/getByUser/:id/:offset", auth(["admin","dev","client"]), reviewControllers.get);
router.post("/", auth(["admin","dev","client"]), reviewControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), reviewControllers.deleteReview);
router.put("/:id", auth(["admin","dev","client"]), reviewControllers.update);

module.exports = router;