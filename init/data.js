const sampleListings = [
	{
		title: "Cozy Beachfront Cottage",
		description:
			"Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
		image:
			"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 1500,
		location: "Malibu",
		country: "United States",
	},
	{
		title: "Modern Loft in Downtown",
		description:
			"Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
		image:
			"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 1200,
		location: "New York City",
		country: "United States",
	},
	{
		title: "Mountain Retreat",
		description:
			"Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
		image:
			"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 1000,
		location: "Aspen",
		country: "United States",
	},
	{
		title: "Historic Villa in Tuscany",
		description:
			"Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
		image:
			"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 2500,
		location: "Florence",
		country: "Italy",
	},
	{
		title: "Secluded Treehouse Getaway",
		description:
			"Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
		image:
			"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 800,
		location: "Portland",
		country: "United States",
	},
	{
		title: "Beachfront Paradise",
		description:
			"Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
		image:
			"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 2000,
		location: "Cancun",
		country: "Mexico",
	},
	{
		title: "Rustic Cabin by the Lake",
		description:
			"Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
		image:
			"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 900,
		location: "Lake Tahoe",
		country: "United States",
	},
	{
		title: "Luxury Penthouse with City Views",
		description:
			"Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
		image:
			"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 3500,
		location: "Los Angeles",
		country: "United States",
	},
	{
		title: "Ski-In/Ski-Out Chalet",
		description:
			"Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
		image:
			"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 3000,
		location: "Verbier",
		country: "Switzerland",
	},
	{
		title: "Safari Lodge in the Serengeti",
		description:
			"Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
		image:
			"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 4000,
		location: "Serengeti National Park",
		country: "Tanzania",
	},
	{
		title: "Overwater Bungalow in the Maldives",
		description:
			"Stay in an exclusive overwater bungalow and experience the turquoise waters and luxury of the Maldives.",
		image:
			"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 5000,
		location: "Maldives",
		country: "Maldives",
	},
	{
		title: "Ocean View Villa in Bali",
		description:
			"Escape to the island paradise of Bali and unwind in this luxurious villa with breathtaking ocean views.",
		image:
			"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 3500,
		location: "Bali",
		country: "Indonesia",
	},
	{
		title: "Desert Oasis Retreat",
		description:
			"Find serenity in the desert at this luxurious retreat, complete with a private pool and expansive views.",
		image:
			"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 1800,
		location: "Dubai",
		country: "United Arab Emirates",
	},
	{
		title: "Penthouse with Skyline Views",
		description:
			"Live in luxury in this penthouse apartment that offers a 360-degree view of the city skyline.",
		image:
			"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 3000,
		location: "Chicago",
		country: "United States",
	},
	{
		title: "Jungle Retreat in Costa Rica",
		description:
			"Stay in the heart of the jungle, surrounded by wildlife and exotic plants in this unique retreat.",
		image:
			"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 2200,
		location: "Costa Rica",
		country: "Costa Rica",
	},
	{
		title: "Private Island Getaway",
		description:
			"Escape to your very own private island for the ultimate seclusion and luxury experience.",
		image:
			"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 10000,
		location: "Private Island",
		country: "Fiji",
	},
	{
		title: "Chic Parisian Apartment",
		description:
			"Live like a local in this chic Parisian apartment located in the heart of the city.",
		image:
			"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 1800,
		location: "Paris",
		country: "France",
	},
	{
		title: "Tropical Retreat in Thailand",
		description:
			"Enjoy peace and tranquility at this tropical retreat nestled in the jungles of Thailand.",
		image:
			"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 2200,
		location: "Phuket",
		country: "Thailand",
	},
	{
		title: "Mountain Lodge in Colorado",
		description:
			"Stay in this beautiful mountain lodge with ski-in/ski-out access to the best slopes in Colorado.",
		image:
			"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 2500,
		location: "Aspen",
		country: "United States",
	},
	{
		title: "Vibrant City Loft in Tokyo",
		description:
			"Stay in the bustling heart of Tokyo in this modern loft apartment with stunning views of the city.",
		image:
			"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 1300,
		location: "Tokyo",
		country: "Japan",
	},
	{
		title: "Countryside Retreat in England",
		description:
			"Find serenity in this charming English countryside retreat surrounded by lush fields and forests.",
		image:
			"https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 2200,
		location: "Cotswolds",
		country: "United Kingdom",
	},
	{
		title: "Tropical Villa in Fiji",
		description:
			"Relax in this luxury tropical villa overlooking the pristine beaches of Fiji.",
		image:
			"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 4000,
		location: "Fiji",
		country: "Fiji",
	},
	{
		title: "Historic Castle Stay in Scotland",
		description:
			"Experience a fairytale getaway by staying in a historic castle in the Scottish Highlands.",
		image:
			"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 3500,
		location: "Edinburgh",
		country: "United Kingdom",
	},
	{
		title: "Charming Chalet in the Swiss Alps",
		description:
			"Unwind in this charming chalet surrounded by snow-capped peaks and stunning alpine views.",
		image:
			"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 3000,
		location: "Zermatt",
		country: "Switzerland",
	},
	{
		title: "Charming Cottage in the Cotswolds",
		description:
			"Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
		image:
			"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

		price: 1200,
		location: "Cotswolds",
		country: "United Kingdom",
	},
	{
		title: "Historic Brownstone in Boston",
		description:
			"Step back in time in this elegant historic brownstone located in the heart of Boston.",
		image:
			"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

		price: 2200,
		location: "Boston",
		country: "United States",
	},
	{
		title: "Beachfront Bungalow in Bali",
		description:
			"Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
		image:
			"https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

		price: 1800,
		location: "Bali",
		country: "Indonesia",
	},
	{
		title: "Mountain View Cabin in Banff",
		description:
			"Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
		image:
			"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

		price: 1500,
		location: "Banff",
		country: "Canada",
	},
];

module.exports = { data: sampleListings };
