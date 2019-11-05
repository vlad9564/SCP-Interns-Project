sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'com/cerner/interns/SAPUI5_Demo/model/models',
		'sap/m/MessageBox',
		'sap/ui/model/resource/ResourceModel'
	],
	function(Controller, JSONModel, models, MessageBox, ResourceModel) {
		'use strict';
		var doctor;
		var patient;
		return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
			_data: {
				dtValue: new Date()
			},

			onInit: async function(evt) {
				var oDoctorModel = await models.createDoctorModel();
				this.getView().setModel(oDoctorModel, 'doctors');
				debugger;
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

				let oPacientModel = await models.createPacientModel();
				this.getView().setModel(oPacientModel, 'patientList');

				this.getView().getModel(models.createEmptyDoctorModel, 'selectedDoctor');

				let patientId = {
					id: ''
				};

				this.getView().setModel(patientId, 'patientId');
			},
			onShowPatientDetails: function(oEvent) {
				let currentPatientPath = oEvent.getSource().getBindingContext('patientList');
				const patientFirstName = this.getView()
					.getModel('patientList')
					.getProperty('firstName', currentPatientPath);
				const patientLastName = this.getView()
					.getModel('patientList')
					.getProperty('lastName', currentPatientPath);
				const patientId = this.getView().getModel('patientList').getProperty('id', currentPatientPath);
				const patientAge = this.getView().getModel('patientList').getProperty('age', currentPatientPath);
				const patientDoctor = this.getView().getModel('patientList').getProperty('doctor', currentPatientPath);

				const bCompact = !!this.getView().$().closest('.sapUiSizeCompact').length;
				MessageBox.information(
					`Detailed information about patient
					Id: ${patientId}
					First Name : ${patientFirstName}
					Last Name : ${patientLastName}
					Age : ${patientAge}
					Assigned Doctor: ${patientDoctor.firstName} ${patientDoctor.lastName}`,
					{
						styleClass: bCompact ? 'sapUiSizeCompact' : ''
					}
				);
			},
			onShowDoctorDetails: function(oEvent) {
				let currentDoctorPath = oEvent.getSource().getBindingContext('doctors');
				const doctorFirstName = this.getView().getModel('doctors').getProperty('firstName', currentDoctorPath);
				const doctorLastName = this.getView().getModel('doctors').getProperty('lastName', currentDoctorPath);
				const doctorId = this.getView().getModel('doctors').getProperty('id', currentDoctorPath);
				const doctorAge = this.getView().getModel('doctors').getProperty('age', currentDoctorPath);
				const doctorDepartment = this.getView()
					.getModel('doctors')
					.getProperty('department', currentDoctorPath);

				const bCompact = !!this.getView().$().closest('.sapUiSizeCompact').length;
				MessageBox.information(
					`Detailed information about doctor
					Id: ${doctorId}
					First Name : ${doctorFirstName}
					Last Name : ${doctorLastName}
					Age : ${doctorAge}
					Department: ${doctorDepartment}`,
					{
						styleClass: bCompact ? 'sapUiSizeCompact' : ''
					}
				);
			},
			onSelectedDoctor: function(oEvent) {
				let currentDoctorPath = oEvent.getSource().getBindingContextPath('doctors');
				doctor = this.getView().getModel('doctors').getProperty(currentDoctorPath);
			},
			onSelectedPatient: function(oEvent) {
				let currentPatientPath = oEvent.getSource().getBindingContextPath('patientList');

				patient = this.getView().getModel('patientList').getProperty(currentPatientPath);
			},
			dialogShow: function() {
				MessageBox.warning(this.getView().getModel('i18n').getProperty('titleMessage'), {
					title: this.getView().getModel('i18n').getProperty('titleMessageBox'),
					actions: [ MessageBox.Action.YES, MessageBox.Action.NO ],
					onClose: function(sAction) {
						if (sAction === MessageBox.Action.YES) {
							patient.doctor = doctor;
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
