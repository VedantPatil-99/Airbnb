const Listing = require("../models/listings");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
	let allListings = await Listing.find({});
	res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
	res.render("./listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
	let { id } = req.params;
	let listing = await Listing.findById(id)
		.populate({ path: "reviews", populate: { path: "author" } })
		.populate("owner");
	if (!listing) {
		req.flash("error", "Listing not found!");
		return res.redirect("/listings");
	}
	res.render("./listings/show.ejs", { listing });
};

// module.exports.createListing = async (req, res) => {
// 	try {
// 		console.log("Received Form Data:", req.body); // Log incoming data

// 		// Geocode the location using Mapbox
// 		let response = await geocodingClient
// 			.forwardGeocode({
// 				query: req.body.listing.location,
// 				limit: 1,
// 			})
// 			.send();

// 		// Extract image details
// 		let filename = req.file ? req.file.filename : null;
// 		let url = req.file ? req.file.path : null;

// 		// Create a new listing
// 		let newListing = new Listing(req.body.listing);
// 		newListing.owner = req.user._id;
// 		newListing.image = filename && url ? { filename, url } : null;
// 		newListing.geometry = response.body.features[0].geometry;

// 		// // Handle amenities selection
// 		// if (req.body.amenities) {
// 		// 	newListing.amenities = Array.isArray(req.body.amenities)
// 		// 		c? req.body.amenities
// 		// 		: [req.body.amenities]; // Convert single selection to array
// 		// } else {
// 		// 	newListing.amenities = []; // Default to empty array
// 		// }

// 		// Save to the database
// 		let savedListing = await newListing.save();
// 		console.log("Saved Listing:", savedListing); // Log saved listing

// 		req.flash("success", "New listing added successfully!");
// 		res.redirect("/listings");
// 	} catch (error) {
// 		console.error("Error creating listing:", error);
// 		req.flash("error", "Something went wrong!");
// 		res.redirect("/listings/new");
// 	}
// };

module.exports.createListing = async (req, res) => {
	let response = await geocodingClient
		.forwardGeocode({
			query: req.body.listing.location,
			limit: 1,
		})
		.send();

	let filename = req.file.filename;
	let url = req.file.path;
	let newListing = new Listing(req.body.listing);
	newListing.owner = req.user._id;
	newListing.image = { filename, url };
	newListing.geometry = response.body.features[0].geometry;

	// Handle amenities selection
	// try {
	// 	if (req.body.amenities) {
	// 		newListing.amenities = Array.isArray(req.body.amenities)
	// 			? req.body.amenities
	// 			: [req.body.amenities]; // Convert to array if only one is selected
	// 		console.log(newListing.amenities);
	// 	} else {
	// 		newListing.amenities = []; // Default to empty array if none selected
	// 	}
	// } catch (err) {
	// 	console.log(err);
	// }

	let savedListing = await newListing.save();
	console.log(savedListing);
	req.flash("success", "New listing added successfully!");
	res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
	let { id } = req.params;
	let listing = await Listing.findById(id);
	if (!listing) {
		req.flash("error", "Listing not found!");
		return res.redirect("/listings");
	}

	res.render("./listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
	let { id } = req.params;
	// console.log(req.body.listing);
	let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

	let response = await geocodingClient
		.forwardGeocode({
			query: req.body.listing.location,
			limit: 1,
		})
		.send();
	listing.geometry = response.body.features[0].geometry;

	if (typeof req.file !== "undefined") {
		let filename = req.file.filename;
		let url = req.file.path;
		listing.image = { filename, url };
		await listing.save();
	}
	await listing.save();
	req.flash("success", "Listing updated successfully!");
	res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
	let { id } = req.params;
	let deletedListing = await Listing.findByIdAndDelete(id);
	req.flash("success", "Listing deleted successfully!");
	res.redirect("/listings");
};
