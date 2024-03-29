RID.setModule("game/Reactor", function() {

    var t = RID.getModule("game/Tile");
    var e = RID.getModule("calculators/Calculator");
    var i = RID.getModule("base/EventManager");

    var o = function(o, s) {
        this.game = o, this.meta = s, this.calculator = new e(this), this.eventManager = new i, this.isBought = s.isBought ? !0 : !1, this.allowAutoRebuild = !0, this.power = 0, this.upgrades = {}, this.tiles = []
        for (var r = {
            " ": "grass",
            s: "sand",
            w: "water",
            ".": "mountain"
        }, n = 0; n < this.meta.height; n++)
            for (var a = 0; a < this.meta.width; a++) {
                var u = this.meta.layout[n * this.meta.width + a]
                this.tiles[n * this.meta.width + a] = new t(a, n, r[u], this)
            }
        this.upgradeBonuses = {}, this.tileBonuses = {
            maxPowerBonus: 0
        }
    }
    return o.prototype.getTilesAs2DimArray = function() {
        for (var t = [], e = 0; e < this.meta.height; e++) {
            t[e] = []
            for (var i = 0; i < this.meta.width; i++) t[e][i] = this.getTile(i, e)
        }
        return t
    }, o.prototype.getEventManager = function() {
        return this.eventManager
    }, o.prototype.getMeta = function() {
        return this.meta
    }, o.prototype.getGame = function() {
        return this.game
    }, o.prototype.getUpgrades = function() {
        return this.upgrades
    }, o.prototype.getUpgrade = function(t) {
        return this.upgrades[t] ? this.upgrades[t] : 0
    }, o.prototype.setUpgrade = function(t, e) {
        this.upgrades[t] = e
    }, o.prototype.setPower = function(t) {
        this.power = t, this.getEventManager().invokeEvent(ReactorEvent.powerChanged, this.power)
    }, o.prototype.addPower = function(t) {
        this.setPower(this.getPower() + t)
    }, o.prototype.getPower = function() {
        return this.power
    }, o.prototype.getMaxPower = function() {
        return this.meta.maxPower + this.tileBonuses.maxPowerBonus
    }, o.prototype.setTileBonuses = function(t) {
        this.tileBonuses = t
    }, o.prototype.setUpgradeBonuses = function(t) {
        this.upgradeBonuses = t
    }, o.prototype.getUpgradeBonuses = function(t) {
        return this.upgradeBonuses
    }, o.prototype.setIsBought = function(t) {
        this.isBought = t
    }, o.prototype.getIsBought = function() {
        return this.isBought
    }, o.prototype.setAllowAutoRebuild = function(t) {
        this.allowAutoRebuild = t, this.eventManager.invokeEvent(ReactorEvent.allowAutoRebuildChanged, t)
    }, o.prototype.getAllowAutoRebuild = function() {
        return this.allowAutoRebuild
    }, o.prototype.getTiles = function() {
        return this.tiles
    }, o.prototype.getTile = function(t, e) {
        return 0 > t || t >= this.meta.width || 0 > e || e >= this.meta.height ? null : this.tiles[e * this.meta.width + t]
    }, o.prototype.tick = function() {
        this.calculator.tick()
    }, o.prototype.getSaveData = function() {
        var t = []
        t[0] = this.power, t[1] = this.allowAutoRebuild, t[2] = this.isBought, t[3] = this.upgrades, t[4] = []
        for (var e in this.tiles) t[4][e] = this.tiles[e] ? this.tiles[e].getSaveData() : null
        return t
    }, o.prototype.updateFromSaveData = function(t) {
        if (!t) return void(this.isBought = !1)
        this.power = t[0], this.allowAutoRebuild = !!t[1], this.isBought = !!t[2], this.upgrades = t[3] ? t[3] : {}
        for (var e in this.tiles) this.tiles[e] && t[4][e] && this.tiles[e].updateFromSaveData(t[4][e])
    }, o
}());