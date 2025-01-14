const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
	.route("/signup")
	.get(userController.renderSignupForm)
	.post(wrapAsync(userController.signup));

router
	.route("/login")
	.get(userController.renderLoginForm)
	.post(
		saveRedirectURL,
		passport.authenticate("local", {
			failureRedirect: "/login",
			failureFlash: true,
		}),
		userController.login,
	);

router.get("/logout", userController.logout);

module.exports = router;
