var dataset;
var w = 50;
var h = 500;


d3.csv("unique_masking.csv",function(d) {
	dataset = d;
	return d;
	// d3.select("body").selectAll("p")
 //    .data(dataset)
 //    .enter()
 //    .append("p")
 //    .text(function(d){return d.uid;})
 //    .style("color", function(d){
 //    	if(d.Flower == "1")
 //    		return "green";
 //    	else
 //    		return "red";
 //    });

});


function drawCircles(){
	var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", 10000);;

	var circles = svg.selectAll("circle")
		.data(dataset)`		`	
		.enter()
		.append("circle");

	circles.attr("cy", function(d, i) {
            return (i * 50) + 10;
    })
    .attr("cx", w/2)
    .attr("r", 25)
    .attr("fill", function(d){
    	if(d.Flower == "1")
    		return "green";
    	else
    		return "red";
    });
}

drawCircles();

