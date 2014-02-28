function reloadClient() {
	document.getElementById("client").innerHTML = document.getElementById("client").innerHTML;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
		{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
	return "";
}

function getStyle() {
	if(localStorage["style"] == "" || localStorage["style"] == undefined) {
		return "light";
	} else {
		return localStorage["style"];
	}
}

function setStyle(style) {
	localStorage["style"] = style;
	$("body").fadeOut(function() {
		document.getElementById("stylesheet").setAttribute("href", "http://grid12.tk/"+style+".css");
		$(this).fadeIn();
	});
}

function toggleStyle() {
	if(getStyle() == "light") {
		setStyle("dark");
	} else {
		setStyle("light");
	}
}

window.addEventListener("load", function() {
	setStyle(getStyle());
	$('body').css('opacity', '0').fadeTo(200, 1);
}, false);