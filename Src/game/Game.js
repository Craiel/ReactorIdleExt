//RID.setModule("config/Meta/Components",
RID.setModule("game/Game", function() {
    var t = RID.getModule("game/Reactor");
    var e = RID.getModule("base/EventManager");

    var n = function(r) {
        this.meta = r, this.money = r.startingMoney, this.totalMoney = 0, this.totalTicks = 0, this.researchPoints = r.startingResearchPoints, this.researches = {}, this.reactors = {}
        for (var n in this.meta.reactors) {
            var r = this.meta.reactors[n]
            this.reactors[r.id] = new t(this, r)
        }
        this.eventManager = new e, this.bonusTicks = 0
    }
    return n.prototype.getEventManager = function() {
        return this.eventManager
    }, n.prototype.getMeta = function() {
        return this.meta
    }, n.prototype.getResearch = function(t) {
        return this.researches[t] ? this.researches[t] : 0
    }, n.prototype.setResearch = function(t, e) {
        this.researches[t] = e
    }, n.prototype.setMoney = function(t, e) {
        0 > t && (t = 0), this.totalTicks >= 1e4 && 1 > t && (t = 1), t > this.money && (e || void 0 == e) && (this.totalMoney += t - this.money), this.money = t, this.eventManager.invokeEvent(GameEvent.moneyChanged, this.money)
    }, n.prototype.addMoney = function(t, e) {
        this.setMoney(this.getMoney() + t, e)
    }, n.prototype.getMoney = function() {
        return this.money
    }, n.prototype.getTotalMoney = function() {
        return this.totalMoney
    }, n.prototype.getTotalTicks = function() {
        return this.totalTicks
    }, n.prototype.setBonusTicks = function(t) {
        this.bonusTicks = t, this.eventManager.invokeEvent(GameEvent.bonusTicksChanged, this.bonusTicks)
    }, n.prototype.addBonusTicks = function(t) {
        this.setBonusTicks(this.getBonusTicks() + t)
    }, n.prototype.removeBonusTicks = function(t) {
        this.setBonusTicks(this.getBonusTicks() - t)
    }, n.prototype.getBonusTicks = function() {
        return this.bonusTicks
    }, n.prototype.setResearchPoints = function(t) {
        this.researchPoints = t, this.eventManager.invokeEvent(GameEvent.researchPointsChanged, this.researchPoints)
    }, n.prototype.addResearchPoints = function(t) {
        this.setResearchPoints(this.getResearchPoints() + t)
    }, n.prototype.getResearchPoints = function() {
        return this.researchPoints
    }, n.prototype.getReactor = function(t) {
        return this.reactors[t]
    }, n.prototype.tick = function() {
        for (var t in this.reactors) this.reactors[t].tick()
        this.totalTicks += 1
    }, n.prototype.getTickInterval = function(t) {
        if (t) return 1
        var e = 1
        return e += this.getResearch("chronometer") ? this.getResearch("chronometer") : 0, Math.round(1e3 / e)
    }, n.prototype.getSaveData = function() {
        var t = []
        t[0] = this.money, t[1] = this.researchPoints, t[2] = this.researches, t[3] = {}
        for (var e in this.reactors) t[3][e] = this.reactors[e].getSaveData()
        return t[4] = (new Date).getTime(), t[5] = this.bonusTicks, t[6] = this.purchases, t[7] = this.totalMoney, t[8] = this.totalTicks, t[9] = this.externalPurchases, t
    }, n.prototype.updateFromSaveData = function(t, e) {
        if (t) {
            this.money = Number(t[0]), this.totalMoney = Number(t[7] ? t[7] : 0), this.totalTicks = Number(t[8] ? t[8] : 0), this.researchPoints = Number(t[1]), this.researches = t[2] ? t[2] : {}
            for (var s in this.reactors) this.reactors[s].updateFromSaveData(t[3][s]);
            this.setBonusTicks(t[5] ? Number(t[5]) : 0);
        }
    }, n
}());