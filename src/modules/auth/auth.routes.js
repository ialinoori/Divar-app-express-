const { Router } = require("express");
const authController = require("./auth.controller");
const Authrization = require("../../common/guard/authorization.guard");
const router = Router();

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);
router.get("/logout", Authrization, authController.logout);

module.exports = {
  AuthRouter: router,
};
