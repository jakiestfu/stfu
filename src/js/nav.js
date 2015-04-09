stfu.register('nav', function() {

	var plugin = this;

	var body = document.body;
	var frame = document.createElement('iframe');
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

	frame.src = plugin.name + '.html';
});
