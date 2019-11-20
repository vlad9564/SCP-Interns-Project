sap.ui.define([], function() {
	'use strict';

	return {
		getDoctors: function() {
			return $.ajax({
				url: 'http://localhost:8080/doctors'
			}).done(function(response, status) {
				return response;
			});
		}
	};
});
