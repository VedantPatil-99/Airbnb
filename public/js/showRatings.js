let rated = document.querySelectorAll(".s-rated");
console.log(rated);
rated.forEach((rate, idx) => {
	console.log(rate.textContent);
	if (rate.textContent) {
		rate.innerHTML = svgData.smallStar;
	} else {
		console.log("wddkkd");
	}
});
