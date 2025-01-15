const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route, Create Route
router
	.route("/")
	.get(wrapAsync(listingController.index))
	// .post(
	// 	isLoggedIn,
	// 	validateListing,
	// 	wrapAsync(listingController.createListing),
	// );
	.post(upload.single("listing[image]"), (req, res) => {
		res.send(req.file);
	});

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Route, Update Route, Delete Route
router
	.route("/:id")
	.get(wrapAsync(listingController.showListings))
	.put(isLoggedIn, isOwner, wrapAsync(listingController.updateListing))
	.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
	"/:id/edit",
	isLoggedIn,
	isOwner,
	wrapAsync(listingController.renderEditForm),
);

module.exports = router;
