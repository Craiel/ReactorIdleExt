RID.setModule("ui/Help", function() {
    var t = function(i) {
        this.main = i, this.isVisible = !1
    }
    return t.prototype.display = function() {
        if (!this.isVisible) {
            $("body").append(Handlebars.templates.help({}))
            var t = this
            this.isVisible = !0
            var e = $("#help")
            e.css("left", ($("html").width() - e.width()) / 2), e.find(".closeButton").click(function() {
                t.destroy()
            })
        }
    }, t.prototype.destroy = function() {
        this.isVisible = !1, $("#help").remove(), $("#helpBg").remove()
    }, t
}());