var DonationView = Backbone.View.extend({

	template: templates["donation"],

	events: {
		"click #add-donation-item": "handleDonation"
	},

	render: function() {
		//this.$el.html(templates["donations"]())
    console.dir(this.template);
		this.$el.html(this.template);
	},

	initialize: function(options) {
		this.options = options;
	},

	handleDonation: function(e) {
		var that = this;
		console.log("handle Donation fired!");
		var t = new Donation();
		t.set("paymentMethod", $("#paymentMethod").val());
		t.set("name", $("name").val());
		t.set("creditCardNumber", $("#creditCardNumber").val());
		t.set("amount", $("#amount").val());
		t.set("comment", $("#comment").val());
		t.set("expDate", $("#expDate").val());
		t.save(null, {
			success: function() {
				console.log("in success fn");
				console.dir(that.options.router);
				that.options.router.navigate("/donations", {trigger:true});
			}, error: function() {
				console.log("in error fn");
				that.options.router.navigate("/donations", {trigger:true});
			}
		});
	}

});
