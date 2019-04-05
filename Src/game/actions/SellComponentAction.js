RID.setModule("actions/SellComponentAction", function() {
    var Action = function(t) {
        this.reactor = t.getReactor(), this.tile = t
    }
    return Action.prototype.canSell = function() {
        return this.tile.getMeta() ? !0 : !1
    }, Action.prototype.getSellPrice = function() {
        if (!this.tile.getMeta().refund) return 0
        var t = this.tile.getMeta().price * this.tile.getMeta().refund
        if (e = 1, this.tile.getMeta().maxHeat) var e = 1 - this.tile.getHeat() / this.tile.getMaxHeat()
        return t * e
    }, Action.prototype.sell = function() {
        this.reactor.getGame().addMoney(this.getSellPrice(), !1), this.tile.setComponent(null)
    }, Action
}());