var donations = new Donations();

window.addEventListener("DOMContentLoaded", function() {

	var appRouter = new AppRouter({
		el: $("#view-main")[0]
	});

	//
  // var donationsView = new DonationsView({
  //  el: $("#view-main")[0],
  //  router: appRouter,
  //  routeRedirect: "Donations",
  //  model: null
  // });
  // donationsView.render();

	Backbone.history.start({ pushState: true });

	document.getElementById("get-all-donations")
		.addEventListener("click", function() {
			console.log("get-all-donations clicked!");
			appRouter.navigate("/donations", {trigger:true});
			// donations.fetch({
			// 	success: function() {
			// 		console.log(donations.models);
			// 		if(window.view) {
			// 			window.view.remove();
			// 		}
			// 		window.view = new DonationsView({
			// 			router: appRouter,
			// 			routeRedirect: "Donations",
			// 			collection: donations
			// 		});
			// 	  window.view.render();
			// 		$("#view-main").append(window.view.el);
			// 	}
			// });
	});

	var button = document.getElementById("log-me-in");
	button.addEventListener("click", function() {
	  //var userid = document.getElementById("username").value;
	  //var password = document.getElementById("password").value;
	  var userData = {
	    "username":"test1",
	    "password":"intuit123"
	  };

	  console.log(userData);

	  var jsonUserObj = JSON.stringify(userData);
	  console.log(jsonUserObj);

	  var xhr = new XMLHttpRequest();

	  xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	      var o = JSON.parse(xhr.responseText)
	      console.log(o);
	    }
	  };

	  xhr.open("POST", "/api/account/authenticate");
	  xhr.setRequestHeader("Content-Type", "application/json");
	  xhr.send(jsonUserObj);
	});

	document.getElementById("add-donation")
		.addEventListener("click", function() {
			console.log("add-donation clicked!");
			appRouter.navigate("/donation", {trigger:true});
			//console.log(donations.models);
			// if(window.view) {
			// 	window.view.remove();
			// }
		  //  window.view = new DonationView({
		  //  router: appRouter,
		  //  routeRedirect: "Donation"
		  // });
		  // window.view.render();
			//
			// $("#view-main").append(window.view.el);
		});

});

// 		var donationItem = document.getElementById("add-donation-item");
// 		console.dir(donationItem);
// 		document.getElementById("add-donation-item")
// 		.addEventListener("click", function() {
//
// 		if(window.view) {
// 			window.view.remove();
// 		}
// 		 window.view = new DonationView({
// 		 router: appRouter,
// 		 routeRedirect: "Donation"
// 		});
// 		window.view.render();
//
// 		$("#view-main").append(window.view.el);
//
// 		var t = new Donation();
// 		t.set("paymentMethod", $("#paymentMethod").val());
// 		t.set("name", $("name").val());
// 		t.set("creditCardNumber", $("#creditCardNumber").val());
// 		t.set("amount", $("#amount").val());
// 		t.set("comment", $("#comment").val());
// 		t.set("expDate", $("#expDate").val());
// 		t.save(null, {
// 			success: function() {
// 				console.dir(t.attributes);
// 				//appRouter.navigate("/donations", {trigger:true});
// 				donations.fetch({
// 					success: function() {
//
// 						//console.log(donations.models);
// 						if(window.view) {
// 							window.view.remove();
// 						}
// 						   window.view = new DonationsView({
// 						   router: appRouter,
// 						   routeRedirect: "Donations",
// 						   collection: donations
// 						  });
// 						  window.view.render();
//
// 						$("#view-main").append(window.view.el);
// 					}
// 				});
// 			}
// 		});
// });


		// document.getElementById("get-all-transactions")
		// 	.addEventListener("click", function() {
		// 		transactions.fetch({
		// 			success: function() {
		// 				$("#view").append(templates["transaction-records"]({
		// 					transactions:  transactions.toJSON()
		// 				}));
		// 			}
		// 		})
		// 	});


// function Father() {
//     console.log("base constructor");
//     this.accountBalance = 100;
//     this.balance = 0;
// }
//
// Account.prototype.deposit = function(amt) {
//     console.log("made a deposit");
//     this.balance += amt;
// }
//
// function Son(accountNumber) {
//     Son.prototype._super.call(this, accountNumber);
// }
//
// Son.prototype = Object.create(Account.prototype);
// Son.prototype.constructor = Son;
// Son.prototype._super = Father;
// Son.prototype.writeCheck = function() {
//};

// window.addEventListener("DOMContentLoaded", function() {
//
// 	var dropArea = document.getElementById("drop-area");
//
// 	dropArea.addEventListener("dragover", function(e) {
// 		e.preventDefault();
// 	});
//
// 	dropArea.addEventListener("drop", function(e) {
// 		e.preventDefault();
//
// 		var fd = new FormData();
//
// 		for (var x=0; x<e.dataTransfer.files.length; x++) {
// 			fd.append("file_" + x, e.dataTransfer.files[x]);
// 		}
//
// 		var xhr = new XMLHttpRequest();
// 		xhr.onreadystatechange = function() {
// 			if (xhr.readyState === 4 && xhr.status === 200) {
// 				var o = JSON.parse(xhr.responseText)
// 				console.log(o);
// 			}
// 		};
//
// 		xhr.open("POST", "/api/gallery");
// 		xhr.send(fd);
//
// 	});
//
// });

// var button = document.getElementById("loginbtn");
// button.addEventListener("click", function() {
//   var userid = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   var userData = {
//     "username":userid,
//     "password":password
//   };
//
//   console.log(userData);
//
//   var jsonUserObj = JSON.stringify(userData);
//   console.log(jsonUserObj);
//
//   var xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var o = JSON.parse(xhr.responseText)
//       console.log(o);
//     }
//   };
//
//   xhr.open("POST", "/api/account/authenticate");
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.send(jsonUserObj);
// });
