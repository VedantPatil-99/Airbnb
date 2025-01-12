const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listings");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../schema.js");

const validateReview = (req, res, next) => {
	let { error } = reviewSchema.validate(req.body);

	// console.log(error.details[0].message);
	if (error) {
		let errMsg = error.details.map((ele) => ele.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

// REVIEWS
// Post Review Route
router.post(
	"/",
	validateReview,
	wrapAsync(async (req, res) => {
		let listing = await Listing.findById(req.params.id);
		let newReview = new Review(req.body.review);

		listing.reviews.push(newReview);
		await newReview.save();
		await listing.save();

		res.redirect(`/listings/${req.params.id}`);
	}),
);

// Delete Review Route
router.delete(
	"/:reviewId",
	wrapAsync(async (req, res) => {
		let { id, reviewId } = req.params;

		await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
		await Review.findByIdAndDelete(reviewId);

		res.redirect(`/listings/${id}`);
	}),
);

module.exports = router;
