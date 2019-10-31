sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', "com/cerner/interns/SAPUI5_Demo/model/models"], function (Controller, JSONModel, models) {
	'use strict';
	return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
		_data: {
			dtValue: new Date()
		},

		onInit: function (evt) {
			var oDoctorModel = models.createDoctorModel();
			this.getView().setModel(oDoctorModel, "doctors");
			var oModel = new JSONModel(this._data);
			this.getView().setModel(oModel, 'systemDate');

		},
		onSelectedDoctor: function (oEvent) {
			let currentDoctorPath = oEvent.getSource().getBindingContextPath("doctors"); debugger;
			return this.getView().getModel("doctors").getProperty(currentDoctorPath);
		},
	});
});
