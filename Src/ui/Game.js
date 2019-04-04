RID.setModule("ui/Game", function() {

    var t = RID.getModule("ui/Reactor");
    var e = RID.getModule("ui/Components");
    var n = RID.getModule("ui/Overview");
    var o = RID.getModule("ui/Info");

    var s = "gameUi",
        r = function(i) {
            this.reactor = i, this.game = i.getGame(), this.reactorUi = null, this.componentsUi = null, this.overviewUi = null, this.infoUi = null
        }
    return r.prototype.display = function(s, r) {
        this.container = s, this.container.html(Handlebars.templates.game({})), this.componentsUi = new e(this.reactor), this.componentsUi.display(this.container.find(".components")), this.infoUi = new o(this.reactor), this.infoUi.display(this.container.find(".info")), this.overviewUi = new n(this.reactor), this.overviewUi.display(this.container.find(".overviewBox")), this.reactorUi = new t(this.reactor), this.reactorUi.display(this.container.find(".reactor"))
    }, r.prototype.destroy = function() {
        this.game.getEventManager().removeListenerForType(s), this.reactorUi && (this.reactorUi.destroy(), this.reactorUi = null), this.overviewUi && (this.overviewUi.destroy(), this.overviewUi = null), this.infoUi && (this.infoUi.destroy(), this.infoUi = null), this.componentsUi && (this.componentsUi.destroy(), this.componentsUi = null), this.container.html(""), this.container = null
    }, r
}());