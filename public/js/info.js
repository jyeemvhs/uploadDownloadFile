

function successInfo(data) { 
	if (!data)
		alert("Error data");
	else {
		console.log(data.filename);
		image1.src = "public/images/" + data.filename;
	}
}

function requestClicked(){
$.get("/info2",successInfo);
  return false;
}


$(document).ready(function(){   
  	$("#requestButton").click(requestClicked);
});  		
  
  
