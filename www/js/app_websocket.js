document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("mybtn").addEventListener("click", function() {
    var ws = new WebSocket("ws://localhost:8081");
    ws.addEventListener("open", function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        ws.send(JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    });


    ws.addEventListener("error", function(err) {
    	console.log("err received: " + JSON.stringify(err));
    });
  });

});
