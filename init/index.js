const mongoose = require("mongoose");
const Listing = require("../models/listings");
const initData = require("./data");

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

const initDB = async () => {
	await Listing.deleteMany({});
	initData.data = initData.data.map((obj) => ({
		...obj,
		owner: "678553deeba10b8932d2cfca",
	}));
	await Listing.insertMany(initData.data);
	console.log("data initialized");
};

initDB();
