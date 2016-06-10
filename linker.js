var inNewWindow = true
var outgoingUrl = ""

$(function(){
	showLogoIn()
	$("#maininput").keyup(function (e) {
		doInput()
	    if (e.keyCode == 13) {
	       	if (outgoingUrl!= "") goToUrl()
	    }
	});
});

window.setInterval(function(){
  showLogoIn()
}, 500);

function doInput() {
	var value = $("#maininput").val()
	var splitted = value.split("")
	if (splitted[0] == "@") {
		var newText = splitted.slice(1,splitted.length).join("")
		outgoingUrl="http://www.twitter.com/" + newText
	}
	else if (splitted[0] == "_") {
		outgoingUrl += "http://www.facebook.com/" + splitted.slice(1,splitted.length).join("")
	}
	else {
		outgoingUrl = ""
	}
}

function showLogoIn () {
	if (outgoingUrl=="") {
		console.log("Reset")
		document.getElementsByClassName("simage")[0].style.display = "none"
		document.getElementById("maininput").style.margin = "auto"
	}
	else {
		console.log("Change")
		document.getElementsByClassName("simage")[0].style.display = "inline"
		document.getElementById("maininput").style.marginRight = "20px"
	}
}

function goToUrl() {
	if (!inNewWindow) {
		window.location.href = outgoingUrl
	}
	else {
		window.open(outgoingUrl, '_blank');
	}
}

$(document).ready(function(){
    $('.onoffswitch-label').click(function(){
        $(this).parent().toggleClass('onoffswitch-checked');
        inNewWindow=!inNewWindow
    });

});
