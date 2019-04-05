(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reactors'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"reactorSelect "
    + alias4(((helper = (helper = helpers.design || (depth0 != null ? depth0.design : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"design","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"description\">\r\n                "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBought : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <div class=\"productionTitle\">Income</div>\r\n\r\n            <div class=\"textLine money\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">-</div>\r\n            <div class=\"productionTitle\">Research</div>\r\n\r\n            <div class=\"textLine research\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">-</div>\r\n\r\n            <div class=\"button selectButton\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">SELECT</div>\r\n\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <div class=\"productionTitle price\">Price</div>\r\n\r\n            <div class=\"textLine money\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\r\n            <div class=\"button buyButton\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">BUY</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"reactors\">\r\n    <div class=\"textLine\">\r\n        <span class=\"productionTitle\">Money:</span>\r\n        <span class=\"money have\" id=\"money\">0</span>\r\n        <span class=\"money production\" id=\"income\">0</span>\r\n    </div>\r\n\r\n    <div class=\"textLine\">\r\n        <span class=\"productionTitle\">Research:</span>\r\n        <span class=\"research have\" id=\"research\">0</span>\r\n        <span class=\"research production\" id=\"researchProduction\">0</span>\r\n    </div>\r\n    <div class=\"help\">\r\n        Buy more land to create even bigger power empire. Go ahead, buy some!\r\n    </div>\r\n    <div class=\"selectButtons\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.reactors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
})();