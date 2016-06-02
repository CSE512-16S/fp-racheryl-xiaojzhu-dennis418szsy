
//for each frame of animation, we can update currentDay, then call loadData(callback);
// var currentDay = 199;
var playing = false;
var g_siteData;
var g_Fposition;
var g_day;
loadData(main); 





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

  var FlowerColorScale = d3.scale.category10()
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
      _ctx.fillStyle = "#FFFFFF";
      _ctx.arc(x, y, _xScale.round(2), 0, T);
      //_ctx.lineWidth = 2;
      _ctx.fill();
      _ctx.stroke();  
    }
  }


  function drawsnow(x,y,t1,t2,time){
    if(time<t2 && time>t1){
    _ctx.fillStyle = "green";
    _ctx.fillRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));

    _ctx.strokeStyle = "black";
    _ctx.strokeRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));
    }

    else{
    _ctx.fillStyle = "white";
    _ctx.fillRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));

    _ctx.strokeStyle = "black";
    _ctx.strokeRect(x,y, _xScale.round(70)-_xScale.round(0), _yScale.round(0)-_yScale.round(5));
    }  
  }

}


//return currentDay controlled by animation
function getTime(){
  return currentDay;
}


//load data 

function loadData(callback) {
  d3.csv("data/siteData.csv", function(siteData) {
    d3.csv("data/Fposition.csv", function(Fposition) {
      callback(siteData, Fposition);
    })
  });
}

//define callback function
function main(siteData,Fposition){
  //add some filters here based on clicked button 
  //then pass filtrated data to the drawFlower function
  //filter//

  g_siteData = siteData;
  g_Fposition = Fposition;
  g_day_first = 180;
  g_day_last = 200;
  g_day = g_day_first;

  //initial image -- load data, ready the page, etc
  drawFlower(siteData, Fposition, g_day);

  //animate
  var timer
  d3.select('#play')
    .on('click', function(){
      if(playing == false){
        d3.select(this).html('stop');
        timer = setInterval(function(){
          console.log(g_day);
          if (g_day > g_day_last)
            g_day = g_day_first;
          else
            g_day++;
          drawFlower(g_siteData, g_Fposition, g_day);
        }, 1000)

        playing = true;
      }else{
        d3.select(this).html('play');
        clearInterval(timer);
        playing = false;
      }
    })

  //Rachel can add the histgram drawing function here
  //eg. drawHist(siteData,Fposition,getTime())
}










