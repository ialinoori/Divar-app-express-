const { Router } = require("express");
const postController = require("./post.controller");
const { upload } = require("../../common/utils/multer");

const router = Router();

router.post("/create",upload.array("images",10), postController.create);

module.exports = {
  PostRouter: router,
};
