"use strict";

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
