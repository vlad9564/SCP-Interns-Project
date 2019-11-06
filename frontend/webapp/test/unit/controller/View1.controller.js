/*global QUnit*/

sap.ui.define([
	"com/cerner/interns/SAPUI5_Demo/controller/MainPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainPage Controller");

	QUnit.test("I should test the MainPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});