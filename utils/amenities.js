const amenities = {
	"Scenic Views": [{ name: "Garden view", icon: "/icons/garden-view.png" }],
	Bathroom: [
		{ name: "Cleaning products", icon: "/icons/cleaning-products.png" },
		{ name: "Shampoo", icon: "/icons/shampoo.png" },
		{ name: "Body soap", icon: "/icons/body-soap.png" },
		{ name: "Hot water", icon: "/icons/hot-water.png" },
		{ name: "Shower gel", icon: "/icons/shower-gel.png" },
	],
	"Bedroom and Laundry": [
		{ name: "Free washing machine", icon: "/icons/washing-machine.png" },
		{ name: "Hangers", icon: "/icons/hangers.png" },
		{ name: "Bed linen", icon: "/icons/bed-linen.png" },
		{ name: "Clothes drying rack", icon: "/icons/drying-rack.png" },
	],
	Entertainment: [
		{ name: "55-inch HDTV", icon: "/icons/hdtv.png" },
		{ name: "Sound system", icon: "/icons/sound-system.png" },
	],
	"Heating and Cooling": [
		{ name: "Air conditioning", icon: "/icons/air-conditioning.png" },
	],
	"Home Safety": [
		{
			name: "Exterior security cameras on property",
			icon: "/icons/security-camera.png",
			description:
				"Four outdoor cameras are positioned around the house for security. Upon request, all cameras can be deactivated.",
		},
	],
	"Internet and Office": [{ name: "Wifi", icon: "/icons/wifi.png" }],
	"Kitchen and Dining": [
		{
			name: "Kitchen",
			icon: "/icons/kitchen.png",
			description: "Space where guests can cook their own meals",
		},
		{ name: "Fridge", icon: "/icons/fridge.png" },
		{ name: "Microwave", icon: "/icons/microwave.png" },
		{
			name: "Cooking basics",
			icon: "/icons/cooking-basics.png",
			description: "Pots and pans, oil, salt, and pepper",
		},
		{
			name: "Dishes and cutlery",
			icon: "/icons/dishes.png",
			description: "Bowls, chopsticks, plates, cups, etc.",
		},
		{ name: "Kettle", icon: "/icons/kettle.png" },
		{
			name: "Coffee maker",
			icon: "/icons/coffee-maker.png",
			description: "Pour-over coffee",
		},
		{ name: "Wine glasses", icon: "/icons/wine-glasses.png" },
		{ name: "Rice cooker", icon: "/icons/rice-cooker.png" },
		{ name: "Dining table", icon: "/icons/dining-table.png" },
	],
	Outdoor: [
		{ name: "Patio or balcony", icon: "/icons/patio.png" },
		{
			name: "Garden",
			icon: "/icons/garden.png",
			description: "An open space on the property usually covered in grass",
		},
		{ name: "Outdoor dining area", icon: "/icons/outdoor-dining.png" },
	],
	"Parking and Facilities": [
		{
			name: "Free driveway parking on premises – 2 spaces",
			icon: "/icons/parking.png",
		},
	],
	Services: [
		{
			name: "Pets allowed",
			icon: "/icons/pets-allowed.png",
			description: "Assistance animals are always allowed",
		},
		{
			name: "Long-term stays allowed",
			icon: "/icons/long-term-stays.png",
			description: "Allow stays of 28 days or more",
		},
		{ name: "Self check-in", icon: "/icons/self-checkin.png" },
		{
			name: "Building staff",
			icon: "/icons/building-staff.png",
			description: "Someone is available 24 hours a day to let guests in",
		},
		{ name: "Cleaning available during stay", icon: "/icons/cleaning.png" },
	],
	"Not Included": [
		{ name: "Unavailable: Dryer", icon: "/icons/not-included.png" },
		{ name: "Unavailable: Essentials", icon: "/icons/not-included.png" },
		{
			name: "Unavailable: Smoke alarm",
			icon: "/icons/not-included.png",
			description: "There is no smoke alarm on the property",
		},
		{
			name: "Unavailable: Carbon monoxide alarm",
			icon: "/icons/not-included.png",
			description:
				"Host has indicated that no carbon monoxide detector is necessary. Contact the host with any questions.",
		},
		{ name: "Unavailable: Heating", icon: "/icons/not-included.png" },
	],
};

module.exports = amenities;
