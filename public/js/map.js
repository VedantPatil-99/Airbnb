//  ========== MAP ==========

// Create the outer div (container)
const containerMap = document.createElement("div");
containerMap.className = "marker-container";

const marker_circle = document.createElement("div");
marker_circle.className = "marker-circle";

// Create the front side (home icon)
const frontSide = document.createElement("div");
frontSide.className = "marker-side front";
frontSide.innerHTML = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m8.94959955 1.13115419 5.71719515 4.68049298c.2120231.18970472.3332053.46073893.3332053.74524138v7.94311145c0 .2761424-.2238576.5-.5.5h-4.5v-5.5c0-.24545989-.17687516-.44960837-.41012437-.49194433l-.08987563-.00805567h-3c-.27614237 0-.5.22385763-.5.5v5.5h-4.5c-.27614237 0-.5-.2238576-.5-.5v-7.95162536c0-.28450241.12118221-.55553661.3502077-.75978249l5.70008742-4.65820288c.55265671-.45163993 1.34701168-.45132001 1.89930443.00076492z"></path></svg>`;

// Create the back side (airbnb icon)
const backSide = document.createElement("div");
backSide.className = "marker-side back";
backSide.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"/></svg>`;

// Append both sides to the container
containerMap.appendChild(marker_circle);
containerMap.appendChild(frontSide);
containerMap.appendChild(backSide);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
	container: "map", // container ID
	center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
	zoom: 14, // starting zoom
});

// Create a single popup to be used for both marker and hover
const popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
	offset: 25,
});

// Set the popup content
popup.setHTML("<p class='m-0'>Exact location provided after booking.</p>");

// Add marker
const marker = new mapboxgl.Marker(containerMap)
	.setLngLat(listing.geometry.coordinates)
	.setPopup(popup)
	.addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// disable map zoom when using scroll
map.scrollZoom.disable();

map.addControl(new mapboxgl.FullscreenControl());

map.on("mouseenter", "markers", (e) => {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = "pointer";

	// Copy coordinates array.
	const coordinates = listing.geometry.coordinates;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	if (["mercator", "equirectangular"].includes(map.getProjection().name)) {
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
	}

	// Show the popup
	popup.setLngLat(coordinates).addTo(map);
});

map.on("mouseleave", "markers", () => {
	map.getCanvas().style.cursor = "";
	popup.remove();
});

marker.getElement().addEventListener("mouseenter", () => marker.togglePopup());
marker.getElement().addEventListener("mouseleave", () => marker.togglePopup());
