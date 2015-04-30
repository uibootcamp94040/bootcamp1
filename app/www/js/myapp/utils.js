define([
  "dojo/request","dojo/dom","dojo/dom-construct"
], function(request, dom, domConstruct){

  return function() {
    request("http://localhost:8081/api/donations").then(function(response) {
      console.log("donations:");
      var data = JSON.parse(response);
      console.dir(data);
      // set table element and add rows of data (loop through data)
      var appDiv = dom.byId("app");
      var node = domConstruct.toDom("table");
      domConstruct.place(node, appDiv);
    }, function(err){
      console.log(err);
    });
  };

});
