sap.ui.define(['sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	"com/cerner/interns/SAPUI5_Demo/model/models",
	'com/cerner/interns/SAPUI5_Demo/api/doctor/DoctorsAPI',
	'com/cerner/interns/SAPUI5_Demo/api/patientApi',
	'com/cerner/interns/SAPUI5_Demo/api/aboutApi',
	'sap/m/MessageBox'
], function (Controller, JSONModel, models, DoctorsAPI, PatientApi, AboutApi, MessageBox) {
	'use strict';
	return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
		_data: {
			dtValue: new Date()
		},

		onInit: async function (evt) {

			let oDoctorModel = models.createDoctorModel();
			this.getView().setModel(oDoctorModel, "doctors");
			let oModel = new JSONModel(this._data);
			this.getView().setModel(oModel, 'systemDate');

			let oPacientModel = models.createPacientModel();
			this.getView().setModel(oPacientModel, "patientList");

			let aDoctors;
			await DoctorsAPI.getDoctors().then(function (oResult) {
				if (oResult) {
					aDoctors = oResult;
				}
			});
			console.log(aDoctors);

			let aPatients;
			await PatientApi.getPatients().then(function (oResult) {
				if (oResult) {
					aPatients = oResult;
				}
			});
			console.log(aPatients);

			let aAbout;
			await AboutApi.getAbout().then(function (result) {
				if (result) {
					aAbout = result;
				}
			});
			console.log(aAbout);


		},
		onShowPatientDetails: function (oEvent) {

			let currentPatientPath = oEvent.getSource().getBindingContext("patientList");
			const patientFirstName = this.getView().getModel("patientList").getProperty("firstName", currentPatientPath);
			const patientLastName = this.getView().getModel("patientList").getProperty("lastName", currentPatientPath);
			const patientId = this.getView().getModel("patientList").getProperty("id", currentPatientPath);
			const patientAge = this.getView().getModel("patientList").getProperty("age", currentPatientPath);
			const patientDoctor = this.getView().getModel("patientList").getProperty("doctor", currentPatientPath);

			const bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				`Detailed information about patient
				Id: ${patientId}
				First Name : ${patientFirstName}
				Last Name : ${patientLastName}
				Age : ${patientAge}
				Assigned Doctor: ${patientDoctor}`,
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},

		onShowDoctorDetails: function (oEvent) {

			let currentDoctorPath = oEvent.getSource().getBindingContext("doctors");
			const doctorFirstName = this.getView().getModel("doctors").getProperty("firstName", currentDoctorPath);
			const doctorLastName = this.getView().getModel("doctors").getProperty("lastName", currentDoctorPath);
			const doctorId = this.getView().getModel("doctors").getProperty("id", currentDoctorPath);
			const doctorAge = this.getView().getModel("doctors").getProperty("age", currentDoctorPath);
			const doctorDepartment = this.getView().getModel("doctors").getProperty("departament", currentDoctorPath);

			const bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				`Detailed information about doctor
				Id: ${doctorId}
				First Name : ${doctorFirstName}
				Last Name : ${doctorLastName}
				Age : ${doctorAge}
				Department: ${doctorDepartment}`,
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},
		onSelectedDoctor: function (oEvent) {
			let currentDoctorPath = oEvent.getSource().getBindingContextPath("doctors");
			return this.getView().getModel("doctors").getProperty(currentDoctorPath);
		},


	});
});