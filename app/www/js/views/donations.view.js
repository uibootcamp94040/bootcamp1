var DonationsView = Backbone.View.extend({

	template: templates["donations"],
	
	render: function() {
		//this.$el.html(templates["donations"]())
		this.$el.html(this.template({
			donations:this.collection.toJSON()
		}));
	},

	initialize: function(options) {
		this.options = options;
	}

});
