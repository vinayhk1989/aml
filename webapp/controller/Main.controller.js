sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.aml.controller.Main", {
		pressOnVratha: function(oEvent) {
			var that = this;
			if (!that.pressDialog) {
				that.pressDialog = new sap.m.Dialog({
					title: 'Vara lakshmi Vratha',
					content: sap.ui.xmlfragment("vratha", "com.aml.fragments.VaralakshmiVratha"),
					beginButton: new sap.m.Button({
						text: 'Close',
						press: function() {
							that.pressDialog.close();
						}
					})
				});

				//to get access to the global model
				this.getView().addDependent(that.pressDialog);
			}

			that.pressDialog.open();
		}

	});
});