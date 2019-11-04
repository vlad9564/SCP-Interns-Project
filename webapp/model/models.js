sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {
		loadAbout: function () {
			return new JSONModel("model/about.json");
		},

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createDoctorModel: () => {
			return new JSONModel("model/Doctor.json");
		},

		createPacientModel: function () {
			let oData =
			{
				"Patients": [
					{
						"id": 1,
						"firstName": "Mihai",
						"lastName": "Nicolae",
						"age": "35",
						"doctor": ""
					},

					{
						"id": 2,
						"firstName": "Cornel",
						"lastName": "Mihaelescu",
						"age": "12",
						"doctor": ""
					},

					{
						"id": 3,
						"firstName": "Marian",
						"lastName": "Vadim",
						"age": "56",
						"doctor": ""
					},

					{
						"id": 4,
						"firstName": "Ceaser",
						"lastName": "Cezar",
						"age": "21",
						"doctor": ""
					},

					{
						"id": 5,
						"firstName": "Relian",
						"lastName": "Relinescu",
						"age": "25",
						"doctor": ""
					},

					{
						"id": 6,
						"firstName": "Reliana",
						"lastName": "Xenia",
						"age": "22",
						"doctor": ""
					},

					{
						"id": 8,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},

					{
						"id": 9,
						"firstName": "Rares",
						"lastName": "Manea",
						"age": "25",
						"doctor": ""
					},
					{
						"id": 10,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 11,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 12,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 13,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 14,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 15,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 17,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 18,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 19,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					},
					{
						"id": 20,
						"firstName": "Jonas",
						"lastName": "Predescu",
						"age": "10",
						"doctor": ""
					}
				]
			};


			return new JSONModel(oData);
		}


	};
});