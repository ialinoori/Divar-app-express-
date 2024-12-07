const { Router } = require("express");
const userController = require("./user.controller");
const Authrization = require("../../common/guard/authorization.guard");
const router = Router();

router.get("/whoami", Authrization,userController.whoami);

module.exports = {
  UserRouter: router,
};
