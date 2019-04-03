define([], function() {
    var i = function(t, i, n) {
        this.id = String(Math.round(1e13 * Math.random())), this.title = t, this.message = i, this.okButtonTitle = "Ok", this.cancelButtonTitle = "Cancel", this.okCallback = n, this.style = "warning"
    }
    return i.STYLE_WARNING = "warning", i.prototype.setOkButtonTitle = function(t) {
        this.okButtonTitle = t
    }, i.prototype.setCancelButtonTitle = function(t) {
        this.cancelButtonTitle = t
    }, i.prototype.setStyle = function(t) {
        this.style = t
    }, i.prototype.display = function() {
        var i = this,
            n = $(window),
            o = ($("html"), $("body"))
        o.append(Handlebars.templates.confirmBox({
            id: this.id,
            title: this.title,
            message: this.message,
            okTitle: this.okButtonTitle,
            cancelTitle: this.cancelButtonTitle,
            style: this.style
        }))
        var e = (o.find("#confirmBoxBg" + this.id), o.find("#confirmBox" + this.id))
        e.find(".cancelButton").click(function() {
            i.destroy()
        }), e.find(".okButton").click(function() {
            i.destroy(), i.okCallback()
        }), e.css("top", Math.round((n.height() - e.height()) / 2)), e.css("left", Math.round((n.width() - e.width()) / 2))
    }, i.prototype.destroy = function() {
        var t = $("body")
        t.find("#confirmBoxBg" + this.id).remove(), t.find("#confirmBox" + this.id).remove()
    }, i
})