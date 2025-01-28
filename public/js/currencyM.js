const currencies = [
	{ name: "Indian Rupee", code: "INR", symbol: "₹" },
	{ name: "Australian Dollar", code: "AUD", symbol: "$" },
	{ name: "Brazilian Real", code: "BRL", symbol: "R$" },
	{ name: "Bulgarian Lev", code: "BGN", symbol: "лв." },
	{ name: "Canadian Dollar", code: "CAD", symbol: "$" },
	{ name: "Chilean Peso", code: "CLP", symbol: "$" },
	{ name: "Chinese Yuan", code: "CNY", symbol: "￥" },
	{ name: "Colombian Peso", code: "COP", symbol: "$" },
	{ name: "Costa Rican Colon", code: "CRC", symbol: "₡" },
	{ name: "Croatian Kuna", code: "HRK", symbol: "kn" },
	{ name: "Czech Koruna", code: "CZK", symbol: "Kč" },
	{ name: "Danish Krone", code: "DKK", symbol: "kr" },
	{ name: "Egyptian Pound", code: "EGP", symbol: "ج.م" },
	{ name: "Emirati Dirham", code: "AED", symbol: "ﺩ.ﺇ" },
	{ name: "Euro", code: "EUR", symbol: "€" },
	{ name: "Ghanaian Cedi", code: "GHS", symbol: "GH₵" },
	{ name: "Hong Kong Dollar", code: "HKD", symbol: "$" },
	{ name: "Hungarian Forint", code: "HUF", symbol: "Ft" },
	{ name: "Indonesian Rupiah", code: "IDR", symbol: "Rp" },
	{ name: "Israeli New Shekel", code: "ILS", symbol: "₪" },
	{ name: "Japanese Yen", code: "JPY", symbol: "¥" },
	{ name: "Kazakhstani Tenge", code: "KZT", symbol: "₸" },
	{ name: "Kenyan Shilling", code: "KES", symbol: "KSh" },
	{ name: "Malaysian Ringgit", code: "MYR", symbol: "RM" },
	{ name: "Mexican Peso", code: "MXN", symbol: "$" },
	{ name: "Moroccan Dirham", code: "MAD", symbol: "" },
	{ name: "New Taiwan Dollar", code: "TWD", symbol: "$" },
	{ name: "New Zealand Dollar", code: "NZD", symbol: "$" },
	{ name: "Norwegian Krone", code: "NOK", symbol: "kr" },
	{ name: "Peruvian Sol", code: "PEN", symbol: "S/" },
	{ name: "Philippine Peso", code: "PHP", symbol: "₱" },
	{ name: "Polish Zloty", code: "PLN", symbol: "zł" },
	{ name: "Pound Sterling", code: "GBP", symbol: "£" },
	{ name: "Qatari Riyal", code: "QAR", symbol: "ر.ق" },
	{ name: "Romanian Leu", code: "RON", symbol: "lei" },
	{ name: "Saudi Arabian Riyal", code: "SAR", symbol: "SR" },
	{ name: "Singapore Dollar", code: "SGD", symbol: "$" },
	{ name: "South African Rand", code: "ZAR", symbol: "R" },
	{ name: "South Korean Won", code: "KRW", symbol: "₩" },
	{ name: "Swedish Krona", code: "SEK", symbol: "kr" },
	{ name: "Swiss Franc", code: "CHF", symbol: "" },
	{ name: "Thai Baht", code: "THB", symbol: "฿" },
	{ name: "Turkish Lira", code: "TRY", symbol: "₺" },
	{ name: "Ugandan Shilling", code: "UGX", symbol: "USh" },
	{ name: "Ukrainian Hryvnia", code: "UAH", symbol: "₴" },
	{ name: "United States Dollar", code: "USD", symbol: "$" },
	{ name: "Uruguayan Peso", code: "UYU", symbol: "$U" },
	{ name: "Vietnamese Dong", code: "VND", symbol: "₫" },
];

// Function to dynamically generate the currency list
function genCurncList() {
	const curncListEle = document.querySelector("ul.curnc-list");

	if (!curncListEle) {
		console.error(
			"The element with class 'curnc-list' was not found in the DOM.",
		);
		return;
	}

	curncListEle.innerHTML = ""; // Clear any existing content

	currencies.forEach(({ name, code, symbol }) => {
		const listItem = document.createElement("li");
		listItem.className = "col-2  text-black";

		listItem.innerHTML = `
      <button class="btn btn-outline-light py-2 px-3 d-flex flex-column justify-content-start">
        <div class="curnc-reg">${name}</div>
        <div class="curnc-symb text-secondary">${code} - ${symbol}</div>
      </button>
    `;

		listItem.querySelector("button").addEventListener("click", function () {
			document
				.querySelectorAll(".curnc-list button")
				.forEach((btn) =>
					btn.classList.remove(...["border", "border-1", "border-dark"]),
				);
			this.classList.add(...["border", "border-1", "border-dark"]);
		});

		curncListEle.appendChild(listItem);
	});
}

genCurncList();
