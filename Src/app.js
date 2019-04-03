var e = RID.getModule("Main");
var a = RID.getModule("base/server/Paypal");
var i = RID.getModule("base/server/Dummy");
var r = RID.getModule("base/ConfirmedTimestamp");
var s = RID.getModule("base/UrlHandler");

r.load(function() {
    var i = new e,
        r = null,
        o = s.identifySite()
    r = new a(i), i.setExternalApi(r), i.init(!0), setTimeout(function() {
        "direct" == o
    }, 1e3)
});