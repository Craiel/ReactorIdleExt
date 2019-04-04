RID.setModule("strategies/HeatOutlet", function() {

    var t = RID.getModule("strategies/HeatExchanger");

    var e = function(t) {
        this.tile = t, this.reactor = t.getReactor()
    }
    return e.prototype.acceptInletHeat = function() {}, e
}());