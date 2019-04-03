(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['confirmBox'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"confirmBoxBg "
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + "\" id=\"confirmBoxBg"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n<div class=\"confirmBox\" id=\"confirmBox"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <span class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><br/>\r\n    <br/>\r\n    <span class=\"message\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</span><br/>\r\n    <br/>\r\n\r\n    <div class=\"cancelButton\">"
    + alias4(((helper = (helper = helpers.cancelTitle || (depth0 != null ? depth0.cancelTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelTitle","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"okButton\">"
    + alias4(((helper = (helper = helpers.okTitle || (depth0 != null ? depth0.okTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"okTitle","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});
})();