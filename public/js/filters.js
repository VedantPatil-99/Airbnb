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
