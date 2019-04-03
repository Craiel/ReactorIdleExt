(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['info'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"menu\">\r\n    <a href=\"javascript:void(0);\" id=\"reactorsButton\">Power plants</a>\r\n    <a href=\"javascript:void(0);\" id=\"researchButton\">Research</a>\r\n    <a href=\"javascript:void(0);\" id=\"upgradesButton\">Upgrades</a>\r\n    <a href=\"javascript:void(0);\" id=\"settingsButton\">Settings</a>\r\n    <a href=\"javascript:void(0);\" id=\"purchasesButton\" style=\"display:none\">Extra</a>\r\n    <a href=\"javascript:void(0);\" id=\"helpButton\">Help</a>\r\n</div>\r\n\r\n<div class=\"infoText\"></div>\r\n\r\n<div class=\"infoButtons\">\r\n\r\n    <a href=\"javascript:void(0);\" id=\"autoRebuildButton\" class=\"autoRebuildButton\">[[Dummy data]]</a><br/>\r\n\r\n    <div class=\"speedControls\">\r\n        <a href=\"javascript:void(0);\" class=\"button stopButton\" id=\"stopButton\">Pause</a>\r\n        <a href=\"javascript:void(0);\" class=\"button playButton\" id=\"playButton\">Play</a>\r\n        <a href=\"javascript:void(0);\" class=\"button playFastButton\" id=\"playFastButton\">Fast &gt;&gt;</a>\r\n        <a href=\"javascript:void(0);\" class=\"button playNormalButton\" id=\"playNormalButton\">Normal</a>\r\n        <span id=\"bonusTicks\" class=\"bonusTicks\">Bonus ticks: <span></span></span>\r\n    </div>\r\n</div>";
},"useData":true});
})();