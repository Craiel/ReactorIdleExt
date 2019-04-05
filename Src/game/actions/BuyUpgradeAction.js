RID.setModule("actions/BuyUpgradeAction", function() {
    var Action = function(e, t) {
        this.reactor = e, this.game = e.getGame(), this.upgradeMeta = t
    }
    return Action.prototype.getFirstBuyWarning = function() {
        if (!this.upgradeMeta.firstBuyWarning) return !1
        var e = this.reactor.getUpgrade(this.upgradeMeta.id)
        return e > 0 ? !1 : this.upgradeMeta.firstBuyWarning
    }, Action.prototype.getPrice = function() {
        for (var e = this.upgradeMeta.price, t = 0; t < this.reactor.getUpgrade(this.upgradeMeta.id); t++) e *= this.upgradeMeta.priceIncrease
        return e
    }, Action.prototype.getResearchPointsPrice = function() {
        var e = this.upgradeMeta.priceResearchPoints
        if (!e) return 0
        for (var t = 0; t < this.reactor.getUpgrade(this.upgradeMeta.id); t++) e *= this.upgradeMeta.priceIncrease
        return e
    }, Action.prototype.canBuy = function() {
        return this.game.getMoney() >= this.getPrice() && this.game.getResearchPoints() >= this.getResearchPointsPrice()
    }, Action.prototype.buy = function() {
        this.game.addMoney(-this.getPrice()), this.game.addResearchPoints(-this.getResearchPointsPrice()), this.reactor.setUpgrade(this.upgradeMeta.id, this.reactor.getUpgrade(this.upgradeMeta.id) + 1)
    }, Action
}());