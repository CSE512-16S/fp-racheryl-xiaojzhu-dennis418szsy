var flower = {POBI: 1, ERMO: 1, PEBR: 1, LIGR: 1, CAPA: 1, ERPE: 1, MIAL: 1, VASI: 1, LUAR: 1, ANOC: 1}
var playing = false;
var g_day;

$("button.POBI").on("click", function() {	
	if (flower.POBI == 1) {			
		$(this).css("background-color", "white");
		flower.POBI = 0
	}
	else if (flower.POBI == 0) {
		$(this).css("background-color", "rgb(31,119,180)");
		flower.POBI = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.ERMO").on("click", function() {	
	if (flower.ERMO == 1) {			
		$(this).css("background-color", "white");
		flower.ERMO = 0
	}
	else if (flower.ERMO == 0) {
		$(this).css("background-color", "rgb(255,127,14)");
		flower.ERMO = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.PEBR").on("click", function() {
	if (flower.PEBR == 1) {			
		$(this).css("background-color", "white");
		flower.PEBR = 0
	}
	else if (flower.PEBR == 0) {
		$(this).css("background-color", "rgb(44,160,44)");
		flower.PEBR = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.LIGR").on("click", function() {
	if (flower.LIGR == 1) {			
		$(this).css("background-color", "white");
		flower.LIGR = 0
	}
	else if (flower.LIGR == 0) {
		$(this).css("background-color", "rgb(214,39,40)");
		flower.LIGR = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.CAPA").on("click", function() {
	if (flower.CAPA == 1) {			
		$(this).css("background-color", "white");
		flower.CAPA = 0
	}
	else if (flower.CAPA == 0) {
		$(this).css("background-color", "rgb(148,103,189)");
		flower.CAPA = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.ERPE").on("click", function() {
	if (flower.ERPE == 1) {			
		$(this).css("background-color", "white");
		flower.ERPE = 0
	}
	else if (flower.ERPE == 0) {
		$(this).css("background-color", "rgb(140,86,75)");
		flower.ERPE = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.MIAL").on("click", function() {
	if (flower.MIAL == 1) {			
		$(this).css("background-color", "white");
		flower.MIAL = 0
	}
	else if (flower.MIAL == 0) {
		$(this).css("background-color", "rgb(227,119,194)");
		flower.MIAL = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.VASI").on("click", function() {
	if (flower.VASI == 1) {			
		$(this).css("background-color", "white");
		flower.VASI = 0
	}
	else if (flower.VASI == 0) {
		$(this).css("background-color", "rgb(127,127,127)");
		flower.VASI = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.LUAR").on("click", function() {
	if (flower.LUAR == 1) {			
		$(this).css("background-color", "white");
		flower.LUAR = 0
	}
	else if (flower.LUAR == 0) {
		$(this).css("background-color", "rgb(188,189,34)");
		flower.LUAR = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});

$("button.ANOC").on("click", function() {
	if (flower.ANOC == 1) {			
		$(this).css("background-color", "white");
		flower.ANOC = 0
	}
	else if (flower.ANOC == 0) {
		$(this).css("background-color", "rgb(23,190,207)");
		flower.ANOC = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
        //histOne.plot(current)
        //histTwo.plot(current)
        //histThree.plot(current)
	}
	//console.log(getflowerType());
});


//return currentDay controlled by animation
function getTime(){
  return g_day;
}

function getflowerType(){
	return flower;
}

var species=["POBI","ERMO","PEBR","LIGR","CAPA","ERPE",
        "MIAL","VASI","LUAR","ANOC"];

function getActiveFlName (){
  var activeFlowerName =[];
  object = getflowerType();
  for (var i=0; i<species.length; i++){
    if (object[species[i]]==1){
      activeFlowerName.push(species[i]);
    }
    else activeFlowerName.push("nothing");
  }
  return activeFlowerName;
}


//filter data based on buttons
function updateData(activeFlowerName, Fposition){
  return Fposition.filter(function (data){
    return data.species == activeFlowerName[0] || data.species == activeFlowerName[1] || data.species == activeFlowerName[2] || data.species == activeFlowerName[3] ||data.species == activeFlowerName[4] || data.species == activeFlowerName[5] ||data.species == activeFlowerName[6] || data.species == activeFlowerName[7] ||data.species == activeFlowerName[8] || data.species == activeFlowerName[9] 
  });
} 

function replotflower(){
	d3.csv("data/siteData.csv", function(siteData) {
    d3.csv("data/Fposition.csv", function(Fposition) {
      newFposition = updateData(getActiveFlName(), Fposition);
      drawFlower(siteData, newFposition, getTime());
    })
  });
}








		

