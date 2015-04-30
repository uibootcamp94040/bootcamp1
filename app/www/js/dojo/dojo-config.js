var dojoConfig = {
	async: true,
	cacheBust: true,
	parseOnLoad: true,
	deps: ["dojo/parser"],
	packages: [
		{ name: "myapp", location: "../../js/myapp" },
		{ name: "dojo-bootstrap", location: "../dojo-bootstrap" },
		{ name: "jquery", location: "../jquery/dist", main: "jquery" },
		{ name: "underscore", location: "../underscore", main: "underscore" },
		{ name: "backbone", location: "../backbone", main: "backbone" },
		{ name: "marionette", location: "../marionette/lib", main: "backbone.marionette" }
	]
};
