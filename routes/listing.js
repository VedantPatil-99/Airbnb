const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// Index Route
router.get(
	"/",
	wrapAsync(async (req, res) => {
		let allListings = await Listing.find({});
		res.render("./listings/index.ejs", { allListings });
	}),
);

// New Route
router.get("/new", isLoggedIn, (req, res) => {
	res.render("./listings/new.ejs");
});

// Show Route
router.get(
	"/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id)
			.populate("reviews")
			.populate("owner");
		if (!listing) {
			req.flash("error", "Listing not found!");
			return res.redirect("/listings");
		}
		res.render("./listings/show.ejs", { listing });
	}),
);

// Create Route
router.post(
	"/",
	isLoggedIn,
	validateListing,
	wrapAsync(async (req, res) => {
		let newListing = new Listing(req.body.listing);
		newListing.owner = req.user._id;
		await newListing.save();
		req.flash("success", "New listing added successfully!");
		res.redirect("/listings");
	}),
);

// Edit Route
router.get(
	"/:id/edit",
	isLoggedIn,
	isOwner,
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id);
		if (!listing) {
			req.flash("error", "Listing not found!");
			return res.redirect("/listings");
		}
		res.render("./listings/edit.ejs", { listing });
	}),
);

// Update Route
router.put(
	"/:id",
	isLoggedIn,
	isOwner,
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		// console.log(req.body.listing);

		await Listing.findByIdAndUpdate(id, { ...req.body.listing });
		req.flash("success", "Listing updated successfully!");
		res.redirect(`/listings/${id}`);
	}),
);

// Delete Route
router.delete(
	"/:id",
	isLoggedIn,
	isOwner,
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let deletedListing = await Listing.findByIdAndDelete(id);
		req.flash("success", "Listing deleted successfully!");
		res.redirect("/listings");
	}),
);

module.exports = router;
