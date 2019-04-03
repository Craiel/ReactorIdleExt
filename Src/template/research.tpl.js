(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['research'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.changeGroup : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"researchItem\">\r\n\r\n    <div class=\"buyButton\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">BUY</div>\r\n\r\n    <div class=\"component "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" style=\"float:left;\"></div>\r\n    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showMax : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    &nbsp;&nbsp;&nbsp;&nbsp;\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.priceResearchPoints : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <br/>\r\n\r\n    <div class=\"description\">\r\n        "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<br style=\"clear:left\"/><br/>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <span class=\"bought\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></span>/"
    + alias4(((helper = (helper = helpers.max || (depth0 != null ? depth0.max : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max","hash":{},"data":data}) : helper)))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"priceTitle\">Price:</span><span class=\"money\">"
    + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"priceTitle\">Research:</span><span class=\"research\">"
    + container.escapeExpression(((helper = (helper = helpers.priceResearchPoints || (depth0 != null ? depth0.priceResearchPoints : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"priceResearchPoints","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"researchBackButton\" id=\"backToReactor\">Back to reactor</span>\r\n\r\n<div class=\"researchDescription\">\r\n    You have <b id=\"researchPoints\" class=\"research\"></b> research points. Use them wisely! You have researched <span\r\n        id=\"technologies\"></span> technologies.<br/>\r\n    <span style=\"font-size:0.8em\">Research applies to every area (village, city, metropolis etc).</span>\r\n</div><br/>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.research : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();