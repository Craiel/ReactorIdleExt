RID.setModule("actions/BuyReactorAction", function() {
    var Action = function(t, e) {
        this.game = t, this.reactorMeta = e
    }
    return Action.prototype.canBuy = function() {
        return this.game.getMoney() >= this.reactorMeta.price
    }, Action.prototype.buy = function() {
        this.game.addMoney(-this.reactorMeta.price), this.game.getReactor(this.reactorMeta.id).setIsBought(!0)
    }, Action
}());