const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post(
	"/login",
	saveRedirectURL,
	passport.authenticate("local", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	userController.login,
);

router.get("/logout", userController.logout);

module.exports = router;
