const router = require("express").Router();
const postControllers = require("../controllers/postControllers");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth(["admin","dev","client"]), postControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), postControllers.deletePost);
router.put("/:id", auth(["admin","dev","client"]), postControllers.update);

module.exports = router;