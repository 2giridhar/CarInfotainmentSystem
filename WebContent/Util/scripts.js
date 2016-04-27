performActionFor = function(command){
	
	if(final_transcript.toLowerCase().indexOf("stop")!=-1 || final_transcript.toLowerCase().indexOf("off")!=-1 ){
		location.reload(true);
		//setTimeout(function(){document.getElementById("start_button").click(); }, 3000);
		
	}
	
	else if(final_transcript.toLowerCase().indexOf("time")!=-1){
                
        input = '<div id="time_div"> <iframe src="http://www.worldtimeserver.com/current_time_in_US-AZ.aspx #time" scrolling="no" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
        $('#speech_results').html(input);
    	clearContent();
    } 
	else if(final_transcript.toLowerCase().indexOf("radio")!=-1){		
		 input = '<div id="time_div"> <iframe src="http://streema.com/radios/play/1" scrolling="yes" frameborder="no" style="position: relative; height: 100%; width: 100%;"></iframe></div>';
	     $('#speech_results').html(input);
	     clearContent();
	}
	
}

function clearContent(){
	
	setTimeout(function(){document.getElementById("start_button").click(); }, 3000);
	$("#start_button").click();
}