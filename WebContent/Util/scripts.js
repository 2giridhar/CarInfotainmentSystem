performActionFor = function(command){
	
	if(final_transcript.toLowerCase().indexOf("stop")!=-1 || final_transcript.toLowerCase().indexOf("off")!=-1 || final_transcript.toLowerCase().indexOf("end")!=-1 ){
		location.reload(true);
		//setTimeout(function(){document.getElementById("start_button").click(); }, 3000);		
	}	
	else if(final_transcript.toLowerCase().indexOf("time")!=-1){
		setTimeout(function(){
        input = '<div id="time_div"> <iframe src="http://www.worldtimeserver.com/current_time_in_US-AZ.aspx #time" scrolling="no" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
        $('#speech_results').html(input);document.getElementById("start_button").click(); }, 1000);
    	clearContent();
    } 
	else if(final_transcript.toLowerCase().indexOf("radio")!=-1){		
		setTimeout(function(){ 
		input = '<div id="time_div"> <iframe src="http://streema.com/radios/play/1" scrolling="yes" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);document.getElementById("start_button").click(); }, 1000);
		clearContent();
	}
	/*else if(final_transcript.toLowerCase().indexOf("traffic")!=-1){		
		 input = '<div id="map_div"> <iframe src="http://www.abc15.com/traffic/#layout-column_column-2" scrolling="yes" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);
	     clearContent();
		
	}*/
	else if(final_transcript.toLowerCase().indexOf("news")!=-1){		
		setTimeout(function(){ 
		input = '<div id="map_div"> <iframe src="http://www.cbsnews.com/live/" scrolling="yes" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);
	     document.getElementById("start_button").click(); }, 1000);
		clearContent();
	}
	else if(final_transcript.toLowerCase().indexOf("weather")!=-1 ||final_transcript.toLowerCase().indexOf("temperature")!=-1 ){
		setTimeout(function(){
		input = '<div id="temp_div"> <iframe src="https://weather.com/weather/today/l/USAZ0166:1:US #wx-hero-content" scrolling="no" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);
	     document.getElementById("start_button").click(); }, 1000);
		clearContent();
	}
	else if(final_transcript.toLowerCase().indexOf("weather")!=-1 ){
		setTimeout(function(){
		input = '<div id="temp_div"> <iframe src="https://weather.com/weather/today/l/USAZ0166:1:US #wx-hero-content" scrolling="no" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);document.getElementById("start_button").click(); }, 1000);
	     clearContent();
		
	}
	else if(final_transcript.toLowerCase().indexOf("football")!=-1 ||  final_transcript.toLowerCase().indexOf("soccer")!=-1){
		setTimeout(function(){
		input = '<div id="time_div"> <iframe src="http://www.espnfc.co.uk/scores" scrolling="no" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);document.getElementById("start_button").click(); }, 1000);
	     clearContent();
		
	}
	else if(final_transcript.toLowerCase().indexOf("traffic")!=-1 || final_transcript.toLowerCase().indexOf("near")!=-1 || final_transcript.toLowerCase().indexOf("take")!=-1 || final_transcript.toLowerCase().indexOf("drive")!=-1 || final_transcript.toLowerCase().indexOf("direction")!=-1 || final_transcript.toLowerCase().indexOf("maps")!=-1 ||  final_transcript.toLowerCase().indexOf("location")!=-1 ||  final_transcript.toLowerCase().indexOf("where am i")!=-1){
		var replaced = final_transcript.split(' ').join('+');
		setTimeout(function(){
		input = '<div id="map_div"> <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/search?q='+replaced+'&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div>';
	     $('#speech_results').html(input);document.getElementById("start_button").click(); document.getElementById("start_button").click(); }, 1000);
	     clearContent();
		
	}
	
	
	
}

function clearContent(){
	
	document.getElementById("start_button").click();
}