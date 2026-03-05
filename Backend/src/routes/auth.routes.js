const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")
const authRouter = Router();


/**
 * @route POST Method
 * @description Register a new users
 * @access Public
 */

authRouter.post("/register", authController.registerUserController);

/**
 * @route POST Method
 * @description login users
 * @access Public
 */

authRouter.post("/login", authController.loginUserController);

/**
 * @route GET Method
 * @description logiout users , clear cookie and add the user in the black list
 * @access Public
 */

authRouter.get("/logout", authController.logOutUser);


/**
 * @route get /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */

authRouter.get("/get-me", authMiddleware.authUser , authController.getMeControler)



module.exports = authRouter;