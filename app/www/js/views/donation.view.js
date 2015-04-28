var DonationView = Backbone.View.extend({

	template: templates["donation"],

	events: {
		"click #add-donation-item": "handleDonation"
	},

	render: function() {
		//this.$el.html(templates["donations"]())
    console.dir(this.template);
		this.$el.html(this.template);
		this.addBinding(null, "#paymentMethod", {
				observe: "paymentMethod"
				// selectOptions: {
				// 	collection: [
				// 		{ name: "California", code: "CA" },
				// 		{ name: "Utah", code: "UT" },
				// 		{ name: "Virginia", code: "VA" }
				// 	],
				// 	labelPath: "name",
				// 	valuePath: "code"
				// }
		});
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
	},

	bindings: {
		"#paymentMethod": {
			observe: "paymentMethod",
			initialize: function($el, model, binding) {
				console.log("donation payment method bound");
			},
			destroy: function($el, model, binding) {
				console.log("donation payment method unbound");
			},
			onGet: function(value) {
				console.log("onGet: " + value);
				return value;
			},
			onSet: function(value) {
				console.log("onSet: " + value);
				return value;
			}
		}
	}

});
