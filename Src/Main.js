RID.rq["Main"] = function() {
    var t = RID.getModule("config/Meta");
    var e = RID.getModule("game/Game");
    var a = RID.getModule("ui/App");
    var n = RID.getModule("base/SaveHandler");

    var i = "Main",
        r = function() {
            this.game = null, this.saveHandler = null, this.ui = null, this.interval = null, this.submitScoreInterval = null, this.submitStatInterval = null, this.playFast = !1, this.externalApi = null
        }
    return r.prototype.setExternalApi = function(t) {
        this.externalApi = t
    }, r.prototype.getExternalApi = function() {
        return this.externalApi
    }, r.prototype.getSaveHandler = function() {
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
        }), this.game.getEventManager().addListener(GameEvent.purchasesChanged, i, function() {
            l.updateInterval()
        }), this.game.getEventManager().addListener(UiEvent.playFastTime, i, function() {
            0 == l.playFast && l.game.getBonusTicks() > 0 && (l.playFast = !0, l.game.getEventManager().invokeEvent(UiEvent.playFastTriggered), l.updateInterval())
        }), this.game.getEventManager().addListener(UiEvent.playNormalTime, i, function() {
            1 == l.playFast && (l.playFast = !1, l.game.getEventManager().invokeEvent(UiEvent.playNormalTriggered), l.updateInterval())
        }), this.updateInterval(), this.getExternalApi().init(), this.submitScoreInterval = setInterval(function() {
            l.externalApi.submitStatistic("totalMoney", Math.round(100 * Math.log(l.game.getTotalMoney()))), l.externalApi.submitStatistic("totalTicks", l.game.getTotalTicks())
            var t = Math.round(1e6 * Math.log(l.game.getTotalMoney()) / l.game.getTotalTicks())
            l.externalApi.submitStatistic("effective", t), console.log("Total money:" + l.game.getTotalMoney() + " Total ticks: " + l.game.getTotalTicks() + " Effective:" + t)
        }, 6e4), this.submitStatInterval = setInterval(function() {
            ga("send", "pageview", "/")
        }, 9e5)
    }, r.prototype.updateInterval = function() {
        this.interval && clearInterval(this.interval)
        var t = this.game.getTickInterval(this.playFast),
            e = this
        this.interval = setInterval(function() {
            e.game.tick(), t != e.game.getTickInterval(e.playFast) && e.updateInterval(), 1 == e.playFast && (e.game.addBonusTicks(-1), e.game.getBonusTicks() <= 0 && (e.playFast = !1, e.game.getEventManager().invokeEvent(UiEvent.playNormalTriggered), e.updateInterval()))
        }, t)
    }, r.prototype.destroy = function() {
        this.saveHandler.stopAutoSave(), clearInterval(this.submitScoreInterval), this.submitScoreInterval = null, clearInterval(this.submitStatInterval), this.submitStatInterval = null
    }, r.prototype.getGame = function() {
        return this.game
    }, r.prototype.getSaveHandler = function() {
        return this.saveHandler
    }, r.prototype.getUi = function() {
        return this.ui
    }, r
}();