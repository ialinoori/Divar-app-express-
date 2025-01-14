const { Router } = require("express");
const postController = require("./post.controller");
const { upload } = require("../../common/utils/multer");
const Authrization = require("../../common/guard/authorization.guard");

const router = Router();

router.post("/create",Authrization,upload.array("images",10), postController.create);
router.get("/my",Authrization, postController.findMyPosts);
router.delete("/delete/:id", Authrization, postController.remove);
router.get("/show/:id", Authrization, postController.showPost);




module.exports = {
  PostRouter: router,
};
