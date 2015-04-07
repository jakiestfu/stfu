(function(win, doc) {

	var init = function() {

		var nav_script = doc.getElementById('jakiestfu-nav-api');
		var frame = doc.createElement('iframe');
		frame.setAttribute([
			"display: block;",
			"position: fixed;",
			"top: 0;",
			"left:0;",
			"right:0;",
			"border:none;"
		].join(""));
		nav_script.parentNode.insertBefore(frame, nav_script.nextSibling);

		frame.src = "";
	};

	window.onload = init;

}).call(this, window, document);
