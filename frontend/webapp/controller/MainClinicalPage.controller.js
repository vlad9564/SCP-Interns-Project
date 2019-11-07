sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/UIComponent",
    'sap/ui/core/HTML'],
    function (Controller, JSONModel, UIComponent, HTML) {
        'use strict';
        return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainClinicalPage', {
            _data: {
                dtValue: new Date()
            },

            onInit: function (evt) {
                const oModel = new JSONModel(this._data);
                this.getView().setModel(oModel, 'systemDate');
            },
            onOpenAppointmentPage: function (oEvent) {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("AppointmentPage");
            },
            onOpenAdministrationPage: function (oEvent) {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("AdministrationPage");
            },
        });
    });