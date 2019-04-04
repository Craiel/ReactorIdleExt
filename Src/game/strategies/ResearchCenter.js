RID.setModule("strategies/ResearchCenter", function() {
    var e = function(e) {
        this.tile = e
    }
    return e.getInfoText = function(t, r) {
        return '<span class="description">Adds research points each tick: <b class="research">' + nf(e._getAmount(t, r)) + "</b></span>"
    }, e.prototype.calculate = function(t) {
        t.researchProduction += e._getAmount(this.tile.getReactor(), this.tile.getMeta())
    }, e._getAmount = function(e, t) {
        var r = e.getUpgradeBonuses().components[t.id].researchPointsProductionMultiplayer;
        return t.strategy.researchProduction * r
    }, e
}());