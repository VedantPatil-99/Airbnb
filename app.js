const express = require("express");
let app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listings");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");

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

// Index Route
app.get(
	"/listings",
	wrapAsync(async (req, res) => {
		let allListings = await Listing.find({});
		res.render("./listings/index.ejs", { allListings });
	}),
);

// New Route
app.get("/listings/new", (req, res) => {
	res.render("./listings/new.ejs");
});

// Show Route
app.get(
	"/listings/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id);
		res.render("./listings/show.ejs", { listing });
	}),
);

// Create Route
app.post(
	"/listings",
	wrapAsync(async (req, res) => {
		let newListing = new Listing(req.body.listing);
		await newListing.save();
		res.redirect("/listings");
	}),
);

// Edit Route
app.get(
	"/listings/:id/edit",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findById(id);
		res.render("./listings/edit.ejs", { listing });
	}),
);

// Update Route
app.put(
	"/listings/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		// console.log(req.body.listing);
		await Listing.findByIdAndUpdate(id, { ...req.body.listing });
		res.redirect(`/listings/${id}`);
	}),
);

// Delete Route
app.delete(
	"/listings/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let deletedListing = await Listing.findByIdAndDelete(id);
		res.redirect("/listings");
	}),
);

app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
	let { statusCode = 500, message = "Something Went Wrong!" } = err;
	res.status(statusCode).send(message);
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
