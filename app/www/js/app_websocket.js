
function WebClient(url) {

  var ws;
  var p = new Promise(function(resolve, reject) {
    ws = new WebSocket(url);
    ws.addEventListener("open", function() {
      resolve();
    });

    ws.addEventListener("error", function(err) {
      reject();
    });
  });

  this.error = function(message) {
    p.then(function() {
      ws.send(JSON.stringify({
        messageType: "error",
        errorMessage:message
      }));
    });
  };
  // ws.addEventListener("message", function(msg) {
  // 	console.log("message received: " + msg.data);
  // 	console.dir(JSON.parse(msg.data));
  // });
}

var w = new WebClient("ws://localhost:8081");
w.error("test");
