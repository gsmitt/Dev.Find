const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

router.get("/:id", auth(["admin","dev","client"]), userControllers.get);
router.post("/", userControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), userControllers.deleteUser);
router.put("/:id", auth(["admin","dev","client"]), userControllers.update);

module.exports = router;