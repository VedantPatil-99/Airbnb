const languages = [
	{ language: "English", country: "India" },
	{ language: "Azərbaycan dili", country: "Azərbaycan" },
	{ language: "Bahasa Indonesia", country: "Indonesia" },
	{ language: "Bosanski", country: "Bosna i Hercegovina" },
	{ language: "Català", country: "Espanya" },
	{ language: "Čeština", country: "Česká republika" },
	{ language: "Crnogorski", country: "Crna Gora" },
	{ language: "Dansk", country: "Danmark" },
	{ language: "Deutsch", country: "Deutschland" },
	{ language: "Deutsch", country: "Österreich" },
	{ language: "Deutsch", country: "Schweiz" },
	{ language: "Deutsch", country: "Luxemburg" },
	{ language: "Eesti", country: "Eesti" },
	{ language: "English", country: "Australia" },
	{ language: "English", country: "Canada" },
	{ language: "English", country: "Guyana" },
	{ language: "English", country: "Ireland" },
	{ language: "English", country: "New Zealand" },
	{ language: "English", country: "Singapore" },
	{ language: "English", country: "United Arab Emirates" },
	{ language: "Español", country: "Argentina" },
	{ language: "Español", country: "Belice" },
	{ language: "Español", country: "Bolivia" },
	{ language: "Español", country: "Chile" },
	{ language: "Español", country: "Colombia" },
	{ language: "Español", country: "Costa Rica" },
	{ language: "Español", country: "Ecuador" },
	{ language: "Español", country: "El Salvador" },
	{ language: "Español", country: "España" },
	{ language: "Español", country: "Estados Unidos" },
	{ language: "Español", country: "Guatemala" },
	{ language: "Español", country: "Honduras" },
	{ language: "Español", country: "Latinoamérica" },
	{ language: "Español", country: "México" },
	{ language: "Español", country: "Nicaragua" },
	{ language: "Español", country: "Panamá" },
	{ language: "Español", country: "Paraguay" },
	{ language: "Español", country: "Perú" },
	{ language: "Español", country: "Venezuela" },
	{ language: "Français", country: "Belgique" },
	{ language: "Français", country: "Canada" },
	{ language: "Français", country: "France" },
	{ language: "Français", country: "Suisse" },
	{ language: "Français", country: "Luxembourg" },
	{ language: "Gaeilge", country: "Éire" },
	{ language: "Hrvatski", country: "Hrvatska" },
	{ language: "isiXhosa", country: "eMzantsi Afrika" },
	{ language: "isiZulu", country: "iNingizimu Afrika" },
	{ language: "Íslenska", country: "Ísland" },
	{ language: "Italiano", country: "Italia" },
	{ language: "Italiano", country: "Svizzera" },
	{ language: "Kiswahili", country: "Āfrika" },
	{ language: "Latviešu", country: "Latvija" },
	{ language: "Lietuvių", country: "Lietuva" },
	{ language: "Magyar", country: "Magyarország" },
	{ language: "Malti", country: "Malta" },
	{ language: "Melayu", country: "Malaysia" },
	{ language: "Vlaams", country: "België" },
	{ language: "Nederlands", country: "Nederland" },
	{ language: "Norsk", country: "Norge" },
	{ language: "Polski", country: "Polska" },
	{ language: "Português", country: "Brasil" },
	{ language: "Português", country: "Portugal" },
	{ language: "Română", country: "România" },
	{ language: "Shqip", country: "Shqipëri" },
	{ language: "Slovenčina", country: "Slovensko" },
	{ language: "Slovenščina", country: "Slovenija" },
	{ language: "Srpski", country: "Srbija" },
	{ language: "Suomi", country: "Suomi" },
	{ language: "Svenska", country: "Sverige" },
	{ language: "Tagalog", country: "Pilipinas" },
	{ language: "Tiếng Việt", country: "Việt Nam" },
	{ language: "Türkçe", country: "Türkiye" },
	{ language: "Ελληνικά", country: "Ελλάδα" },
	{ language: "Български", country: "България" },
	{ language: "Македонски", country: "Северна Македонија" },
	{ language: "Русский", country: "Россия" },
	{ language: "Українська", country: "Україна" },
	{ language: "ქართული", country: "საქართველო" },
	{ language: "Հայերեն", country: "Հայաստան" },
	{ language: "עברית", country: "ישראל" },
	{ language: "العربية", country: "العالم" },
	{ language: "ไทย", country: "ประเทศไทย" },
	{ language: "한국어", country: "대한민국" },
	{ language: "日本語", country: "日本" },
	{ language: "简体中文", country: "美国" },
	{ language: "繁體中文", country: "美國" },
	{ language: "简体中文", country: "中国" },
	{ language: "繁體中文", country: "香港" },
	{ language: "繁體中文", country: "台灣" },
];

// Function to dynamically generate the language list
function genLangList() {
	const langListEle = document.querySelector("ul.lang-list");

	if (!langListEle) {
		console.error(
			"The element with class 'lang-list' was not found in the DOM.",
		);
		return;
	}

	langListEle.innerHTML = ""; // Clear any existing content

	languages.forEach(({ language, country }) => {
		const listItem = document.createElement("li");
		listItem.className = "col-2  text-black";

		listItem.innerHTML = `
      <button class="btn btn-outline-light py-2 px-3 d-flex flex-column justify-content-start">
        <div class="lang">${language}</div>
        <div class="lang-country text-secondary">${country}</div>
      </button>
    `;

		listItem.querySelector("button").addEventListener("click", function () {
			document
				.querySelectorAll(".lang-list button")
				.forEach((btn) =>
					btn.classList.remove(...["border", "border-1", "border-dark"]),
				);
			this.classList.add(...["border", "border-1", "border-dark"]);
		});

		langListEle.appendChild(listItem);
	});
}

genLangList();
