RID.setModule("base/SaveHandler", function() {

    var e = LZString;

    var t = function(e) {
        this.main = e, this.game = e.getGame(), this.saveInterval = null, this.saveVersion = 6, this.saveVariable = "reactorSave", logger.info("SaveHandler", "User hash: " + this.getUserHash())
    }
    return t.prototype.startAutoSave = function() {
        var e = this
        this.saveInterval = setInterval(function() {
            e.saveToStorage()
        }, 5e3)
    }, t.prototype.stopAutoSave = function() {
        clearInterval(this.saveInterval)
    }, t.prototype.getSaveData = function() {
        return e.compressToBase64(JSON.stringify(this.game.getSaveData()))
    }, t.prototype.updateFromSaveData = function(t, a) {
        if (!t) return !1
        try {
            return t = JSON.parse(e.decompressFromBase64(t)), this.game.updateFromSaveData(t, a), !0
        } catch (r) {
            console.error(r)
        }
        return !1
    }, t.prototype.loadFromStorage = function() {
        for (var e = this.saveVersion; e >= 2; e--)
            if (window.localStorage[this.saveVariable + e]) return window.localStorage[this.saveVariable + e]
        return null
    }, t.prototype.getUserHash = function() {
        var e = window.localStorage.reactorIdleUserHash
        return e || (e = this._generateUserHash(), window.localStorage.reactorIdleUserHash = e), e
    }, t.prototype.updateUserHash = function(e) {
        window.localStorage.reactorIdleUserHash = e
    }, t.prototype.saveToStorage = function() {
        window.localStorage[this.saveVariable + this.saveVersion] = this.getSaveData(), window.localStorage.reactorIdleUserHash = this.main.getSaveHandler().getUserHash()
    }, t.prototype.deleteFromStorage = function() {
        for (var e = this.saveVersion; e >= 0; e--) delete window.localStorage[this.saveVariable + e]
    }, t.prototype._generateUserHash = function() {
        for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; 64 > a; a++) e += t.charAt(Math.floor(Math.random() * t.length))
        return e
    }, t
}());