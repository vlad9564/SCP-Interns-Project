sap.ui.define([ 'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel' ], function(Controller, JSONModel) {
	'use strict';

	return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.View1', {
		_data: {
			dtValue: new Date()
		},

		onInit: function(evt) {
			var oModel = new JSONModel(this._data);
			this.getView().setModel(oModel);
		}
	});
});
