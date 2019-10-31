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
		createDoctorModel: () => {
			const path = "model/Doctor.json";
			let oModel = new JSONModel(path);
			return oModel;
		}

	};
});