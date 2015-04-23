module.exports = function(config) {

	var
		http = require("http");

	config.httpServer.callback =
		config.httpServer.callback.bind(config.httpServer);

	config.webSockets(http.createServer(config.app), config.logger)
		.listen(config.httpServer.port, config.httpServer.callback);

};
