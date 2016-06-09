//var playing = false;
var g_siteData;
var g_Fposition;
//var g_day;

// function loadData(callback) {
//   d3.csv("data/siteData.csv", function(siteData) {
//     d3.csv("data/Fposition.csv", function(Fposition) {
//       callback(siteData, Fposition);
//     })
//   });

var sharedData = {
  s_siteData : {},
  s_Fposition : {},
};


function loadData(){
  d3.csv("data/siteData.csv", function(siteData) {
    d3.csv("data/Fposition.csv", function(Fposition) {
      sharedData.s_siteData = siteData;
      sharedData.s_Fposition = Fposition;
      // callback(siteData, Fposition);
      callback();
    })
  });
}



function callback(){
  //set globals;
  g_siteData = sharedData.s_siteData;
  g_Fposition = sharedData.s_Fposition;
  g_day_first = 127;
  g_day_last = 365;
  g_day = g_day_first;
  document.getElementById("showDate").innerHTML = "Date: " + JulianDate[g_day];
  document.getElementById("showJulianDay").innerHTML = "Julian Day: " + g_day.toString();
  //initial image -- load data, ready the page, etc
  drawFlower(g_siteData, g_Fposition, g_day);
  //var histOne = new stackedBarChart(2013);
  //var histTwo = new stackedBarChart(2014);
  //var histThree = new stackedBarChart(2015);

  stackedBarChart(2013, g_day);
  stackedBarChart(2014, g_day);
  stackedBarChart(2015, g_day);
  //histOne.plot(current)
  //histTwo.plot(current)
  //histThree.plot(current)

  //animate
  var timer
  d3.select('#play')
    .on('click', function(){
      if(playing == false){
        d3.select(this).html('Pause');
        timer = setInterval(function(){

          //update filtrated data
          g_Fposition = updateData(getActiveFlName(), sharedData.s_Fposition);

          if (g_day < g_day_last){
            g_day++;
            drawFlower(g_siteData, g_Fposition, g_day);  
            document.getElementById("showDate").innerHTML = "Date: " + JulianDate[g_day];
            document.getElementById("showJulianDay").innerHTML = "Julian Day: " + g_day.toString();
            stackedBarChart(2013, g_day);
            stackedBarChart(2014, g_day);
            stackedBarChart(2015, g_day);      
          }else{
            clearInterval(timer);
            drawFlower(g_siteData, g_Fposition,g_day_last);
            d3.select("#play").html('Play');
            document.getElementById("showDate").innerHTML = "Date: " + JulianDate[g_day];
            document.getElementById("showJulianDay").innerHTML = "Julian Day: " + g_day.toString();
            stackedBarChart(2013, g_day);
            stackedBarChart(2014, g_day);
            stackedBarChart(2015, g_day);
            playing = false;
          }
          //histOne.plot(current)
          //histTwo.plot(current)
          //histThree.plot(current)
        }, 1000)

        playing = true;
      }else{
        d3.select(this).html('Play');
        clearInterval(timer);
        playing = false;
      }
    });

    d3.select('#reset')
      .on('click',function(){
          clearInterval(timer);
          g_day = g_day_first;
          drawFlower(g_siteData, g_Fposition, g_day);
          playing = false;
          d3.select("#play").html('Play');
          document.getElementById("showDate").innerHTML = "Date: " + JulianDate[g_day];
          document.getElementById("showJulianDay").innerHTML = "Julian Day: " + g_day.toString();
          stackedBarChart(2013, g_day);
          stackedBarChart(2014, g_day);
          stackedBarChart(2015, g_day);
          //histOne.plot(current)
          //histTwo.plot(current)
          //histThree.plot(current)
      });
}

/////////////////////////////////////
//FUNCTIONS NEEDED ARE DEFINED BELOW
/////////////////////////////////////


//Returns the scale for retina screens
function findRetina(ctx) {
  // Find retina zoom level
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;

  return devicePixelRatio / backingStoreRatio;
}


function makeXYScales(width, height, retina) {
  // Update x and y scales with new domain and range.
  // The domain has to change because we don't want it to scale down
  // at small sizes
  var screenScale = Math.min(250, width, height);

  var xScale = d3.scale.linear()
    .domain([0,250])
    .range([0, width / retina]);

  // Round values to the nearest 1/2
  xScale.round = function(x) {
    return Math.round(this(x) * retina) / retina;
  }

  var yScale = d3.scale.linear()
    .domain([0,55])
    .range([height / retina, 0]);

  // Round values to the nearest 1/2
  yScale.round = function(y) {
    return Math.round(this(y) * retina) / retina;
  }

  return {
    x: xScale,
    y: yScale
  };
}

//this function draws montains/flowers on the canvas based on current time.
function drawFlower(siteData,Fposition,time) {

  var _canvas = d3.select("#flowerCanvas");

  // Internal coordinates data
  var _siteData = siteData ;
  var _Fposition = Fposition;

  var _xScale; // coordinates -> xy
  var _yScale; // coordinates -> xy
  var _currentTime = time; // current time in JulDay 1:365
  var _ctx = _canvas.node().getContext('2d');
  var _retina = findRetina(_ctx); // 1 for non retina, 1+ for retina
  var _width, _height;

  // find new bounding box
  var bbox = _canvas.node().parentNode.getBoundingClientRect();
  _width = bbox.width * _retina;
  _height = bbox.height * _retina;

  // Resize canvases
  _canvas.attr("width", _width);
  _canvas.attr("height", _height);

  _canvas.style("width", _width / _retina + "px");
  _canvas.style("height", _height / _retina + "px");
  _ctx.scale(_retina,_retina);

  var scale = makeXYScales(_width, _height, _retina);
  _xScale = scale.x;
  _yScale = scale.y;

  //render text
  //year
  _ctx.font = "bold 20px Arial";
  _ctx.fillText("2013",_xScale.round(40),_yScale.round(3+48));
  _ctx.fillText("2014",_xScale.round(40+80+3),_yScale.round(3+48));
  _ctx.fillText("2015",_xScale.round(40+80+80+6),_yScale.round(3+48));

  _ctx.font = "bold 10px Arial";
  _ctx.fillText("Elevation",_xScale.round(3),_yScale.round(3+48));
  _ctx.fillText("Elevation",_xScale.round(3+80+3),_yScale.round(3+48));
  _ctx.fillText("Elevation",_xScale.round(3+80+80+6),_yScale.round(3+48));

  //arrows 
  _ctx.beginPath();
  //1
  _ctx.moveTo(_xScale.round(10),_yScale.round(50));
  _ctx.lineTo(_xScale.round(10),_yScale.round(53));
  _ctx.moveTo(_xScale.round(9),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10),_yScale.round(53));
  _ctx.moveTo(_xScale.round(11),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10),_yScale.round(53));
    //2
  _ctx.moveTo(_xScale.round(10+83),_yScale.round(50));
  _ctx.lineTo(_xScale.round(10+83),_yScale.round(53));
  _ctx.moveTo(_xScale.round(9+83),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10+83),_yScale.round(53));
  _ctx.moveTo(_xScale.round(11+83),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10+83),_yScale.round(53));
    //3
  _ctx.moveTo(_xScale.round(10+83+83),_yScale.round(50));
  _ctx.lineTo(_xScale.round(10+83+83),_yScale.round(53));
  _ctx.moveTo(_xScale.round(9+83+83),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10+83+83),_yScale.round(53));
  _ctx.moveTo(_xScale.round(11+83+83),_yScale.round(52));
  _ctx.lineTo(_xScale.round(10+83+83),_yScale.round(53));
  _ctx.stroke();


  //elevations
  _ctx.font = "bold 10px Arial";
  var elevations = [1490, 1540, 1600, 1650, 1680, 1745, 1805, 1840, 1880];
  for (var i = 0; i < elevations.length; i++){
    _ctx.fillText(String(elevations[i])+"m",_xScale.round(3.5),_yScale.round(7+5*i));
    _ctx.fillText(String(elevations[i])+"m",_xScale.round(3.5+80+3),_yScale.round(7+5*i));
    _ctx.fillText(String(elevations[i])+"m",_xScale.round(3.5+80+80+6),_yScale.round(7+5*i));
  }


  // Math constants
  var T = 2 * Math.PI;

  //draw snow
  for (var i = 0; i < _siteData.length; i++){
    var site = _siteData[i];

    // Canvas xy coordinates for rendering
    var x = _xScale.round(+site.xcoor);
    var y = _yScale.round(+site.ycoor);
    var tsnow1 = (+site.melt);
    var tsnow2 = (+site.Frozen);

    // plot snow
    drawsnow(x,y,tsnow1,tsnow2,_currentTime);
  }


  var species=["POBI","ERMO","PEBR","LIGR","CAPA","ERPE",
        "MIAL","VASI","LUAR","ANOC"];

  // var FlowerColorScale = d3.scale.category10()
  //               .domain(species);

  var FlowerColorScale = d3.scale.ordinal()
                .range(["#1f77b4","#FFFF00"/*"#bcbd22"*/,"#8c564b","#7f7f7f","#d62728","#e377c2","#ff7f0e","#c49c94","#9467bd","#2ca02c"])
                .domain(species);

  //draw the flowers 
  for (var i = 0; i < _Fposition.length; i++) {
    var position = _Fposition[i];

    // Canvas xy coordinates for rendering
    var x = _xScale.round(+position.xcoor);
    var y = _yScale.round(+position.ycoor);
    var tf1 = (+position.on);
    var tf2 = (+position.off);

    //set color scale
    var color=FlowerColorScale(position.species);

    drawflower(x,y,color,tf1,tf2,_currentTime);
  }


  function drawflower(x,y,color,t1,t2,time) {
    if(time<t2 && time>t1){
      _ctx.beginPath();
      _ctx.fillStyle = color;
      _ctx.arc(x, y, _xScale.round(2), 0, T);
      //_ctx.lineWidth = 2;
      _ctx.fill();
      _ctx.stroke();  
    }
    else{
      _ctx.beginPath();
      _ctx.fillStyle = "white";
      _ctx.arc(x, y, _xScale.round(2), 0, T);
      //_ctx.lineWidth = 2;
      _ctx.fill();
      _ctx.stroke();  
    }
  }


  function drawsnow(x,y,t1,t2,time){
    if(time<t2 && time>t1){
    //_ctx.lineWidth = 2;
    //_ctx.fillStyle = " #ffd966";
    var my_gradient = _ctx.createLinearGradient(x, y, x, y+( _yScale.round(0)-_yScale.round(5)));
    my_gradient.addColorStop(0, "rgb(34,139,34)");
    my_gradient.addColorStop(1, "white");
    _ctx.fillStyle = my_gradient;

    _ctx.fillRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));

    _ctx.strokeStyle = "black";
    _ctx.strokeRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));
    }

    else{
    //_ctx.lineWidth = 2;
    //_ctx.fillStyle = "white";
    //_ctx.fillStyle = " #ffd966";
    var my_gradient = _ctx.createLinearGradient(x, y, x, y+( _yScale.round(0)-_yScale.round(5)));
    my_gradient.addColorStop(0, "rgb(64,160,254)");
    my_gradient.addColorStop(1, "white");
    _ctx.fillStyle = my_gradient;

    _ctx.fillRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));

    _ctx.strokeStyle = "black";
    _ctx.strokeRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));
    }  
  }

}

