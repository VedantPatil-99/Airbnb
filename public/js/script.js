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

const popoverTriggerList = document.querySelectorAll(
	'[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
	(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);
const popover = new bootstrap.Popover(".popover-dismiss", {
	trigger: "focus",
});
