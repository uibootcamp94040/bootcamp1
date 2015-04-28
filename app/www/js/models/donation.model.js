var Donation = BaseModel.extend({
	urlRoot: "/api/donation",
	defaults: {
	},
	initialize: function() {
		this.on("change:paymentMethod", function(model, value, options) {
			console.log("payment method changed:"+value);
		});
	}
});
