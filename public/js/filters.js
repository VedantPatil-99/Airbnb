const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderWrapper = document.querySelector(".slider-wrapper");
let iconsToShow = Math.floor(
	sliderWrapper.offsetWidth / (sliderItems[0].offsetWidth + 20),
); // Dynamic based on wrapper width
let currentIndex = 0;

// Update the slider position based on current index
function updateSliderPosition() {
	slider.style.transform = `translateX(-${
		currentIndex * (sliderItems[0].offsetWidth + 20)
	}px)`;

	if (currentIndex === 0) {
		prevButton.style.display = "none";
		sliderWrapper.style.maskImage = "none";
	} else {
		prevButton.style.display = "";
	}

	nextButton.disabled = currentIndex + iconsToShow >= sliderItems.length;
}

// Move to the next set of icons
nextButton.addEventListener("click", () => {
	if (currentIndex + iconsToShow < sliderItems.length) {
		currentIndex += iconsToShow;
		updateSliderPosition();
	}
});

// Move to the previous set of icons
prevButton.addEventListener("click", () => {
	if (currentIndex - iconsToShow >= 0) {
		currentIndex -= iconsToShow;
		updateSliderPosition();
	}
});

// Initialize the slider
updateSliderPosition();

const taxSwitch = document.querySelector("#taxes");
const everyPrice = document.querySelectorAll(".price");
const everyTax = document.querySelectorAll(".priceNtax");
const oldPrice = document.querySelectorAll(".oldPrice");
const newPrice = document.querySelectorAll(".newPrice");
const nightsElems = document.querySelectorAll(".nights");
// console.log(nightsElems);
// console.log(everyPrice);

everyPrice.forEach((ele, idx) => {
	let numPrice = Number(ele.textContent);
	ele.textContent = numPrice.toLocaleString("en-IN");
	// console.log(ele);
});
taxSwitch.addEventListener("change", () => {
	if (taxSwitch.checked) {
		everyPrice.forEach((ele, idx) => {
			ele.classList.add("toHide");
			oldPrice[idx].classList.add("toHide");
			everyTax[idx].classList.remove("toHide");
			newPrice[idx].classList.remove("toHide");

			nightsElems[idx].classList.remove("toHide");
		});
		// console.log(everyTax);
		// console.log(everyPrice);
	} else {
		// console.log("changed");
		everyPrice.forEach((ele, idx) => {
			ele.classList.remove("toHide");
			oldPrice[idx].classList.remove("toHide");
			everyTax[idx].classList.add("toHide");
			newPrice[idx].classList.add("toHide");

			nightsElems[idx].classList.add("toHide");
		});
	}
});
