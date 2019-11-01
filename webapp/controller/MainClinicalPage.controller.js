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
                var oModel = new JSONModel(this._data);
                this.getView().setModel(oModel, 'systemDate');
                // this._loadPictureAndSetInContent();
            },

            // _loadPictureAndSetInContent: function () {
            //     const oHtml = new HTML();
            //     oHtml.setContent("<div> <img src='sap-icon://activity-individual'/> </div>");
            //     const oVBox = this.getView().byId("idForImage");
            //     oVBox.addItem(oHtml);
            // },
            onOpenAppointmentPage: function (oEvent) {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Appointment");
            },
        });
    });