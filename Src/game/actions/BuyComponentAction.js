RID.setModule("actions/BuyComponentAction", function() {
    var Action = function(t, e) {
        this.tile = t, this.reactor = t.getReactor(), this.componentMeta = e
    }
    return Action.prototype.canBuild = function() {
        if (this.tile.getMeta()) return !1
        if (!this.tile.canBuild()) return !1
        if (!this._waterCheck()) return !1
        var t = this.reactor.getMeta().heatCellsAllowed
        if (t && "Cell" == this.componentMeta.strategy.type) {
            var e = 0
            if (this.reactor.getTiles().map(function(t) {
                t.getMeta() && "Cell" == t.getMeta().strategy.type && e++
            }), e >= t) return !1
        }
        return this.reactor.getMeta().researchComponentsDisabled && "researchCenter" == this.componentMeta.type ? !1 : this.reactor.getGame().getMoney() >= this.componentMeta.price
    }, Action.prototype._waterCheck = function() {
        if (this.componentMeta.onlyNextToWater) {
            var t = this.tile.findOffsetTiles([
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ], function(t) {
                return "water" == t.getTerrain()
            })
            if (0 == t.length) return !1
        }
        return !0
    }, Action.prototype.canRestore = function() {
        return this.tile.getMeta() && this.tile.getMeta().id == this.componentMeta.id && this.tile.getMaxLifetime() > 0 && this._waterCheck() ? this.reactor.getGame().getMoney() >= this.componentMeta.price : !1
    }, Action.prototype.canAutoRestore = function() {
        return this.tile.getReactor().getAllowAutoRebuild() ? this.canRestore() : !1
    }, Action.prototype.build = function() {
        this.reactor.getGame().addMoney(-this.componentMeta.price), this.tile.setComponent(this.componentMeta)
    }, Action
}());