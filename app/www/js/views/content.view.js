var ContentView = Backbone.View.extend({

	template: templates["content"],

	events: {
		"click #add-content-item": "handleContent"
	},

	render: function() {
		//this.$el.html(templates["donations"]())
    console.dir(this.template);
		this.$el.html(this.template);
	},

	initialize: function(options) {
		this.options = options;
	},

	handleContent: function(e) {
		var that = this;
		console.log("handle Content fired!");
		var t = new Content();
		t.set("author", $("#author").val());
		t.set("title", $("#title").val());
		t.set("category", $("#category").val());
    t.set("content", $("#content").val());
    t.set("route", $("#route").val());
    t.set("createdAt", $("#createdAt").val());
    t.set("updatedAt", $("#updatedAt").val());
		t.save(null, {
			success: function() {
				console.log("in success content fn");
				console.dir(that.options.router);
				that.options.router.navigate("/contents", {trigger:true});
			}, error: function() {
				console.log("in error fn");
				that.options.router.navigate("/contents", {trigger:true});
			}
		});
	},

});
