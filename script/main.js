
// var flower = {POBI: 1, ERMO: 1, PEBR: 1, LIGR: 1, CAPA: 1, ERPE: 1, MIAL: 1, VASI: 1, LUAR: 1, ANOC: 1}

// var running = false;

// var max = 365;
// var current = 201;

// var histOne = stackedBarChart(2013, current);
// var histTwo = stackedBarChart(2014, current);
// var histThree = stackedBarChart(2015, current);

// document.getElementById("showJulianDay").innerHTML = "Date: " + JulianDate[current];

// $("button.controlPlayPause").on("click", function() {
		
// 	if (running == true) {			
// 		$("button.controlPlayPause").html("Play");
// 		running = false;
// 		console.log("Pause");
// 		current += 1;
// 		console.log(current);
// 	}
// 	else if (running == false) {
// 		$("button.controlPlayPause").html("Pause");
// 		running = true;
// 		console.log("Play");
// 		console.log(current);
// 	}
// });

// $("button.controlReset").on("click", function() {	
// 	if (running == true) {			
// 		$("button.controlPlayPause").html("Play");
// 		running = false;
// 		current = 1;
// 		console.log(current);
// 	}
// 	else if (running == false) {
// 		$("button.controlPlayPause").html("Play");
// 		running = true;
// 		current = 1;
// 		console.log(current);
// 	}
// });

// $("button.POBI").on("click", function() {	
// 	if (flower.POBI == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.POBI = 0
// 	}
// 	else if (flower.POBI == 0) {
// 		$(this).css("background-color", "rgb(31,119,180)");
// 		flower.POBI = 1
// 	}
// });

// $("button.ERMO").on("click", function() {	
// 	if (flower.ERMO == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.ERMO = 0
// 	}
// 	else if (flower.ERMO == 0) {
// 		$(this).css("background-color", "rgb(255,127,14)");
// 		flower.ERMO = 1
// 	}
// });

// $("button.PEBR").on("click", function() {
// 	if (flower.PEBR == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.PEBR = 0
// 	}
// 	else if (flower.PEBR == 0) {
// 		$(this).css("background-color", "rgb(44,160,44)");
// 		flower.PEBR = 1
// 	}
// });

// $("button.LIGR").on("click", function() {
// 	if (flower.LIGR == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.LIGR = 0
// 	}
// 	else if (flower.LIGR == 0) {
// 		$(this).css("background-color", "rgb(214,39,40)");
// 		flower.LIGR = 1
// 	}
// });

// $("button.CAPA").on("click", function() {
// 	if (flower.CAPA == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.CAPA = 0
// 	}
// 	else if (flower.CAPA == 0) {
// 		$(this).css("background-color", "rgb(148,103,189)");
// 		flower.CAPA = 1
// 	}
// });

// $("button.ERPE").on("click", function() {
// 	if (flower.ERPE == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.ERPE = 0
// 	}
// 	else if (flower.ERPE == 0) {
// 		$(this).css("background-color", "rgb(140,86,75)");
// 		flower.ERPE = 1
// 	}
// });

// $("button.MIAL").on("click", function() {
// 	if (flower.MIAL == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.MIAL = 0
// 	}
// 	else if (flower.MIAL == 0) {
// 		$(this).css("background-color", "rgb(227,119,194)");
// 		flower.MIAL = 1
// 	}
// });

// $("button.VASI").on("click", function() {
// 	if (flower.VASI == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.VASI = 0
// 	}
// 	else if (flower.VASI == 0) {
// 		$(this).css("background-color", "rgb(127,127,127)");
// 		flower.VASI = 1
// 	}
// });

// $("button.LUAR").on("click", function() {
// 	if (flower.LUAR == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.LUAR = 0
// 	}
// 	else if (flower.LUAR == 0) {
// 		$(this).css("background-color", "rgb(188,189,34)");
// 		flower.LUAR = 1
// 	}
// });

// $("button.ANOC").on("click", function() {
// 	if (flower.ANOC == 1) {			
// 		$(this).css("background-color", "white");
// 		flower.ANOC = 0
// 	}
// 	else if (flower.ANOC == 0) {
// 		$(this).css("background-color", "rgb(23,190,207)");
// 		flower.ANOC = 1
// 	}
// });

loadData(); //save in sharedData
console.log(sharedData.s_siteData);

callback();












