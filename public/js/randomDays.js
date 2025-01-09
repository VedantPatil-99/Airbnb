function getRandomDateRange() {
	// Array of month names
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Generate random month and day
	const month = months[Math.floor(Math.random() * months.length)];
	const startDay = Math.floor(Math.random() * (28 - 1)) + 1; // Days from 1 to 28
	const endDay = startDay + 5; // Adding 5 days to the start day

	// Check if the end day is valid for the month
	const validEndDay = endDay <= 28 ? endDay : 28;

	// Generate a random number for km between 15 and 600
	const km = Math.floor(Math.random() * (600 - 15 + 1)) + 15;

	return {
		dateRange: `${startDay}-${validEndDay} ${month}`,
		km: km,
	};
}

// Example usage in client-side script
document.addEventListener("DOMContentLoaded", function () {
	const dateElements = document.querySelectorAll(".random-date");
	const kmElem = document.querySelectorAll(".random-km");

	dateElements.forEach((element, index) => {
		const result = getRandomDateRange();
		element.textContent = result.dateRange;

		// Update km in the corresponding element
		if (kmElem[index]) {
			kmElem[index].textContent = `${result.km} kilometers away`;
		}
	});
});
