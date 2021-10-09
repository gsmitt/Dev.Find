const router = require("express").Router();
const postControllers = require("../controllers/postControllers");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }])

router.post("/", [auth(["admin","dev","client"]), cpUpload], postControllers.create);
router.delete("/:id", [auth(["admin","dev","client"])], postControllers.deletePost);
router.put("/:id", [auth(["admin","dev","client"]), cpUpload], postControllers.update);
router.get("/:filter/:offset", auth(["admin","dev","client"]), postControllers.get)


module.exports = router;