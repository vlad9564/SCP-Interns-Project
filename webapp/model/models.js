sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createPacientModel: function () {
			let oData =
			{
				"Patients": [
					{
						"id": 1,
						"name": "Mihai"
					},

					{
						"id": 2,
						"name": "Cornel"
					},

					{
						"id": 3,
						"name": "MARIAN"
					},

					{
						"id": 4,
						"name": "Ceaser"
					},

					{
						"id": 5,
						"name": "Relian"
					},

					{
						"id": 6,
						"name": "Reliana"
					},

					{
						"id": 7,
						"name": "Jonas"
					},

					{
						"id": 8,
						"name": "Rares"
					}
				]
			};


			let oModel = new JSONModel(oData);
			return oModel;
		}

	};
});