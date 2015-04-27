this["templates"] = this["templates"] || {};

this["templates"]["donation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\" id=\"myPanel\"><div class=\"panel-heading\">Donation Form</div><div class=\"panel-body\"><form id=\"myForm\"><div class=\"form-group\"><label for=\"amount\">Amount</label><input type=\"number\" class=\"form-control\" id=\"amount\"></div><div class=\"form-group\"><label for=\"paymentMethod\">Payment Method</label><select class=\"form-control\" id=\"paymentMethod\"><option>Visa</option><option>MasterCard</option><option>American Express</option></select></div><div class=\"form-group\"><label for=\"creditCardNumber\">Credit Card Number</label><input type=\"text\" class=\"form-control\" id=\"creditCardNumber\"></div><div class=\"form-group\"><label for=\"creditCardNumber\">Expiration</label><br><select class=\"form-control expiration\" id=\"expMonth\"><option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select><select class=\"form-control expiration\" id=\"expYear\"><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option></select></div><div class=\"form-group\"><label for=\"cvv\">Security Code</label><input type=\"text\" class=\"form-control\" id=\"cvv\"></div><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" class=\"form-control\" id=\"name\"></div><div class=\"form-group\"><label for=\"address\">Address</label><input type=\"text\" class=\"form-control\" id=\"address\"></div><div class=\"form-group\"><label for=\"city\">City</label><input type=\"text\" class=\"form-control\" id=\"city\"></div><div class=\"form-group\"><label for=\"state\">State</label><input type=\"text\" class=\"form-control\" id=\"state\"></div><div class=\"form-group\"><label for=\"comment\">Comments</label><textarea id=\"comment\" class=\"form-control\" rows=\"3\"></textarea></div><button type=\"button\" id=\"add-donation-item\" class=\"btn btn-primary\">Submit</button></form></div></div>";
},"useData":true});

this["templates"]["donation_notused"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div><div><label>Payment Method:</label>"
    + alias3(((helper = (helper = helpers.paymentMethod || (depth0 != null ? depth0.paymentMethod : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"paymentMethod","hash":{},"data":data}) : helper)))
    + "</div><div><label>Name:</label>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div><label>Credit Card Number:</label>"
    + alias3(((helper = (helper = helpers.creditCardNumber || (depth0 != null ? depth0.creditCardNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNumber","hash":{},"data":data}) : helper)))
    + "</div><div><label>Amount:</label>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</div><div><label>Exp Date:</label>"
    + alias3(((helper = (helper = helpers.expDate || (depth0 != null ? depth0.expDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expDate","hash":{},"data":data}) : helper)))
    + "</div><div><label>Comment:</label>"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"useData":true});

this["templates"]["donations"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.paymentMethod || (depth0 != null ? depth0.paymentMethod : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"paymentMethod","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.creditCardNumber || (depth0 != null ? depth0.creditCardNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNumber","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.expDate || (depth0 != null ? depth0.expDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expDate","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><tr><td>Payment Method</td><td>Name</td><td>Credit Card Number</td><td>Amount</td><td>Exp Date</td><td>Comment</td></tr>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.donations : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});