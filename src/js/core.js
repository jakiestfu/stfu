(function(win, doc) {

	var Namespace = 'stfu';
	var Registry = {};

	var self = this;

	self[Namespace] = {
		load: function(name, opts, cb) {
			if(name in Registry) {
				return Registry[name].call({
					name: name
				});
			}
		},
		register: function(name, fn) {
			if(!Registry[name]) {
				Registry[name] = fn;
			}
		}
	};

}).call(this, window, document);
