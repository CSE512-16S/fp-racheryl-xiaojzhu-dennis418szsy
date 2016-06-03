/*
var yearContainer = {2013: "Left", 2014: "Middle", 2015: "Right"}
var margin = {top:20, right: 20, bottom: 20, left: 50};
var width = 400 - margin.left - margin.right;
var height = 180 - margin.top - margin.bottom;
var colorHash = {"ANOC": 'rgb(23,190,207)', "CAPA": 'rgb(148,103,189)', "ERMO": 'rgb(255,127,14)', "ERPE": 'rgb(140,86,75)', "LIGR": 'rgb(214,39,40)', 
"LUAR": 'rgb(188,189,34)', "MIAL": 'rgb(227,119,194)', "PEBR": 'rgb(44,160,44)', "POBI": 'rgb(31,119,180)', "VASI": 'rgb(127,127,127)'};


class stackedBarChart{

	constructor(year){
		this.file = "./data/flowerPeak" + year.toString() + ".csv";
		this.containerId = "#hist" + yearContainer.year;
	}

	console.log(this.file);
	console.log(this.containerId);

	this.x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);

	this.y = d3.scale.linear()
			.range([height, 0]);

	var color = d3.scale.category10();

	this.xAxis = d3.svg.axis()
				.scale(x)
				.ticks(0)
				.tickValues([])
				.orient("bottom");

	this.yAxis = d3.svg.axis()
				.scale(y)
				.ticks(7)
				.tickValues([0, 10, 20, 30, 40, 50, 60])
				.orient("left");

	this.svg = d3.select(containerId)
				.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	this.y.domain([0, 60]);

	this.svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Flower");

	this.selectAll('.axis line, .axis path')
		.style({'stroke': '#000', 'fill': 'none', 'shape-rendering': 'crispEdges'});

	this.append("text")
		.attr("x", width/2)
		.attr("y", 10)
		.attr("text-anchor", "middle")
		.style("font-size", "16px") 
		.style("fill", "black")
		.style("stroke", "black")
		.text(year.toString());

	this.data = d3.csv(file);

	this.x.domain(data.map(function(d){
		return d.JulianDay;
	}));

	this.color.domain(d3.keys(data[0])
		.filter(function(key){
			return key !== "JulianDay" && flower[key] == 1;
		})
	);

	this.data.forEach(function(d){
		var y0 = 0;
		d.flowers = color.domain().map(function(name){
			return {day: d.JulianDay, name: name, y0: y0, y1: y0 += +d[name]};
		});
		d.total = d.flowers[d.flowers.length - 1].y1;
	});

	plot(current){
		if(flower.POBI + flower.ERMO + flower.PEBR + flower.LIGR + flower.CAPA + flower.ERPE + flower.MIAL + flower.VASI + flower.LUAR + flower.ANOC == 0){
			this.svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.attr("text-anchor", "middle")
				.style("font-size", "16px") 
				.style("fill", "black")
				.style("stroke", "black")
				.text('Please Select Flower Species');
		}
		else{
			var JulianDay = svg.selectAll(".JulianDay")
								.data(data)
								.enter()
								.append("g")
								.attr("class", "g")
								.attr("transform", function(d){
									return "translate(" + x(d.JulianDay) + ",0)";
								});

			JulianDay.selectAll("rect")
				.data(function(d){ 
					return d.flowers; 
				})
				.enter()
				.append("rect")
				.attr("width", x.rangeBand())
				.attr("y", function(d){
					if(d.JulianDay <= current)
					{
						return y(d.y1); 
					}
				})
				.attr("height", function(d){ 
					if(d.JulianDay <= current)
					{
						return y(d.y0) - y(d.y1); 
					}
				})
				.style("fill", function(d){
					if(d.JulianDay <= current)
					{
					return colorHash[d.name];			
					}
				});
		}
	}
}

*/

Array.range= function(a, b){
    var A= [];
    A[0]= a.toString();
    step = 1;
    while(a + step <= b){
            A[A.length] = (a += step).toString();
        }
    return A;
}



var stackedBarChart = function(year, current){

	var start = new Date().getTime();

	var file = "./data/flowerPeak" + year.toString() + ".csv";
	var containerId = "#hist";
	
	if (year == 2013){
		containerId = containerId + "Left";
	}
	if (year == 2014){
		containerId = containerId + "Middle";
	}
	if (year == 2015){
		containerId = containerId + "Right";
	}

	$(containerId + " svg").remove()

	var margin = {top:20, right: 20, bottom: 20, left: 50};
	var width = 400 - margin.left - margin.right;
	var height = 180 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
			.rangeBands([0, width], .1);

	var y = d3.scale.linear()
			.range([height, 0]);

	var color = d3.scale.category10();

	var colorHash = {"ANOC": 'rgb(23,190,207)', "CAPA": 'rgb(148,103,189)', "ERMO": 'rgb(255,127,14)', "ERPE": 'rgb(140,86,75)', "LIGR": 'rgb(214,39,40)', 
	"LUAR": 'rgb(188,189,34)', "MIAL": 'rgb(227,119,194)', "PEBR": 'rgb(44,160,44)', "POBI": 'rgb(31,119,180)', "VASI": 'rgb(127,127,127)'};
	var tickArray = [];

	for (var i = 1; i <= 12; i++) {
	   tickArray.push((i*30).toString());
	}
	var xAxis = d3.svg.axis()
				.scale(x)
				.ticks(12)
				//.tickValues["Jan", "Feb", "Mar", "Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
				//.tickValues(["150", "180", "210", "240", "270", "300"])
				.tickValues(tickArray)
				.orient("bottom");

	var yAxis = d3.svg.axis()
				.scale(y)
				.ticks(7)
				.tickValues([0, 10, 20, 30, 40, 50, 60])
				.orient("left");

	var svg = d3.select(containerId)
				.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	y.domain([0, 60]);
	 //.range([0, 60]);
	x.domain(Array.range(1, 365))
	 //.range([0,170]);

	

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text")
		.attr("x", width)
		.attr("y", -6)
		.attr("dx", ".71em")
		.style("text-anchor", "end")
		.text("Julian Day");

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Flower");

	svg.selectAll('.axis line, .axis path')
		.style({'stroke': '#000', 'fill': 'none', 'shape-rendering': 'crispEdges'});

	svg.append("text")
		.attr("x", width/2)
		.attr("y", 10)
		.attr("text-anchor", "middle")
		.style("font-size", "16px") 
		.style("fill", "black")
		.style("stroke", "black")
		.text(year.toString());
	// console.log(file);
	// console.log(current);
	var end = new Date().getTime();
	console.log("Date:" + current.toString() + " Time on Axes:" + (end - start).toString());

	start = new Date().getTime();

	if (flower.POBI + flower.ERMO + flower.PEBR + flower.LIGR + flower.CAPA + flower.ERPE + flower.MIAL + flower.VASI + flower.LUAR + flower.ANOC == 0){
		d3.csv(file, function(error, data){
			if (error) throw error;

			svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.attr("text-anchor", "middle")
				.style("font-size", "16px") 
				.style("fill", "black")
				.style("stroke", "black")
				.text('Please Select Flower Species');

		});
	}
	else{
		d3.csv(file, function(error, data){
			if (error) throw error;

			data = data.filter(function(row){
				return row['JulianDay'] <= current;
			});

			color.domain(d3.keys(data[0])
				.filter(function(key){
					return key !== "JulianDay" && flower[key] == 1;
				}));

			data.forEach(function(d){
				var y0 = 0;
				d.flowers = color.domain().map(function(name){
					return {name: name, y0: y0, y1: y0 += +d[name]};
				});
				d.total = d.flowers[d.flowers.length - 1].y1;
			});

			svg.selectAll('.axis line, .axis path')
				.style({'stroke': '#000', 'fill': 'none', 'shape-rendering': 'crispEdges'});

			var JulianDay = svg.selectAll(".JulianDay")
								.data(data)
								.enter()
								.append("g")
								.attr("class", "g")
								.attr("transform", function(d){
									return "translate(" + x(d.JulianDay) + ",0)";
								});

			JulianDay.selectAll("rect")
				.data(function(d){ 
					return d.flowers; 
				})
				.enter()
				.append("rect")
				.attr("width", x.rangeBand())
				.attr("y", function(d){ 
					return y(d.y1); 
					//return 0;
				})
				.attr("height", function(d){ 
					return y(d.y0) - y(d.y1); 
					//return 0;
				})
				// .transition()
				// .duration(5000)
				// .ease("linear")
				// .delay(function (d, i) {
				// 	return i * 50;
				// })
				.style("fill", function(d){ 
					return colorHash[d.name];
				});
				// .attr("y", function (d, i) {
				// 	return height - y(d.y1);
				// })
				// .attr("height", function (d, i) {
				// 	return y(d.y0) - y(d.y1);
				// });
		});
	}

	end = new Date().getTime();
	console.log("Date:" + current.toString() + " Time on Rect:" + (end - start).toString());
};







