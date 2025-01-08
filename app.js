const express = require("express");
let app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listings");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
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
app.get("/listings", async (req, res) => {
	let allListings = await Listing.find({});
	res.render("./listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
	res.render("./listings/new.ejs");
});

// Create Route
app.post("/listings", async (req, res) => {
	let newListing = new Listing(req.body.listing);
	await newListing.save();
	res.redirect("/listings");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
	let { id } = req.params;
	let listing = await Listing.findById(id);
	res.render("./listings/show.ejs", { listing });
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

app.listen(8080, (res) => {
	console.log("Server is listening to the port 8080");
});
