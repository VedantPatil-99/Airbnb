const Listing = require("../models/listings");

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

module.exports.createListing = async (req, res) => {
	let filename = req.file.filename;
	let url = req.file.path;
	let newListing = new Listing(req.body.listing);
	newListing.owner = req.user._id;
	newListing.image = { filename, url };
	await newListing.save();
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

	await Listing.findByIdAndUpdate(id, { ...req.body.listing });
	req.flash("success", "Listing updated successfully!");
	res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
	let { id } = req.params;
	let deletedListing = await Listing.findByIdAndDelete(id);
	req.flash("success", "Listing deleted successfully!");
	res.redirect("/listings");
};
