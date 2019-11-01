sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', "com/cerner/interns/SAPUI5_Demo/model/models"], function (Controller, JSONModel, models) {
	'use strict';
	return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
		_data: {
			dtValue: new Date()
		},

		onInit: function (evt) {
			const oDoctorModel = models.createDoctorModel();
			this.getView().setModel(oDoctorModel, "doctors");
			const oModel = new JSONModel(this._data);
			this.getView().setModel(oModel, 'systemDate');

			const oPacientModel = models.createPacientModel();
			this.getView().setModel(oPacientModel, "patientList");

		},
		onSelectedDoctor: function (oEvent) {
			let currentDoctorPath = oEvent.getSource().getBindingContextPath("doctors");
			return this.getView().getModel("doctors").getProperty(currentDoctorPath);
		},
	});
});
