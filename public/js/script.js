// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false,
		);
	});
})();

document.addEventListener("DOMContentLoaded", () => {
	const toastEl = document.querySelector(".toast");
	if (toastEl) {
		const toast = new bootstrap.Toast(toastEl);
		toast.show();
	}
});

const navbar = document.querySelector(".navbar");
const searchBar = document.querySelector(".search-bar");
document.body.style.paddingTop = `${
	navbar.offsetHeight + searchBar.offsetHeight
}px`;

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		searchBar.classList.add("scrolled");
		navbar.classList.add("border-bottom");
	} else {
		searchBar.classList.remove("scrolled");
		navbar.classList.remove("border-bottom");
	}
});
