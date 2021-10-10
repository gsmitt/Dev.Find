const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'background', maxCount: 1 }])


router.get("/getOne/:id", auth(["admin","dev","client"]), userControllers.getOne);
router.post("/", userControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), userControllers.deleteUser);
router.put("/:id", [auth(["admin","dev","client"]), cpUpload], userControllers.update);
router.get("/getMany/:filter/:offset", auth(["admin","dev","client"]), userControllers.getMany);


module.exports = router;