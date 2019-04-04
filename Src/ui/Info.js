RID.setModule("ui/Info", function() {

    var e = RID.getModule("strategies/Factory");
    var n = RID.getModule("game/Tile");
    var a = RID.getModule("actions/SellComponentAction");

    var i = "infoBox",
        o = function(t) {
            this.reactor = t, this.game = t.getGame(), this.lastShowInfoEvent = null
        }
    return o.prototype.display = function(e) {
        this.container = e, this.container.html(Handlebars.templates.info({}))
        var n = this
        this.game.getEventManager().addListener(UiEvent.showInfo, i, function(t, e) {
            n.displayInfo(t, e)
        }), this.game.getEventManager().addListener(UiEvent.hideInfo, i, function() {
            n.container.find(".infoText").html("")
        }), this.reactor.getEventManager().addListener(ReactorEvent.allowAutoRebuildChanged, i, function(t) {
            $("#autoRebuildButton").html("Auto rebuild: " + (t ? '<span class="on">ON</span>' : '<span class="off">OFF</span>'))
        }), this.reactor.getEventManager().addListener(ReactorEvent.tickResult, i, function() {
            n.lastShowInfoEvent && n.displayInfo(n.lastShowInfoEvent[0], n.lastShowInfoEvent[1]), n.controlExtrasButton()
        }), $("#reactorsButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showReactors)
        }), $("#researchButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showResearchTab)
        }), $("#upgradesButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showUpgradesTab)
        }), $("#settingsButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showSettings)
        }), $("#purchasesButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showPurchases)
        }), $("#autoRebuildButton").click(function() {
            n.reactor.setAllowAutoRebuild(!n.reactor.getAllowAutoRebuild())
        }), $("#helpButton").click(function() {
            n.game.getEventManager().invokeEvent(UiEvent.showHelp)
        }), n.game.getResearch("windTurbineAutoRebuild") || $("#autoRebuildButton").hide(), n.reactor.setAllowAutoRebuild(n.reactor.getAllowAutoRebuild()), this.controlExtrasButton(), this.setupSpeedControls()
    }, o.prototype.controlExtrasButton = function() {
        this.game.getResearch("solarCell") ? $("#purchasesButton").show() : $("#purchasesButton").hide()
    }, o.prototype.displayInfo = function(t, e) {
        if (this.container) {
            this.lastShowInfoEvent = null
            var n = ""
            "component" == t ? n = this.getComponentMetaHtml(e) : "tile" == t ? (this.lastShowInfoEvent = [t, e], n = this.getTileInfoHtml(e)) : n = "text" == t ? e : "Unknown type " + t, this.container.find(".infoText").html(n)
        }
    }, o.prototype.getComponentMetaHtml = function(t) {
        var n = "<b>" + t.name + "</b> <span class='description'> - " + t.description + "</span><br />"
        return t.price && (n += "<span class='productionTitle'>Price: </span><b class='money'>" + nf(t.price) + "</b><br />"), t.lifetime && (n += "<span class='productionTitle'>Ticks: </span><b class='ticks'>" + nf(t.lifetime * this.reactor.getUpgradeBonuses().components[t.id].lifetimeMultiplayer) + "</b><br />"), t.maxHeat && (n += "<span class='productionTitle'>Max heat: </span><b class='maxHeat'>" + nf(t.maxHeat * this.reactor.getUpgradeBonuses().components[t.id].maxHeatMultiplayer) + "</b><br />"), t.maxWater && this.game.getResearch("waterPump") && (n += "<span class='productionTitle'>Max water: </span><b class='maxWater'>" + nf(t.maxWater * this.reactor.getUpgradeBonuses().components[t.id].maxWaterMultiplayer) + "</b><br />"), n += e.getInfoText(this.reactor, t) + "<br />"
    }, o.prototype.getTileInfoHtml = function(t) {
        if (!t.getMeta()) return ""
        var n = "<b>" + t.getMeta().name + "</b> - " + t.getMeta().description + "<br />"
        t.getMeta().maxHeat > 0 && (n += "<span class='productionTitle'>Heat: </span><b class='heat'>" + nf(t.getHeat()) + " / " + nf(t.getMaxHeat()) + "</b><br />"), t.getMeta().maxWater > 0 && this.game.getResearch("waterPump") && (n += "<span class='productionTitle'>Water: </span><b class='water'>" + nf(t.getWater()) + " / " + nf(t.getMaxWater()) + "</b><br />"), t.getMeta().lifetime > 0 && (n += "<span class='productionTitle'>Ticks: </span><b>" + nf(t.getLifetime()) + " / " + nf(t.getMaxLifetime()) + "</b><br />"), n += t.getStrategy() && t.getStrategy().getInfoText ? t.getStrategy().getInfoText() + "<br />" : e.getInfoText(this.reactor, t.getMeta()) + "<br />"
        var i = new a(t)
        return n += "<span class='productionTitle'>Sell price: </span><b class='money'>" + nf(i.getSellPrice()) + "</b><br />"
    }, o.prototype.setupSpeedControls = function() {
        var t = this,
            e = $("#playButton"),
            n = $("#stopButton")
        e.click(function() {
            t.game.getEventManager().invokeEvent(UiEvent.playTime), e.hide(), n.show()
        }).hide(), n.click(function() {
            t.game.getEventManager().invokeEvent(UiEvent.pauseTime), e.show(), n.hide()
        })
        var a = $("#playFastButton"),
            o = $("#playNormalButton"),
            s = $("#bonusTicks"),
            r = !1,
            c = function() {
                var e = t.game.getBonusTicks()
                e > 0 ? (s.show().find("span").html(nf(e)), r ? (o.show(), a.hide()) : (o.hide(), a.show())) : (s.hide(), o.hide(), a.hide())
            }
        c(), this.game.getEventManager().addListener(GameEvent.bonusTicksChanged, i, function(t) {
            c()
        }), this.game.getEventManager().addListener(UiEvent.playFastTriggered, i, function() {
            r = !0, c()
        }), this.game.getEventManager().addListener(UiEvent.playNormalTriggered, i, function() {
            r = !1, c()
        }), a.click(function() {
            t.game.getEventManager().invokeEvent(UiEvent.playNormalTime), t.game.getEventManager().invokeEvent(UiEvent.playFastTime)
        }), o.click(function() {
            t.game.getEventManager().invokeEvent(UiEvent.playNormalTime)
        })
    }, o.prototype.destroy = function() {
        this.game.getEventManager().removeListenerForType(i), this.container.html(""), this.container = null
    }, o
}());