sap.ui.define([
               "sap/ui/core/mvc/Controller"
               ], function(Controller) {
	"use strict";

	return Controller.extend("com.aml.controller.App", {
		
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.onRouterMatch, this);
		},
		
		onRouterMatch: function(oEvent) {
			var sPattern = oEvent.getParameter("name");
			
			switch (sPattern) {
			case "home":
				this.highlightMenu(this.createId("menu1"));
				break;
			case "about":
				this.highlightMenu(this.createId("menu2"));
				break;
			case "utsava":
				this.highlightMenu(this.createId("menu3"));
				break;
			case "contact":
				this.highlightMenu(this.createId("menu4"));
				break;
			case "ekanike":
				this.highlightMenu(this.createId("menu5"));
				break;
			case "seva":
				this.highlightMenu(this.createId("menu6"));
				break;
			case "map":
				this.highlightMenu(this.createId("menu7"));
				break;
			case "routine":
				this.highlightMenu(this.createId("menu8"));
				break;
			case "trust":
				this.highlightMenu(this.createId("menu9"));
				break;
			case "mantra":
				this.highlightMenu(this.createId("menu10"));
				break;

			default:
				break;
			}
		},

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

		navToHome: function(oEvent) {
			this.oRouter.navTo("home");
			this.highlightMenu(oEvent.getSource().getId());
		},
		
		navToAbout: function(oEvent) {
			this.oRouter.navTo("about");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToSeva: function(oEvent) {
			this.oRouter.navTo("seva");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToRoutine: function(oEvent) {
			this.oRouter.navTo("routine");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToKanike: function(oEvent) {
			this.oRouter.navTo("ekanike");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToMap: function(oEvent) {
			this.oRouter.navTo("map");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToUtsava: function(oEvent) {
			this.oRouter.navTo("utsava");
			this.highlightMenu(oEvent.getSource().getId());
		},
		navToContact: function(oEvent) {
			this.oRouter.navTo("contact");
			this.highlightMenu(oEvent.getSource().getId());
		},
		
		navToTrust: function(oEvent) {
			this.oRouter.navTo("trust");
			this.highlightMenu(oEvent.getSource().getId());
		},
		
		navToMantra: function(oEvent) {
			this.oRouter.navTo("mantra");
			this.highlightMenu(oEvent.getSource().getId());
		},

		highlightMenu: function(sButtonId){
			var oToolbar = this.getView().byId("toolbar");
			
			if(oToolbar){
				var aButtons = oToolbar.getContent();
				
				for (var i = 0; i < aButtons.length; i++) {
					var oButton = aButtons[i];
					if(sButtonId === oButton.getId()){
						oButton.setPressed(true);
					}else {
						oButton.setPressed(false);
					}
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
			default:
				sap.ui.getCore().getConfiguration().setLanguage("kn");
			break;
			}
		}

	});
});