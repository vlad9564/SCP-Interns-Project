sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'com/cerner/interns/SAPUI5_Demo/model/models',
		'sap/m/MessageBox',
		'sap/ui/model/resource/ResourceModel',
		'sap/ui/core/UIComponent'
	],
	function (Controller, JSONModel, models, MessageBox, ResourceModel, UIComponent) {
		'use strict';

		return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
			_data: {
				dtValue: new Date()
			},

			onInit: async function (evt) {
				let myModel = new JSONModel({
					Doctor: [{
						id: '',
						firstName: '',
						lastName: '',
						age: '',
						deparment: ''
					}],
					Patient: [{
						id: '',
						firstName: '',
						lastName: '',
						age: '',
						doctor: ''
					}]
				});

				this.getView().setModel(myModel, 'myModel');

				const oDoctorModel = await models.createDoctorModel();
				this.getView().setModel(oDoctorModel, 'doctors');

				const oModel = new JSONModel(this._data);
				this.getView().setModel(oModel, 'systemDate');

				const oPacientModel = await models.createPacientModel();
				this.getView().setModel(oPacientModel, 'patientList');
				const i18nModel = new ResourceModel({
					bundleName: 'com.cerner.interns.SAPUI5_Demo.i18n.i18n'
				});
				this.getView().setModel(i18nModel, 'i18n');

				const oAboutModel = await models.createAboutModel();
				this.getView().setModel(oAboutModel, 'about');
				const aboutSection = this.getView().byId('aboutList');
				aboutSection.setVisible(true);

				this.getView().getModel(models.createEmptyDoctorModel, 'selectedDoctor');

				let patientId = {
					id: ''
				};

				this.getView().setModel(patientId, 'patientId');
			},
			onShowPatientDetails: function (oEvent) {
				const currentPatientPath = oEvent.getSource().getBindingContext('patientList');
				const PatientModification = oEvent.getSource().getBindingContext('myModel');
				const patientFirstName = this.getView()
					.getModel('patientList')
					.getProperty('firstName', currentPatientPath);
				const patientLastName = this.getView()
					.getModel('patientList')
					.getProperty('lastName', currentPatientPath);
				const patientId = this.getView().getModel('patientList').getProperty('id', currentPatientPath);
				const patientAge = this.getView().getModel('patientList').getProperty('age', currentPatientPath);

				debugger;
				const patientDoctorFirstName = this.getView().getModel('myModel').getData()[0].selectedDoctor.firstName;
				const patientDoctorLastName = this.getView().getModel('myModel').getData()[0].selectedDoctor.lastName;
				const selectedPatientId = this.getView().getModel('myModel').getData()[1].selectedPatient.id;
				debugger;

				if (selectedPatientId === patientId) {
					const bCompact = !!this.getView().$().closest('.sapUiSizeCompact').length;
					MessageBox.information(
						`Detailed information about patient
					Id: ${patientId}
					First Name : ${patientFirstName}
					Last Name : ${patientLastName}
					Age : ${patientAge}
					Assigned Doctor: ${patientDoctorFirstName} ${patientDoctorLastName} `, {
							styleClass: bCompact ? 'sapUiSizeCompact' : ''
						}
					);
				} else {
					const bCompact = !!this.getView().$().closest('.sapUiSizeCompact').length;
					MessageBox.information(
						`Detailed information about patient
					Id: ${patientId}
					First Name : ${patientFirstName}
					Last Name : ${patientLastName}
					Age : ${patientAge}
					Assigned Doctor: ${doctorFirstName} ${doctorLasttName} `, {
							styleClass: bCompact ? 'sapUiSizeCompact' : ''
						}
					);
				}
			},
			onShowDoctorDetails: function (oEvent) {
				const currentDoctorPath = oEvent.getSource().getBindingContext('doctors');
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
					Department: ${doctorDepartment}`, {
						styleClass: bCompact ? 'sapUiSizeCompact' : ''
					}
				);
			},
			onSelectedDoctor: function (oEvent) {
				const currentDoctorPath = oEvent.getSource().getBindingContextPath('doctors');
				let selectedDoctor = this.getView().getModel('doctors').getProperty(currentDoctorPath);
				debugger;

				// let modelDoctor = this.getView().getModel('myModel');
				// modelDoctor = modelDoctor.oData;
				// modelDoctor = { selectedDoctor };
				debugger;
				this.getView().getModel('myModel').setData(selectedDoctor);
				debugger;
			},
			onSelectedPatient: function (oEvent) {
				const currentPatientPath = oEvent.getSource().getBindingContextPath('patientList');
				let selectedPatient = this.getView().getModel('patientList').getProperty(currentPatientPath);

				let modelPatient = this.getView().getModel('myModel');
				let selectedDoctor = modelPatient.oData;
				let PatientDoctor = [{
					selectedDoctor
				}, {
					selectedPatient
				}];

				this.getView().getModel('myModel').setData(PatientDoctor);

				debugger;
			},
			dialogShow: function () {
				let a = this.getView().getModel('myModel');
				MessageBox.warning(this.getView().getModel('i18n').getProperty('titleMessage'), {
					title: this.getView().getModel('i18n').getProperty('titleMessageBox'),
					actions: [MessageBox.Action.YES, MessageBox.Action.NO],

					onClose: function (sAction) {
						if (sAction === MessageBox.Action.YES) {
							let b = a;
							b.getData()[1].selectedPatient.doctor = b.getData()[0].selectedDoctor.firstName;

							debugger;
						}
					}
				});
				debugger;
			},
			onAbout: function (oEvent) {
				const aboutSection = this.getView().byId('aboutList');
				if (aboutSection.getVisible()) {
					aboutSection.setVisible(false);
				} else {
					aboutSection.setVisible(true);
				}
			},
			onNavigationBack: function () {
				let oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo('RouteMainClinicalPage', true);
			}
		});
	}
);