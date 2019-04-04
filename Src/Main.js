RID.setModule("Main", function() {
    var t = RID.getModule("config/Meta");
    var e = RID.getModule("game/Game");
    var a = RID.getModule("ui/App");
    var n = RID.getModule("base/SaveHandler");

    var i = "Main",
        r = function() {
            this.game = null, this.saveHandler = null, this.ui = null, this.interval = null, this.submitScoreInterval = null, this.submitStatInterval = null, this.playFast = !1
        }
    return r.prototype.getSaveHandler = function() {
        return this.saveHandler
    }, r.prototype.init = function() {
        this.game = new e(t), this.saveHandler = new n(this), this.saveHandler.startAutoSave()
        var r = this.saveHandler.loadFromStorage()
        r && this.saveHandler.updateFromSaveData(r, !0), this.ui = new a(this), this.ui.display($("#gameArea"))
        var l = this
        this.game.getEventManager().addListener(UiEvent.pauseTime, i, function() {
            l.interval && (clearInterval(l.interval), l.interval = null)
        }), this.game.getEventManager().addListener(UiEvent.playTime, i, function() {
            l.updateInterval()
        }), this.game.getEventManager().addListener(UiEvent.playFastTime, i, function() {
            0 == l.playFast && l.game.getBonusTicks() > 0 && (l.playFast = !0, l.game.getEventManager().invokeEvent(UiEvent.playFastTriggered), l.updateInterval())
        }), this.game.getEventManager().addListener(UiEvent.playNormalTime, i, function() {
            1 == l.playFast && (l.playFast = !1, l.game.getEventManager().invokeEvent(UiEvent.playNormalTriggered), l.updateInterval())
        }), this.updateInterval()
    }, r.prototype.updateInterval = function() {
        this.interval && clearInterval(this.interval)
        var t = this.game.getTickInterval(this.playFast),
            e = this
        this.interval = setInterval(function() {
            e.game.tick(), t != e.game.getTickInterval(e.playFast) && e.updateInterval(), 1 == e.playFast && (e.game.addBonusTicks(-1), e.game.getBonusTicks() <= 0 && (e.playFast = !1, e.game.getEventManager().invokeEvent(UiEvent.playNormalTriggered), e.updateInterval()))
        }, t);
        setInterval(function() { e.game.addBonusTicks(1); }, 5000);
    }, r.prototype.destroy = function() {
        this.saveHandler.stopAutoSave(), clearInterval(this.submitStatInterval), this.submitStatInterval = null
    }, r.prototype.getGame = function() {
        return this.game
    }, r.prototype.getSaveHandler = function() {
        return this.saveHandler
    }, r.prototype.getUi = function() {
        return this.ui
    }, r
}());