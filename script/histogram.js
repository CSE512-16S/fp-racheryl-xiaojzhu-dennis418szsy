

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

	var color = d3.scale.category20();

	var colorHash = {"Snow": "rgb(64,160,254)", "Melt": "rgb(34,139,34)", "ANOC": '#2ca02c', "CAPA": '#d62728', "ERMO": '#FFFF00', "ERPE": '#e377c2', "LIGR": '#7f7f7f', 
	"LUAR": '#9467bd', "MIAL": '#ff7f0e', "PEBR": '"#8c564b', "POBI": '#1f77b4', "VASI": '#c49c94'};
	
	var tickArray = [];

	for (var i = 1; i <= 12; i++) {
	   tickArray.push((i*30).toString());
	}
	var xAxis = d3.svg.axis()
				.scale(x)
				.ticks(12)
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

	x.domain(Array.range(1, 365))

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text")
		.attr("x", width)
		.attr("y", -15)
		.attr("dx", ".71em")
		.style("text-anchor", "end")
		.text("Julian Day");


	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(0, -12)")
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


	if (flower.POBI + flower.ERMO + flower.PEBR + flower.LIGR + flower.CAPA + flower.ERPE + flower.MIAL + flower.VASI + flower.LUAR + flower.ANOC == 0){
		d3.csv(file, function(error, data){
			if (error) throw error;

			data = data.filter(function(row){
				return row["JulianDay"] <= current;
			});

			color.domain(d3.keys(data[0])
				.filter(function(key){
					return key !== "JulianDay" && flower[key] == 1;
				}));

			console.log(color.domain());

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
				})
				.attr("height", function(d){ 
					return y(d.y0) - y(d.y1); 
				})
				.style("fill", function(d){ 
					return colorHash[d.name];
				});

			svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.attr("text-anchor", "middle")
				.style("font-size", "16px") 
				.style("fill", "black")
				.style("stroke", "black")
				.text('Please Select Flower Species');

			color.domain(["Snow", "Melt"]);

			var legend = svg.selectAll(".legend")
							.data(color.domain().slice().reverse())
							.enter()
							.append("g")
							.attr("class", "legend")
							.attr("transform", function(d, i) {
								return "translate(0," + i*20 + ")";
							});

			legend.append("rect")
				.attr("x", width - 18)
				.attr("width", 18)
				.attr("height", 18)
				.style("fill", function(d){
					return colorHash[d]; 
				});

			legend.append("text")
				.attr("x", width - 24)
				.attr("y", 9)
				.attr("dy", ".35em")
				.style("text-anchor", "end")
				.text(function(d) { 
					if (d == "Snow"){
						return "Snow Covered";
					}
					if (d == "Melt"){
						return "Snow Disappeared";
					}
				});
		});
	}
	else{
		d3.csv(file, function(error, data){
			if (error) throw error;

			data = data.filter(function(row){
				return row["JulianDay"] <= current;
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
				})
				.attr("height", function(d){ 
					return y(d.y0) - y(d.y1); 
				})
				.style("fill", function(d){ 
					return colorHash[d.name];
				});

			color.domain(["Snow", "Melt"]);

			var legend = svg.selectAll(".legend")
							.data(color.domain().slice().reverse())
							.enter()
							.append("g")
							.attr("class", "legend")
							.attr("transform", function(d, i) {
								return "translate(0," + i*20 + ")";
							});

			legend.append("rect")
				.attr("x", width - 18)
				.attr("width", 18)
				.attr("height", 18)
				.style("fill", function(d){
					return colorHash[d]; 
				});

			legend.append("text")
				.attr("x", width - 24)
				.attr("y", 9)
				.attr("dy", ".35em")
				.style("text-anchor", "end")
				.text(function(d) { 
					if (d == "Snow"){
						return "Snow Covered";
					}
					if (d == "Melt"){
						return "Snow Disappear";
					}
				});
		});
	}
};







