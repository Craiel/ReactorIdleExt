RID.setModule("game/Tile", function() {

    var t = RID.getModule("strategies/Factory");

    var e = function(t, e, i, r) {
        this.x = t, this.y = e, this.reactor = r, this.terrain = i, this.heat = 0, this.water = 0, this.waterConsumption = 0, this.lifetime = null, this.bonuses = null, this.meta = null, this.strategy = null
    }
    return e.prototype.setComponent = function(e) {
        this.meta = e, this.meta ? this.strategy = t.get(this) : this.strategy = null, this.setHeat(0), this.setWater(0), this.setWaterConsumption(0), this.setLifetime(null), this.meta && this.meta.lifetime && this.setLifetime(this.getMaxLifetime()), this.reactor.getEventManager().invokeEvent(ReactorEvent.tileMetaChanged, this)
    }, e.prototype.getStrategy = function() {
        return this.strategy
    }, e.prototype.setHeat = function(t) {
        this.heat = t
    }, e.prototype.addHeat = function(t) {
        this.setHeat(this.getHeat() + t)
    }, e.prototype.getHeat = function() {
        return this.heat
    }, e.prototype.setWater = function(t) {
        this.water = t
    }, e.prototype.addWater = function(t) {
        this.setWater(this.getWater() + t)
    }, e.prototype.getWater = function() {
        return this.water
    }, e.prototype.getMaxWater = function() {
        var t = this.reactor.getUpgradeBonuses().components ? this.reactor.getUpgradeBonuses().components[this.meta.id].maxWaterMultiplayer : 1,
            e = this.bonuses.maxWaterBonus
        return this.meta.maxWater * t * e
    }, e.prototype.setWaterConsumption = function(t) {
        this.waterConsumption = t
    }, e.prototype.getWaterConsumption = function() {
        return this.waterConsumption
    }, e.prototype.getMaxLifetime = function() {
        if (!this.meta) return null
        var t = this.reactor.getUpgradeBonuses().components ? this.reactor.getUpgradeBonuses().components[this.meta.id].lifetimeMultiplayer : 1
        return this.meta.lifetime * t
    }, e.prototype.setLifetime = function(t) {
        this.lifetime = t
    }, e.prototype.addLifetime = function(t) {
        this.setLifetime(this.getLifetime() + t)
    }, e.prototype.getLifetime = function() {
        return this.lifetime
    }, e.prototype.setBonuses = function(t) {
        this.bonuses = t
    }, e.prototype.getBonuses = function() {
        return this.bonuses
    }, e.prototype.getMaxHeat = function() {
        var t = this.reactor.getUpgradeBonuses().components ? this.reactor.getUpgradeBonuses().components[this.meta.id].maxHeatMultiplayer : 1
        return this.meta.maxHeat * t
    }, e.prototype.getMeta = function() {
        return this.meta
    }, e.prototype.canBuild = function() {
        return "grass" == this.terrain
    }, e.prototype.getX = function() {
        return this.x
    }, e.prototype.getY = function() {
        return this.y
    }, e.prototype.getXY = function() {
        return this.y * this.reactor.getMeta().width + this.x
    }, e.prototype.getTerrain = function() {
        return this.terrain
    }, e.prototype.getOffsetTile = function(t, e) {
        return this.reactor.getTile(this.x + t, this.y + e)
    }, e.prototype.findOffsetTiles = function(t, e) {
        e || (e = function(t) {
            return !0
        })
        var i = []
        for (var r in t) {
            var n = this.getOffsetTile(t[r][0], t[r][1])
            n && e(n) && i.push(n)
        }
        return i
    }, e.prototype.getReactor = function() {
        return this.reactor
    }, e.prototype.getSaveData = function() {
        var t = []
        return t[0] = this.meta ? this.meta.id : null, t[1] = this.heat, t[2] = this.water, t[3] = this.lifetime, t
    }, e.prototype.updateFromSaveData = function(t) {
        t && (t[0] ? this.setComponent(this.reactor.getGame().getMeta().componentsById[t[0]]) : this.setComponent(null), this.heat = t[1], this.water = t[2] ? t[2] : 0, this.lifetime = t[3])
    }, e
}());