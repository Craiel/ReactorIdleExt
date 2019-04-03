(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['upgrades'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.changeGroup : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"upgradeItem\">\r\n\r\n    <div class=\"buyButton\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">BUY</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canSell : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"component "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" style=\"float:left;\"></div>\r\n    <div style=\"float:left; width: 290px; white-space: nowrap; overflow:hidden;\">\r\n        "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        <span class=\"priceTitle\">Buy:</span><span class=\"money\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"description\">\r\n        Lvl:<span class=\"bought\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></span>&nbsp;"
    + alias4(((helper = (helper = helpers.bonus || (depth0 != null ? depth0.bonus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bonus","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<br style=\"clear:left\"/><br/>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"sellButton\" data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\">SELL</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"upgradesBackButton\" id=\"backToReactor\">Back to reactor</span>\r\n\r\n<div class=\"upgradeDescription\">\r\n    You have <b id=\"money\" class=\"money\"></b> to spend. Make it count!<br/>\r\n    <span style=\"font-size:0.8em\">Upgrades apply only to selected power plant (island, village, city, metropolis etc). Selling will give 80% of the value.</span>\r\n</div><br/>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.upgrades : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();