define([], function() {
    var e = function(e) {
        this.tile = e
    }
    return e.getInfoText = function(t, r) {
        return '<span class="description">Adds research points each tick: <b class="research">' + nf(e._getAmount(t, r)) + "</b></span>"
    }, e.prototype.calculate = function(t) {
        t.researchProduction += e._getAmount(this.tile.getReactor(), this.tile.getMeta())
    }, e._getAmount = function(e, t) {
        var r = e.getUpgradeBonuses().components[t.id].researchPointsProductionMultiplayer,
            n = e.getGame().getPurchaseInfo("researchproduction"),
            o = n.amount ? n.meta.multiplayer : 1,
            a = e.getGame().getPurchaseInfo("researchproduction2"),
            c = a.amount ? a.meta.multiplayer : 1
        return t.strategy.researchProduction * r * o * c
    }, e
})