sap.ui.define([ '../../model/UpdatePatientRequest' ], function(UpdatePatientRequest) {
	'use strict';

	const URL = 'http://localhost:8080';
	return {
		getPatients: function() {
			return $.ajax({
				url: URL + '/patients'
			}).done(function(response) {
				return response;
			});
		},

		updatePatient: async function(patientId, doctorId) {
			var settings = {
				url: `${URL}/patient?patientId=${patientId}`,
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(new UpdatePatientRequest(doctorId))
			};
			let actualResponse = {};
			await $.ajax(settings).done(function(response, status) {
				actualResponse.response = response;
				actualResponse.status = status;
			});
			return actualResponse;
		}
	};
});
