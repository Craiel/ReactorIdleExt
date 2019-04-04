RID.setModule("actions/SellPowerManuallyAction", function() {
    var t = function(t) {
        this.reactor = t
    }
    return t.prototype.canSell = function() {
        return this.reactor.getPower() > 0
    }, t.prototype.sell = function() {
        var t = this.reactor.getPower();
        this.reactor.setPower(0);
        this.reactor.getGame().addMoney(t);
    }, t
}());