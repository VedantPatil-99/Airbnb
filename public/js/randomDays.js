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

	const nights = validEndDay - startDay;
	return {
		dateRange: `${startDay}-${validEndDay} ${month}`,
		km: km,
		nights: nights,
	};
}

// Example usage in client-side script
document.addEventListener("DOMContentLoaded", function () {
	const dateElements = document.querySelectorAll(".random-date");
	const kmElem = document.querySelectorAll(".random-km");
	const nightsElems = document.querySelectorAll(".nights");
	dateElements.forEach((ele, idx) => {
		const result = getRandomDateRange();
		ele.textContent = result.dateRange;
		nightsElems[idx].textContent = `${result.nights} nights · `;
		// Update km in the corresponding element
		if (kmElem[idx]) {
			kmElem[idx].textContent = `${result.km}  kilometers away`;
		}
	});
});

const priceTaxes = document.querySelectorAll(".priceNtax");

document.addEventListener("DOMContentLoaded", function () {
	priceTaxes.forEach((ele, idx) => {
		const result = getRandomDateRange();
		// console.log(ele.textContent, idx);

		let oldPrice = Number(ele.textContent);
		// console.log(typeof oldPrice);

		let newPrice = oldPrice * result.nights;
		// console.log(`new ${newPrice}`);

		ele.textContent = newPrice.toLocaleString("en-IN");
	});

	// tax

	// oldPrice = Number(priceTaxes[index].textContent);
	// console.log(priceTaxes);
	// for (let i of priceTaxes[index]) {
	// 	console.log(i);
	// }
	// let totalNights = Number(result.nights);
	// let newPrices = (oldPrice * totalNights).toLocaleString("en-IN");
	// console.log(typeof newPrices);
	// for (const newPrice of newPrices) {
	// 	priceTaxes[index].textContent = newPrice;
	// }
});
