RID.setModule("ui/Components", function() {

    var t = RID.getModule("actions/BuyComponentAction");

    var n = "components",
        o = function(e) {
            this.reactor = e, this.game = e.getGame(), this.selectedComponent = null
        }
    return o.prototype.display = function(t) {
        var o = this
        this.container = t
        var a = [],
            i = null
        for (var r in this.game.getMeta().components) {
            var c = this.game.getMeta().components[r],
                s = !c.requiresResearch || this.game.getResearch(c.requiresResearch) > 0,
                m = !this.reactor.getMeta().researchComponentsDisabled || "researchCenter" != c.type
            s && m && a.push({
                id: c.id,
                name: c.name,
                showBreak: i && c.group != i
            }), i = c.group
        }
        this.container.html(Handlebars.templates.components({
            components: a
        })), this.game.getEventManager().addListener(UiEvent.componentSelected, n, function(e) {
            o.game.getEventManager().invokeEvent(UiEvent.componentDeselected), o.selectedComponent = e, o.container.find(".but" + e.id).addClass("componentButtonSelected")
        }), this.game.getEventManager().addListener(UiEvent.componentDeselected, n, function() {
            o.selectedComponent && o.container.find(".but" + o.selectedComponent.id).removeClass("componentButtonSelected"), o.selectedComponent = null
        }), this.reactor.getEventManager().addListener(ReactorEvent.tickResult, n, function() {
            o.container.find(".component").each(function(e, t) {
                var n = $(t).attr("data-id"),
                    a = o.game.getMeta().componentsById[n]
                o.reactor.getGame().getMoney() >= a.price ? $(t).css("opacity", 1) : $(t).css("opacity", .4)
            })
        }), this.container.find(".componentButton").click(function(e) {
            var t = o.game.getMeta().componentsById[$(e.target).attr("data-id")]
            o.game.getEventManager().invokeEvent(UiEvent.componentSelected, t)
        }).mouseover(function(e) {
            var t = o.game.getMeta().componentsById[$(e.target).attr("data-id")]
            o.game.getEventManager().invokeEvent(UiEvent.showInfo, "component", t)
        })
    }, o.prototype.destroy = function() {
        this.game.getEventManager().removeListenerForType(n), this.reactor.getEventManager().removeListenerForType(n), this.container.html(""), this.container = null
    }, o
}());