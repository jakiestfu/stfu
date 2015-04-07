(function(win, doc) {

	var init = function() {

		var body = doc.body;
		var frame = doc.createElement('iframe');
		frame.setAttribute('style', [
			"display: block;",
			"position: fixed;",
			"width: 100%;",
			"top: 0;",
			"left:0;",
			"right:0;",
			"border:none;",
			"z-index: 999999;",
 			"height: 52px;"
		].join(""));
		body.insertBefore(frame,body.firstChild);

		frame.src = "//jakiestfu.github.io/lab-tools/nav/";
	};

	init();

}).call(this, window, document);
