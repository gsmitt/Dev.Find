const router = require("express").Router();
const postControllers = require("../controllers/postControllers");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

router.post("/", auth(["admin","dev","client"]), upload.single("image"), postControllers.create);
router.delete("/:id", auth(["admin","dev","client"]), postControllers.deletePost);
router.put("/:id", auth(["admin","dev","client"]), upload.single("image"), postControllers.update);
router.get("/getMany/:filter/:offset", auth(["admin","dev","client"]), postControllers.getMany);
router.get("/getOne/:id", auth(["admin","dev","client"]), postControllers.getOne);
router.get("/getByUser/:filter/:offset", auth(["admin","dev","client"]), postControllers.getByUser);


module.exports = router;