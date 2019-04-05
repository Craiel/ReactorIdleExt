RID.setModule("ui/Reactors", function() {

    var e = RID.getModule("actions/BuyReactorAction");

    var a = "worldsArea",
        n = function(t) {
            this.game = t;
            this.lastUpdateMoney = 0;
            this.lastUpdateResearch = 0;
            this.mps = {
                v: 0,
                t: 0
            };
            this.rps = {
                    v: 0,
                    t: 0
                }
        };
    return n.prototype.display = function(n) {
        var i = this
        this.container = n
        var r = []
        for (var o in this.game.getMeta().reactors) {
            var s = this.game.getMeta().reactors[o],
                c = this.game.getReactor(s.id)
            r.push({
                id: s.id,
                name: s.name,
                design: s.design,
                description: s.description,
                price: nf(s.price),
                isBought: c.getIsBought()
            }), this.handleReactor(c)
        }
        this.container.html(Handlebars.templates.reactors({
            reactors: r
        })), this.container.find(".selectButton").click(function(t) {
            var e = $(t.target).attr("data-id")
            i.game.getEventManager().invokeEvent(UiEvent.selectReactor, e)
        }), this.container.find(".buyButton").click(function(t) {
            var a = $(t.target).attr("data-id"),
                n = new e(i.game, i.game.getMeta().reactorsById[a])
            n.canBuy() && (n.buy(), i.game.getEventManager().invokeEvent(UiEvent.selectReactor, a))
        }), this.game.getEventManager().addListener(GameEvent.moneyChanged, a, function() {
            i.update()
        }), this.update()
    }, n.prototype.handleReactor = function(t) {
        t.getEventManager().addListener(ReactorEvent.tickResult, a, function(e) {
            $(".money[data-id=" + t.getMeta().id + "]").html(nfPlus(e.moneyProduction)), $(".research[data-id=" + t.getMeta().id + "]").html(nfPlus(e.researchProduction))
        })
    }, n.prototype.update = function() {
        var currentMoney = this.game.getMoney();
        this.mps.t++;
        this.mps.v += currentMoney - this.lastUpdateMoney;
        this.lastUpdateMoney = currentMoney;
        if(this.mps.t >= 40) {
            this.container.find("#income").html("+" + nf(this.mps.v) + "/s");
            this.mps.v = 0;
            this.mps.t = 0;
        }

        var currentResearch = this.game.getResearchPoints();
        this.rps.t++;
        this.rps.v += currentResearch - this.lastUpdateResearch;
        this.lastUpdateResearch = currentResearch;
        if(this.rps.t >= 40) {
            this.container.find("#researchProduction").html("+" + nf(this.rps.v) + "/s");
            this.rps.v = 0;
            this.rps.t = 0;
        }

        this.container.find("#money").html(nf(this.game.getMoney()));
        this.container.find("#research").html(nf(this.game.getResearchPoints()));
        for (var t in this.game.getMeta().reactors) {
            var a = this.game.getMeta().reactors[t],
                n = this.game.getReactor(a.id)
            if (!n.getIsBought()) {
                var i = $(".buyButton[data-id='" + a.id + "']")
                new e(this.game, a).canBuy() ? i.removeClass("cantBuy").html("BUY") : i.addClass("cantBuy").html("TOO EXPENSIVE")
            }
        }
    }, n.prototype.destroy = function() {
        this.game.getEventManager().removeListenerForType(a), this.container.html(""), this.container = null
    }, n
}());