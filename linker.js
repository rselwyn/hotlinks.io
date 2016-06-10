var inNewWindow = true
var outgoingUrl = ""
var site = ""

var siteImageMap = {
	facebook: "https://pbs.twimg.com/profile_images/3513354941/24aaffa670e634a7da9a087bfa83abe6_200x200.png",
	twitter: "https://g.twimg.com/Twitter_logo_blue.png",
	github: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/PEO-octocat-2.svg/1000px-PEO-octocat-2.svg.png",
	yahoofinance: "https://lh5.ggpht.com/dTFTNAPcPpdd52VjidAJX7N8WYS6KuZ01l2NoXHF01iSTzLZLJ5ng-HEeuy8vCYL5DU=w300"
}

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
}, 250);

function doInput() {
	var value = $("#maininput").val()
	var splitted = value.split("")
	if (splitted[0] == "@") {
		var newText = splitted.slice(1,splitted.length).join("")
		outgoingUrl="http://www.twitter.com/" + newText
		site = "twitter"
	}
	else if (splitted[0] == "_") {
		outgoingUrl = "http://www.facebook.com/" + splitted.slice(1,splitted.length).join("")
		site = "facebook"
	}
	else if (splitted[0] + splitted[1] == "gh") {
		outgoingUrl = "https://www.github.com/"
		site = "github"
	}
	else if (splitted[0] == "$" && splitted.length > 1) {
		outgoingUrl = "http://www.finance.yahoo.com/q?s="+splitted.slice(1,splitted.length).join("")
		site = "yahoofinance"
	}
	else {
		outgoingUrl = ""
		site = ""
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
		document.getElementsByClassName("simage")[0].src = siteImageMap[site]
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
