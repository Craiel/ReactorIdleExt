define(["actions/BuyComponentAction"], function(t) {
    var e = function(t, e) {
        this.tile = t, this.reactor = t.getReactor(), this.componentMeta = e
    }
    return e.prototype._restoreMany = function() {
        if (this.tile && this.componentMeta) {
            var t = this.reactor.getTiles()
            for (var e in t) t[e] && t[e].getMeta() && t[e].getMeta().id == this.componentMeta.id && t[e].getLifetime() <= 0 && this._buildOrRestoreOne(t[e], !1)
        }
    }, e.prototype._buildOrRestoreOne = function(e, i) {
        if (e && this.componentMeta) {
            var n = new t(e, this.componentMeta);
            (n.canBuild() || n.canRestore() && (!i || this.tile.getMaxLifetime() > 0 && this.tile.getLifetime() <= 0)) && n.build()
        }
    }, e.prototype.build = function(t, e) {
        t ? this._restoreMany() : this._buildOrRestoreOne(this.tile, e)
    }, e
})