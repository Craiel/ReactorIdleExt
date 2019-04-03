define(["game/Reactor", "base/EventManager", "game/PurchaseManager", "base/ConfirmedTimestamp"], function(t, e, s, r) {
    var n = function(r) {
        this.meta = r, this.money = r.startingMoney, this.totalMoney = 0, this.totalTicks = 0, this.researchPoints = r.startingResearchPoints, this.researches = {}, this.externalPurchases = {}, this.purchases = {}, this.reactors = {}
        for (var n in this.meta.reactors) {
            var r = this.meta.reactors[n]
            this.reactors[r.id] = new t(this, r)
        }
        this.eventManager = new e, this.purchaseManager = new s(this), this.bonusTicks = 0
    }
    return n.prototype.getEventManager = function() {
        return this.eventManager
    }, n.prototype.getPurchaseManager = function() {
        return this.purchaseManager
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
    }, n.prototype.addPurchase = function(t) {
        this.purchases[t] || (this.purchases[t] = 0), this.purchases[t] += 1, this.eventManager.invokeEvent(GameEvent.purchasesChanged, t)
    }, n.prototype.removePurchase = function(t) {
        this.purchases[t] || (this.purchases[t] = 1), this.purchases[t] -= 1, this.eventManager.invokeEvent(GameEvent.purchasesChanged, t)
    }, n.prototype.getPurchase = function(t) {
        return this.purchases[t] ? Number(this.purchases[t]) : 0
    }, n.prototype.getPurchases = function() {
        return this.purchases
    }, n.prototype.setExternalPurchase = function(t, e) {
        this.externalPurchases[t] = e
    }, n.prototype.removeExternalPurchase = function(t) {
        delete this.externalPurchases[t]
        var e = {}
        for (var s in this.externalPurchases) s != t && (e[s] = this.externalPurchases[s])
        this.externalPurchases = e
    }, n.prototype.getExternalPurchases = function() {
        return this.externalPurchases
    }, n.prototype.getExternalPurchase = function(t) {
        return this.externalPurchases[t]
    }, n.prototype.getPurchaseInfo = function(t) {
        return {
            meta: this.meta.purchasesById[t],
            amount: this.getPurchase(t)
        }
    }, n.prototype.tick = function() {
        for (var t in this.reactors) this.reactors[t].tick()
        this.totalTicks += 1
    }, n.prototype.getTickInterval = function(t) {
        if (t) return 1
        var e = 1
        return e += this.getResearch("chronometer") ? this.getResearch("chronometer") : 0, e += this.getPurchaseInfo("extraticks").amount ? this.getPurchaseInfo("extraticks").meta.bonusTicks : 0, Math.round(1e3 / e)
    }, n.prototype.getSaveData = function() {
        var t = []
        t[0] = this.money, t[1] = this.researchPoints, t[2] = this.researches, t[3] = {}
        for (var e in this.reactors) t[3][e] = this.reactors[e].getSaveData()
        return t[4] = (new Date).getTime(), t[5] = this.bonusTicks, t[6] = this.purchases, t[7] = this.totalMoney, t[8] = this.totalTicks, t[9] = this.externalPurchases, t
    }, n.prototype.updateFromSaveData = function(t, e) {
        if (t) {
            this.money = Number(t[0]), this.totalMoney = Number(t[7] ? t[7] : 0), this.totalTicks = Number(t[8] ? t[8] : 0), this.researchPoints = Number(t[1]), this.researches = t[2] ? t[2] : {}
            for (var s in this.reactors) this.reactors[s].updateFromSaveData(t[3][s])
            if (this.setBonusTicks(t[5] ? Number(t[5]) : 0), this.purchases = t[6] ? t[6] : {}, this.externalPurchases = t[9] ? t[9] : {}, e && !isNaN(Number(t[4])) && r.getConfirmedTimestamp()) {
                var n = r.getConfirmedTimestamp() - Number(t[4]),
                    i = Math.round(n / (1e3 * this.meta.offlineSlower) * (1e3 / this.getTickInterval(!1))),
                    o = this.meta.maxBonusTicks * (1e3 / this.getTickInterval(!1))
                i > o && (i = o), i < this.meta.minBonusTicks && (i = 0), logger.info("Bonus ticks gained: " + i), this.addBonusTicks(i)
            }
        }
    }, n
})