(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['purchases'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        <tr>\r\n            <td>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td style=\"font-size:0.8em\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_bought : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\r\n            <td>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n            <td>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_bought : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "Bought";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.price_str || (depth0 != null ? depth0.price_str : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price_str","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return "                Bought\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <a href=\"javascript:void(0);\" data-purchaseId=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"buyButton\">Get it!</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"purchasesBg\"></div>\r\n<div id=\"purchases\">\r\n    <a href=\"javascript:void(0);\" id=\"closePurchasesButton\" style=\"float:right\">Close</a>\r\n\r\n    <b>Extra</b><br/><br/>\r\n\r\n    <img src=\"./img/design/cool.jpg\" style=\"float:left; margin: 5px;\"/>\r\n    I really like making games and have been building them from my free time for a very long time. (Check my games)<br/>\r\n\r\n    But as game making is very time consuming (I have two young children and a full time job at a startup. So if you can\r\n    relate, imagine that :p),\r\n    I highly appreciate any support - would it be ideas, comments, criticism or monetary!<br/>\r\n\r\n    With this game I have good ideas on what features to add and if you like this game, I kindly ask you to show your\r\n    support by making a\r\n    purchase. I don't expect these games to pay a salary, but to cover at least some of the time I put into making them.\r\n    :)<br/>\r\n    I really don't like monetizing strategies games use nowadays - pay for every freaking move, so most certainly I will\r\n    not follow them.<br/>\r\n    <br/>\r\n    <table width=\"100%\" class=\"purchaseTable\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.purchases : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\r\n    <br/>\r\n    <span style=\"font-size:0.9em\">* Bonus ticks allow the game to be run really really fast.</span><br/>\r\n    <span style=\"font-size:0.9em; color:gray\">* If you have problems with purchases, write to reactoridle@inditel.ee. Please also attach your save game data.</span>\r\n</div>";
},"useData":true});
})();