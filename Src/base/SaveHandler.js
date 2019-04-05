RID.setModule("base/SaveHandler", function() {

    var e = LZString;

    var SaveHandler = function(e) {
        this.main = e, this.game = e.getGame(), this.saveInterval = null, this.saveVersion = 6, this.saveVariable = "reactorSave", logger.info("SaveHandler", "User hash: " + this.getUserHash())
    }
    return SaveHandler.prototype.startAutoSave = function() {
        var e = this
        this.saveInterval = setInterval(function() {
            e.saveToStorage()
        }, 5e3)
    }, SaveHandler.prototype.stopAutoSave = function() {
        clearInterval(this.saveInterval)
    }, SaveHandler.prototype.getSaveData = function() {
        return e.compressToBase64(JSON.stringify(this.game.getSaveData()))
    }, SaveHandler.prototype.updateFromSaveData = function(t, a) {
        if (!t) return !1
        try {
            return t = JSON.parse(e.decompressFromBase64(t)), this.game.updateFromSaveData(t, a), !0
        } catch (r) {
            console.error(r)
        }
        return !1
    }, SaveHandler.prototype.loadFromStorage = function() {
        for (var e = this.saveVersion; e >= 2; e--)
            if (window.localStorage[this.saveVariable + e]) return window.localStorage[this.saveVariable + e]
        return null
    }, SaveHandler.prototype.getUserHash = function() {
        var e = window.localStorage.reactorIdleUserHash
        return e || (e = this._generateUserHash(), window.localStorage.reactorIdleUserHash = e), e
    }, SaveHandler.prototype.updateUserHash = function(e) {
        window.localStorage.reactorIdleUserHash = e
    }, SaveHandler.prototype.saveToStorage = function() {
        window.localStorage[this.saveVariable + this.saveVersion] = this.getSaveData(), window.localStorage.reactorIdleUserHash = this.main.getSaveHandler().getUserHash()
    }, SaveHandler.prototype.deleteFromStorage = function() {
        for (var e = this.saveVersion; e >= 0; e--) delete window.localStorage[this.saveVariable + e]
    }, SaveHandler.prototype._generateUserHash = function() {
        for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; 64 > a; a++) e += t.charAt(Math.floor(Math.random() * t.length))
        return e
    }, SaveHandler
}());