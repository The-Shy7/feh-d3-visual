function createHeader() {
	var sHeaderId = "#idHeader";
	var oHeader = $(sHeaderId);
	var sTitle = "Fire Emblem Heroes - Data Visualization";

	var oTitle = $("<h2>", {
		html: sTitle,
		class: "mx-auto"
	});
	
	oHeader.append(oTitle);
}

function createFooter() {
	var sFooterId = "#idFooter";
	var oFooter = $(sFooterId);

	// var sAuthor = "Raj Talukder";
	var sAuthor = "https://github.com/The-Shy7/fe-heroes-stat-visualization";
	var sDate = getFormattedDate();

	var oAuthor = $("<div>", {
		html: sAuthor,
		class: "col",
		style: "text-align: left"
	});
	var oDate = $("<div>", {
		html: sDate,
		class: "col",
		style: "text-align: right"
	});

	oFooter.append(oAuthor);
	oFooter.append(oDate);
}

function getFormattedDate() {
	var oDate = new Date();
	var iDate = oDate.getDate();
	var iMonth = oDate.getMonth() + 1;
	var iYear = oDate.getFullYear();
	return iMonth + "/" + iDate + "/" + iYear;
}