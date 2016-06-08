$(function(){
	$("#maininput").keyup(function (e) {
	    if (e.keyCode == 13) {
	       	doInput()
	    }
	});
});

function doInput() {

	var outgoingUrl = "http://www."

	var value = $("#maininput").val()
	var splitted = value.split("")
	if (splitted[0] == "@") {
		var newText = "";
		newText = splitted.slice(1,splitted.length).join("")
		outgoingUrl+="twitter.com/" + newText
	}

	window.location.href = outgoingUrl

}
