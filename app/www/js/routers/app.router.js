var AppRouter = Backbone.Router.extend({

	routes: {
		"": "showHome",
		"donations": "showDonations",
		"donations/:DonationsId": "showDonation",
		"donation": "addDonation"
	},

	showHome: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		// create a new view
		this.currentView = new HomeView({
			// passing the element passed into the router
			el: this.options.el,
			// give view access to the router to navigate in response to events
			router: this
		});

		// render the new view
		this.currentView.render();
	},

	showDonations: function() {
		console.log("routing to show donations!");
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}
		var that = this;
		donations.fetch({
			success: function() {
				console.log(donations.models);
				that.currentView = new DonationsView({
					el: that.options.el,
					router: that,
					routeRedirect: "Donations",
					collection: donations
				});
				// if(window.view) {
				// 	window.view.remove();
				// }
				// window.view = that.currentView;
				that.currentView.render();
				//$("#view-main").html(that.currentView.el);
			}
		});
		// this.currentView = new DonationsView({
		// 	el: this.options.el,
		// 	router: this,
		// 	collection:donations
		// });
		// this.currentView.render();
	},

	showDonation: function(DonationsId) {

	},

	addDonation: function() {
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}
		var that = this;
		var myModel = new Donation();
		that.currentView = new DonationView({
			el: this.options.el,
			router: this,
			model: myModel
		});
		// if(window.view) {
		// 	window.view.remove();
		// }
		// window.view = that.currentView;
		that.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	}

});
