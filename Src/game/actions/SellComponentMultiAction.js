RID.setModule("actions/SellComponentMultiAction", function(t) {

    var t = RID.getModule("actions/SellComponentAction");

    var Action = function(t) {
        this.tile = t, this.reactor = t.getReactor()
    }
    return Action.prototype._sellMany = function() {
        var t = this.reactor.getTiles(),
            e = this.tile.getMeta().id
        for (var i in t) t[i] && t[i].getMeta() && t[i].getMeta().id == e && this._sellOne(t[i])
    }, Action.prototype._sellOne = function(e) {
        var i = new t(e)
        i.canSell() && i.sell()
    }, Action.prototype.sell = function(t) {
        this.tile && this.tile.getMeta() && (t ? this._sellMany() : this._sellOne(this.tile))
    }, Action
}());