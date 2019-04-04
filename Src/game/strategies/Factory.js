RID.setModule("strategies/Factory", function() {

        var e = RID.getModule("strategies/Cell");
        var t = RID.getModule("strategies/PowerToMoneyConverter");
        var r = RID.getModule("strategies/HeatToPowerConverter");
        var a = RID.getModule("strategies/MaxPowerIncrease");

        var n = RID.getModule("strategies/HeatAbsorber");
        var o = RID.getModule("strategies/CellHeatProductionAmplifier");
        var s = RID.getModule("strategies/HeatExchanger");
        var g = RID.getModule("strategies/ResearchCenter");

        var i = RID.getModule("strategies/BulkHeatToMoneyConverter");
        var l = RID.getModule("strategies/Bank");
        var u = RID.getModule("strategies/WaterPump");
        var c = RID.getModule("strategies/WaterExchanger");

        var H = RID.getModule("strategies/HeatInlet");
        var C = RID.getModule("strategies/HeatOutlet");
        var f = RID.getModule("strategies/HeatBooster");
        var y = RID.getModule("strategies/Circulator");


    var v = {
        Cell: e,
        PowerToMoneyConverter: t,
        HeatToPowerConverter: r,
        MaxPowerIncrease: a,
        HeatAbsorber: n,
        CellHeatProductionAmplifier: o,
        HeatExchanger: s,
        ResearchCenter: g,
        BulkHeatToMoneyConverter: i,
        Bank: l,
        WaterPump: u,
        WaterExchanger: c,
        HeatInlet: H,
        HeatOutlet: C,
        HeatBooster: f,
        Circulator: y
    }
    return {
        get: function(e) {
            if (e.getMeta() && e.getMeta().strategy) {
                var t = e.getMeta().strategy.type
                if (v[t]) return new v[t](e)
                console.error("Unknown strategy: " + t)
            }
            return null
        },
        getInfoText: function(e, t) {
            if (!t || !t.strategy) return ""
            var r = t.strategy.type
            return v[r] ? v[r].getInfoText ? v[r].getInfoText(e, t) : "" : void console.error("Unknown strategy: " + r)
        }
    }
}());