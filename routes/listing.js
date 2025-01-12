const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema, reviewSchema } = require("../schema.js");

// Middleware
const validateListing = (req, res, next) => {
	let { error } = listingSchema.validate(req.body);

	// console.log(error.details[0].message);
	if (error) {
		let errMsg = error.details.map((ele) => ele.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

// Index Route
router.get(
	"/",
	wrapAsync(async (req, res) => {
		let allListings = await Listing.find({});
		res.render("./listings/index.ejs", { allListings });
	}),
);

// New Route
router.get("/new", (req, res) => {
	res.render("./listings/new.ejs");
});

// Show Route
router.get(
	"/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id).populate("reviews");
		res.render("./listings/show.ejs", { listing });
	}),
);

// Create Route
router.post(
	"/",
	validateListing,
	wrapAsync(async (req, res) => {
		let newListing = new Listing(req.body.listing);
		await newListing.save();
		res.redirect("/listings");
	}),
);

// Edit Route
router.get(
	"/:id/edit",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id);
		res.render("./listings/edit.ejs", { listing });
	}),
);

// Update Route
router.put(
	"/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		// console.log(req.body.listing);
		await Listing.findByIdAndUpdate(id, { ...req.body.listing });
		res.redirect(`/listings/${id}`);
	}),
);

// Delete Route
router.delete(
	"/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let deletedListing = await Listing.findByIdAndDelete(id);
		res.redirect("/listings");
	}),
);

module.exports = router;
