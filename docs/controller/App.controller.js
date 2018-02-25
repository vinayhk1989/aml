sap.ui.define([
               "sap/ui/core/mvc/Controller"
               ], function(Controller) {
	"use strict";

	return Controller.extend("com.aml.controller.App", {

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
		},

		navToAbout: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("about");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToSeva: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("seva");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToRoutine: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("routine");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToKanike: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("ekanike");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToMap: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("map");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToUtsava: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("utsava");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToContact: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo("contact");
			this.highlightMenu(oEvent.getSource().getId());
		},

		highlightMenu: function(sButtonId){
			var oToolbar = this.getView().byId("toolbar");
			var aButtons = oToolbar.getContent();
			
			for (var i = 0; i < aButtons.length; i++) {
				var oButton = aButtons[i];
				if(sButtonId === oButton.getId()){
					oButton.setPressed(true);
				}else {
					oButton.setPressed(false);
				}
			}
			
		},

		switchLanguage: function(oEvent) {
			var sKey = oEvent.getParameter("item").getId();

			switch (sKey) {
			case this.createId("kannada"):
				sap.ui.getCore().getConfiguration().setLanguage("kn");
				break;
			case this.createId("english"):
				sap.ui.getCore().getConfiguration().setLanguage("en");
				break;
			case this.createId("hindi"):
				sap.ui.getCore().getConfiguration().setLanguage("hi");
				break;

			default:
				sap.ui.getCore().getConfiguration().setLanguage("kn");
			break;
			}
		}

	});
});