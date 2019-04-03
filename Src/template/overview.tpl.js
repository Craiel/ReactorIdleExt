(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['overview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"textLine\">\r\n    <span class=\"productionTitle\">Money:</span>\r\n    <span class=\"money have\" id=\"money\">0</span>\r\n    <span class=\"money production\" id=\"income\">0</span>\r\n</div>\r\n\r\n<div class=\"textLine\">\r\n    <span class=\"productionTitle\">Research:</span>\r\n    <span class=\"research have\" id=\"research\">0</span>\r\n    <span class=\"research production\" id=\"researchProduction\">0</span>\r\n</div>\r\n\r\n<div class=\"textLine\">\r\n    <span class=\"productionTitle\">Power:</span>\r\n    <span class=\"power\" id=\"power\">0</span>\r\n    <span class=\"power\" id=\"powerProduction\">0</span> <br/>\r\n</div>\r\n\r\n<div class=\"textLine\">\r\n    <span class=\"productionTitle\">Max power:</span>\r\n    <span class=\"power\" id=\"maxPower\">0</span>\r\n    <span class=\"productionTitle\">Storage:</span>\r\n    <span class=\"power\" id=\"powerStored\">0</span>\r\n</div>\r\n\r\n<div class=\"powerBarArea\">\r\n    <div class=\"bar\" id=\"powerBar\"></div>\r\n</div>\r\n\r\n<a href=\"javascript:void(0);\" id=\"sellPowerButton\" class=\"sellPowerButton\">Sell all power</a>\r\n";
},"useData":true});
})();