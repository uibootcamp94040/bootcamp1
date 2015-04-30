define([], function() {
  return function(t) {
    console.log("save content called!");
    console.dir(t);
    t.save(null, {
      success: function() {
        console.log("in success content fn");
      }, error: function() {
        console.log("in error fn");
      }
    });
  };
});
