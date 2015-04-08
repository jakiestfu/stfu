(function(win, doc) {

	var Namespace = 'stfu';
	var Registry = {};

	var self = this;

	self[Namespace] = {
		load: function(thingy, opts, cb) {
			if(thingy in Registry) {
				return Registry[thingy].call();
			}
		},
		register: function(name, fn) {
			if(!Registry[name]) {
				Registry[name] = fn;
			}
		}
	};

}).call(this, window, document);
