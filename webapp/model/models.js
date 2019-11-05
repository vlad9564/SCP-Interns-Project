sap.ui.define([ 'sap/ui/model/json/JSONModel', 'sap/ui/Device' ], function(JSONModel, Device) {
	'use strict';

	return {
		loadAbout: function() {
			return new JSONModel('model/about.json');
		},

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode('OneWay');
			return oModel;
		},
		createDoctorModel: () => {
			return new JSONModel('model/Doctor.json');
		},

		createPacientModel: () => {
			return new JSONModel('model/Patient.json');
		},

		createSelectedDoctorModel: () => {
			return new JSONModel('model/SelectedDoctor.json');
		},

		createEmptyDoctorModel: () => {
			return new JSONModel('model/DoctorModel.json');
		}
	};
});
