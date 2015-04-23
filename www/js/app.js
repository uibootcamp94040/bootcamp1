"use strict";

function Father() {
    console.log("base constructor");
    this.accountBalance = 100;
    this.balance = 0;
}

Account.prototype.deposit = function(amt) {
    console.log("made a deposit");
    this.balance += amt;
}

function Son(accountNumber) {
    Son.prototype._super.call(this, accountNumber);
}

Son.prototype = Object.create(Account.prototype);
Son.prototype.constructor = Son;
Son.prototype._super = Father;
Son.prototype.writeCheck = function() {

};
