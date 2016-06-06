var flower = {Snow: 1, Melt: 1, POBI: 1, ERMO: 1, PEBR: 1, LIGR: 1, CAPA: 1, ERPE: 1, MIAL: 1, VASI: 1, LUAR: 1, ANOC: 1}
var playing = false;
var g_day;

$("button.POBI").on("click", function() {	
	if (flower.POBI == 1) {			
		$(this).css("background-color", "white");
		flower.POBI = 0
	}
	else if (flower.POBI == 0) {
		$(this).css("background-color", "#1f77b4");
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
		$(this).css("background-color", "#FFFF00");
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
		$(this).css("background-color", "#8c564b");
		flower.PEBR = 1
	}
	if (playing == false){
		//replot flowers 
		replotflower();
		stackedBarChart(2013, g_day);
        stackedBarChart(2014, g_day);
        stackedBarChart(2015, g_day);
	}
});

$("button.LIGR").on("click", function() {
	if (flower.LIGR == 1) {			
		$(this).css("background-color", "white");
		flower.LIGR = 0
	}
	else if (flower.LIGR == 0) {
		$(this).css("background-color", "#7f7f7f");
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
		$(this).css("background-color", "#d62728");
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
		$(this).css("background-color", "#e377c2");
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
		$(this).css("background-color", "#ff7f0e");
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
		$(this).css("background-color", "#c49c94");
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
		$(this).css("background-color", "#9467bd");
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
		$(this).css("background-color", "#2ca02c");
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








		

