const express = require("express");
let app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listings");
const Review = require("./models/review");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema.js");
const listings = require("./routes/listing.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

main()
	.then(() => {
		console.log("Connection successful");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
	res.send("Hi, I'm root.");
});

app.use("/listings", listings);

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
app.post(
	"/listings/:id/reviews",
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
app.delete(
	"/listings/:id/reviews/:reviewId",
	wrapAsync(async (req, res) => {
		let { id, reviewId } = req.params;

		await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
		await Review.findByIdAndDelete(reviewId);

		res.redirect(`/listings/${id}`);
	}),
);

app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
	let { statusCode = 500, message = "Something Went Wrong!" } = err;
	res.status(statusCode).render("error.ejs", { message });
	// res.status(statusCode).send(message);
});

app.listen(8080, (res) => {
	console.log("Server is listening to the port 8080");
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new home",
//     description: "This is the new house",
//     price: 2000,
//     country: "India",
//     location: "maharashtra",
//   });

//   await sampleListing.save();
//   res.send("Successful");
//   console.log("Sample was saved");
// })
