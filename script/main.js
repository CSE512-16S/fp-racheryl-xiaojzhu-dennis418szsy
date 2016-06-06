

loadData(); //save in sharedData
console.log(sharedData.s_siteData);

callback();


$(document).ready(function() {
    $('#JulianToDate').change(function(){
    	if($('#JulianToDate').val() in JulianDate){
    		$('#ShowJulianToDate').html("Date:" + JulianDate[$('#JulianToDate').val()]);
    	}else{
    		$('#ShowJulianToDate').html("Invalid Julian Day");
    	}
    });
});

$(document).ready(function() {
    $('#DateToJulian').change(function(){
    	if($('#DateToJulian').val() in DateJulian){
    		$('#ShowDateToJulian').html("Julian Day:" + DateJulian[$('#DateToJulian').val()]);	
    	}else{
    		$('#ShowDateToJulian').html("Invalid Date");
    	}
    });
});

$(document).ready(function() {
    $('#goto').change(function(){
        if($('#goto').val() >= 1 && $('#goto').val() <= 365){
            g_day = parseInt($('#goto').val());
            document.getElementById("showDate").innerHTML = "Date: " + JulianDate[g_day];
            document.getElementById("showJulianDay").innerHTML = "Julian Day: " + g_day.toString();
            replotflower();
            stackedBarChart(2013, g_day);
            stackedBarChart(2014, g_day);
            stackedBarChart(2015, g_day);
        }
    });
});





