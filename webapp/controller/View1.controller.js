sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', "com/cerner/interns/SAPUI5_Demo/model/models"],
	function (Controller, JSONModel, models) {
		'use strict';

		return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.View1', {
			_data: {
				dtValue: new Date()
			},


			onInit: function (evt) {
				var oModel = new JSONModel(this._data);
				this.getView().setModel(oModel, 'systemDate');


				let pacientModel = models.createPacientModel();
				this.getView().setModel(pacientModel, "patientList");

				patientList.addStyleClass("myPatientList");
			}
		});
	});
