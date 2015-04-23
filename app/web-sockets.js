module.exports = function(webServer, logger) {
  "use strict";
  console.log("calling websocket function");
  
  var
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: webServer });

  wss.on("connection", function(ws) {

    logger.info("web sockets open");

    ws.on("error", function(data) {
      logger.error("web sockets error");
    });

    ws.on("close", function(data) {
      logger.info("web sockets closed");
    });

    ws.on("message", function(msg) {
      var data = JSON.parse(msg);
      if(data.messageType == "error") {
        logger.error(data.errorMessage);
      }
      logger.log("message received: " + data.source);

      ws.send(JSON.stringify({
        //source: "echo: " + data.source
        status:"OK"
      }));

    });
  });

  return webServer;

};
