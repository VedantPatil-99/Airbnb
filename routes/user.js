const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");

router.get("/signup", async (req, res) => {
	res.render("users/signup.ejs");
});

router.post(
	"/signup",
	wrapAsync(async (req, res) => {
		try {
			let { username, email, password } = req.body;
			const newUser = new User({ email, username });
			const regUser = await User.register(newUser, password);
			req.login(regUser, (err) => {
				if (err) {
					return next(err);
				}
				req.flash(
					"success",
					"Account created successfully! Welcome to Airbnb!",
				);
				res.redirect("/listings");
			});
		} catch (e) {
			req.flash("error", e.message);
			res.redirect("/signup");
		}
	}),
);

router.get("/login", (req, res) => {
	res.render("users/login.ejs");
});

router.post(
	"/login",
	passport.authenticate("local", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	async (req, res) => {
		req.flash("success", "Welcome back! Login successful.");
		res.redirect("/listings");
	},
);

router.get("/logout", (req, res, next) => {
	req.logOut((err) => {
		if (err) {
			return next(err);
		}
		req.flash("success", "You have logged out successfully.");
		res.redirect("/listings");
	});
});

module.exports = router;
