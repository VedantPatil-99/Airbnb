const navbar = document.querySelector(".navbar");
const searchBar = document.querySelector(".search-bar");
document.body.style.paddingTop = `${navbar.offsetHeight + 3}px`;

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		searchBar.classList.add("scrolled");
		navbar.classList.add("border-bottom");
	} else {
		searchBar.classList.remove("scrolled");
		navbar.classList.remove("border-bottom");
	}
});
