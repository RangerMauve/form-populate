;(function() {
	if (typeof module === "undefined") {
		window.form_populate = populate;
	} else {
		module.exports = populate;
	}

	function populate(e, data) {
		var elements = e.elements;
		Object.keys(data).forEach(function(key) {
			var el = elements[key];
			if (el) el.value = data[key];
		})
	}
})();
