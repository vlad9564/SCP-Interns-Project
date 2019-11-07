sap.ui.define(
	[
		'sap/ui/model/json/JSONModel',
		'sap/ui/Device',
		'com/cerner/interns/SAPUI5_Demo/api/doctor/DoctorsAPI',
		'com/cerner/interns/SAPUI5_Demo/api/patient/patientApi',
		'com/cerner/interns/SAPUI5_Demo/api/about/aboutApi'
	],
	function (JSONModel, Device, DoctorsAPI, PatientApi, AboutApi) {
		'use strict';

		return {
			createDeviceModel: function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode('OneWay');
				return oModel;
			},
			createDoctorModel: async () => {
				let aDoctors;
				await DoctorsAPI.getDoctors().then(function (oResult) {
					if (oResult) {
						aDoctors = oResult;
					}
				});

				return new JSONModel(aDoctors);
			},

			createPacientModel: async () => {
				let aPatients;
				await PatientApi.getPatients().then(function (oResult) {
					if (oResult) {
						aPatients = oResult;
					}
				});
				return new JSONModel(aPatients);
			},

			createAboutModel: async () => {
				let aAbout;
				await AboutApi.getAbout().then(function (result) {
					if (result) {
						aAbout = result;
						debugger;
					}
				});

				return new JSONModel(aAbout);
			},
			createSelectedDoctorModel: () => {
				return new JSONModel('model/SelectedDoctor.json');
			},

			createEmptyDoctorModel: () => {
				return new JSONModel('model/DoctorModel.json');
			}
		};
	}
);
