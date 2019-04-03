(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['settings'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    This is your user hash. If you made any purchases, copy this to a safe place. All your purchases are bind to this\r\n    hash. Keep it safe, as if it gets public purchases will be automatically disabled<br/>\r\n    In case you switched computer or browser, copy old user hash here and update it. <br/>\r\n    <input type=\"text\" name=\"userHash\" id=\"userHash\" class=\"userHash\"/><br/>\r\n    <a href=\"javascript:void(0);\" id=\"userHashButton\">Update user hash (Will refresh the game!)</a><br/>\r\n    <br/>\r\n    <br/>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"settingsBg\"></div>\r\n<div id=\"settings\" style=\"width:600px\">\r\n    <a href=\"javascript:void(0);\" id=\"closeButton\" style=\"float:right; display:block;\">Close</a><br/>\r\n    <br/>\r\n    This is your game save data. Copy it and store at some safe place :)<br/>\r\n    <textArea type=\"textArea\" name=\"saveData\" id=\"saveData\" class=\"saveData\"></textArea><br/>\r\n    If you want to load a game, replace save game data and click\r\n    <a href=\"javascript:void(0);\" id=\"loadButton\">LOAD</a><br/>\r\n    <br/>\r\n    <br/>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasPaypal : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div style=\"text-align:center\">\r\n        <a href=\"javascript:void(0);\" id=\"resetButton\" style=\"color:red;\">Hard reset</a>\r\n    </div>\r\n    <br/>\r\n    <br/>\r\n    <center>VER: 1.11</center>\r\n</div>";
},"useData":true});
})();