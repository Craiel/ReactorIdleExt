RID.setModule("actions/SellPowerManuallyAction", function() {
    var Action = function(t) {
        this.reactor = t
    }
    return Action.prototype.canSell = function() {
        return this.reactor.getPower() > 0
    }, Action.prototype.sell = function() {
        var t = this.reactor.getPower();
        this.reactor.setPower(0);
        this.reactor.getGame().addMoney(t);
    }, Action
}());