const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listings");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync.js");
const {
	validateReview,
	isLoggedIn,
	isReviewAuthor,
} = require("../middleware.js");

// REVIEWS
// Post Review Route
router.post(
	"/",
	isLoggedIn,
	validateReview,
	wrapAsync(async (req, res) => {
		let listing = await Listing.findById(req.params.id);
		let newReview = new Review(req.body.review);
		newReview.author = req.user._id;
		listing.reviews.push(newReview);
		await newReview.save();
		await listing.save();
		req.flash("success", "Review added successfully!");
		res.redirect(`/listings/${req.params.id}`);
	}),
);

// Delete Review Route
router.delete(
	"/:reviewId",
	isReviewAuthor,
	wrapAsync(async (req, res) => {
		let { id, reviewId } = req.params;

		await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
		await Review.findByIdAndDelete(reviewId);
		req.flash("success", "Review deleted successfully!");
		res.redirect(`/listings/${id}`);
	}),
);

module.exports = router;
