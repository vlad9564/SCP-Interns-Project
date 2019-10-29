/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/cerner/interns/SAPUI5_Demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});