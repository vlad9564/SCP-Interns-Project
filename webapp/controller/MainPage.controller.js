sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'com/cerner/interns/SAPUI5_Demo/model/models',
		'com/cerner/interns/SAPUI5_Demo/api/doctor/DoctorsAPI',
		'com/cerner/interns/SAPUI5_Demo/api/patientApi',
		'com/cerner/interns/SAPUI5_Demo/api/aboutApi',
		'sap/m/MessageBox',
		'sap/ui/model/resource/ResourceModel'
	],
	function(Controller, JSONModel, models, DoctorsAPI, PatientApi, AboutApi, MessageBox, ResourceModel) {
		'use strict';
		return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
			_data: {
				dtValue: new Date()
			},

			onInit: async function(evt) {
				var oDoctorModel = models.createDoctorModel();
				this.getView().setModel(oDoctorModel, 'doctors');
				var oModel = new JSONModel(this._data);
				this.getView().setModel(oModel, 'systemDate');
				var i18nModel = new ResourceModel({
					bundleName: 'com.cerner.interns.SAPUI5_Demo.i18n.i18n'
				});
				this.getView().setModel(i18nModel, 'i18n');
				let oAboutModel = models.loadAbout();
				this.getView().setModel(oAboutModel, 'about');
				const aboutSection = this.getView().byId('aboutList');
				aboutSection.setVisible(true);

				let aDoctors;
				await DoctorsAPI.getDoctors().then(function(oResult) {
					if (oResult) {
						aDoctors = oResult;
					}
				});
				console.log(aDoctors);

				let aPatients;
				await PatientApi.getPatients().then(function(oResult) {
					if (oResult) {
						aPatients = oResult;
					}
				});
				console.log(aPatients);

				let aAbout;
				await AboutApi.getAbout().then(function(result) {
					if (result) {
						aAbout = result;
					}
				});
				console.log(aAbout);
			},
			onSelectedDoctor: function(oEvent) {
				let currentDoctorPath = oEvent.getSource().getBindingContextPath('doctors');
				return this.getView().getModel('doctors').getProperty(currentDoctorPath);
			},
			dialogShow: function() {
				MessageBox.warning(this.getView().getModel('i18n').getProperty('titleMessage'), {
					title: this.getView().getModel('i18n').getProperty('titleMessageBox'),
					actions: [ MessageBox.Action.YES, MessageBox.Action.NO ],
					onClose: function(sAction) {
						if (sAction === MessageBox.Action.YES) {
							console.log('Yes');
						}
						if (sAction === MessageBox.Action.NO) {
							console.log('No');
						}
					}
				});
			},
			onAbout: function(oEvent) {
				const aboutSection = this.getView().byId('aboutList');
				if (aboutSection.getVisible()) {
					aboutSection.setVisible(false);
				} else {
					aboutSection.setVisible(true);
				}
			}
		});
	}
);
