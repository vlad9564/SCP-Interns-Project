sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/UIComponent"],
    function (Controller, JSONModel, UIComponent) {
        'use strict';
        return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.AdministrationPage', {
            _data: {
                dtValue: new Date()
            },

            onInit: function (evt) {
                const oModel = new JSONModel(this._data);
                this.getView().setModel(oModel, 'systemDate');
            },
            onNavigationBack: function () {
                let oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteMainClinicalPage", true);
            }
        });
    });