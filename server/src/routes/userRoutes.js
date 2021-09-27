const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'background', maxCount: 1 }])


router.get("/:id", auth(["admin","dev","client"]), userControllers.get);
router.post("/", userControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), userControllers.deleteUser);
router.put("/:id", [auth(["admin","dev","client"]), cpUpload], userControllers.update);

module.exports = router;