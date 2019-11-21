sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageBox',
		'sap/ui/model/resource/ResourceModel',
		'sap/ui/core/UIComponent',
		'../model/UpdatePatientLinkModel',
		'../api/doctor/DoctorsApi',
		'../api/patient/PatientApi',
		'../api/about/AboutApi'
	],
	function(
		Controller,
		JSONModel,
		MessageBox,
		ResourceModel,
		UIComponent,
		UpdatePatientLinkModel,
		DoctorApi,
		PatientApi,
		AboutApi
	) {
		'use strict';

		return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
			_data: {
				dtValue: new Date()
			},
			updatePatientLinkModel: {},
			onInit: async function(evt) {
				this.updatePatientLinkModel = new UpdatePatientLinkModel();

				//doctors model
				const oDoctorModel = await this._getDoctors();
				this.getView().setModel(oDoctorModel, 'doctors');

				//local doctor model
				oDoctorModel.getData().forEach((element) => {
					element.isSelectedForShow = false;
				});
				this.getView().setModel(oDoctorModel, 'localDoctors');

				//date model
				const oModel = new JSONModel(this._data);
				this.getView().setModel(oModel, 'systemDate');

				//patients model
				const oPatientModel = await this._getPatients();
				this.getView().setModel(oPatientModel, 'patients');

				//local patients model
				oPatientModel.getData().forEach((element) => {
					element.isSelectedForShow = false;
				});
				this.getView().setModel(oPatientModel, 'localPatients');

				const i18nModel = new ResourceModel({
					bundleName: 'com.cerner.interns.SAPUI5_Demo.i18n.i18n'
				});
				this.getView().setModel(i18nModel, 'i18n');

				//about model
				const oAboutModel = await this._getAboutData();
				this.getView().setModel(oAboutModel, 'about');
				const aboutSection = this.getView().byId('aboutList');
				aboutSection.setVisible(true);
				//this.getView().getModel(models.createEmptyDoctorModel, 'selectedDoctor');
			},
			onShowDoctorDetails: function(doctorFirstName, doctorLastName, doctorDepartment) {
				MessageBox.information(
					`Detailed information about doctor: \n
					First Name : ${doctorFirstName}
					Last Name : ${doctorLastName}
					Department: ${doctorDepartment}`
				);
			},
			onShowPatientDetails: function(patientFirstName, patientLastName, patientAge, patientDoctor) {
				MessageBox.information(
					`Detailed information about patient: \n
					First Name : ${patientFirstName}
					Last Name : ${patientLastName}
					Age: ${patientAge}
					Doctor: ${patientDoctor ? patientDoctor.firstName + ' ' + patientDoctor.lastName : 'unassigned'}`
				);
			},

			onSelectedDoctor: function(doctorId) {
				this.updatePatientLinkModel.doctorId = doctorId;
			},

			onSelectedPatient: function(patientId) {
				this.updatePatientLinkModel.patientId = patientId;
			},

			onLinkDialogShow: async function() {
				var that = this;
				MessageBox.warning(this.getView().getModel('i18n').getProperty('titleMessage'), {
					title: this.getView().getModel('i18n').getProperty('titleMessageBox'),
					actions: [ MessageBox.Action.YES, MessageBox.Action.NO ],
					onClose: async function(sAction) {
						if (sAction === MessageBox.Action.YES) {
							let updatedPatient = await PatientApi.updatePatient(
								that.updatePatientLinkModel.patientId,
								that.updatePatientLinkModel.doctorId
							);

							if (updatedPatient.status === 'success') {
								debugger;
								// iei datele ; var x = this.getView().getModel("").getDAta()
								// Cauti pacientul , updatezi pacientul ,
								// Set Data ! this.getView().getModel().setData(x);

								// update Binginds
								let data = that.getView().getModel('patients').getData();
								data.forEach((patient) => {
									if (patient.id === updatedPatient.response.id) {
										patient.doctor = updatedPatient.response.doctor;
									}
								});
								that.getView().getModel('patients').setData(data);
								that.getView().getModel('patients').updateBindings();
								debugger;
							}
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
			},

			onNavigationBack: function() {
				let oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo('RouteMainClinicalPage', true);
			},

			_getDoctors: async () => {
				let aDoctors;
				await DoctorApi.getDoctors().then(function(oResult) {
					if (oResult) {
						aDoctors = oResult;
					}
				});

				return new JSONModel(aDoctors);
			},

			_getPatients: async () => {
				let aPatients;
				await PatientApi.getPatients().then(function(oResult) {
					if (oResult) {
						aPatients = oResult;
					}
				});
				return new JSONModel(aPatients);
			},

			_getAboutData: async () => {
				let aAbout;
				await AboutApi.getAbout().then(function(result) {
					if (result) {
						aAbout = result;
					}
				});

				return new JSONModel(aAbout);
			}
		});
	}
);
