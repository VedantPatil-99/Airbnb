const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");

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

			req.flash("success", "Account created successfully! Welcome to Airbnb!");
			res.redirect("/listings");
		} catch (e) {
			req.flash("error", e.message);
			res.redirect("/signup");
		}
	}),
);

module.exports = router;
