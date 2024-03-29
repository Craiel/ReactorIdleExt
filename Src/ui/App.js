RID.setModule("ui/App", function() {

    var e = RID.getModule("ui/Game");
    var s = RID.getModule("ui/Reactors");
    var i = RID.getModule("ui/Research");
    var a = RID.getModule("ui/Upgrades");
    var r = RID.getModule("ui/Settings");
    var o = RID.getModule("ui/Help");

    var h = "appUi",
        d = function(t) {
            this.main = t, this.game = t.getGame(), this.gameUi = null, this.reactorsUi = null, this.researchUi = null, this.upgradesUi = null, this.settingsUi = new r(t), this.helpUi = new o, this.lastReactorId = null
        }
    return d.prototype.display = function(e) {
        var s = this
        this.container = e, this.container.html(Handlebars.templates.app({})), this.game.getEventManager().addListener(UiEvent.showReactors, h, function() {
            s.displayReactors()
        }), this.game.getEventManager().addListener(UiEvent.showResearchTab, h, function() {
            s.displayResearch()
        }), this.game.getEventManager().addListener(UiEvent.showUpgradesTab, h, function() {
            s.displayUpgrades(s.lastReactorId)
        }), this.game.getEventManager().addListener(UiEvent.selectReactor, h, function(t) {
            t || (t = s.lastReactorId), s.displayGame(t)
        }), this.game.getEventManager().addListener(UiEvent.showSettings, h, function() {
            s.settingsUi.display()
        }), this.game.getEventManager().addListener(UiEvent.showHelp, h, function() {
            s.helpUi.display()
        }), this.displayReactors()
    }, d.prototype.displayReactors = function() {
        this.destroyReactors(), this.destroyGame(), this.destroyResearch(), this.destroyUpgrades(), this.reactorsUi = new s(this.game), this.reactorsUi.display(this.container.find(".appContent"))
    }, d.prototype.destroyReactors = function() {
        this.reactorsUi && (this.reactorsUi.destroy(), this.reactorsUi = null)
    }, d.prototype.displayGame = function(t) {
        this.destroyReactors();
            this.destroyGame();
            this.destroyResearch();
            this.destroyUpgrades();
            this.gameUi = new e(this.game.getReactor(t));
            this.gameUi.display($(".appContent"));
            this.lastReactorId = t
    }, d.prototype.destroyGame = function() {
        this.gameUi && (this.gameUi.destroy(), this.gameUi = null)
    }, d.prototype.displayResearch = function() {
        this.destroyReactors(), this.destroyGame(), this.destroyResearch(), this.destroyUpgrades(), this.researchUi = new i(this.game), this.researchUi.display(this.container.find(".appContent"))
    }, d.prototype.destroyResearch = function() {
        this.researchUi && (this.researchUi.destroy(), this.researchUi = null)
    }, d.prototype.displayUpgrades = function(t) {
        this.destroyReactors(), this.destroyGame(), this.destroyResearch(), this.destroyUpgrades(), this.upgradesUi = new a(this.game.getReactor(t)), this.upgradesUi.display(this.container.find(".appContent"))
    }, d.prototype.destroyUpgrades = function() {
        this.upgradesUi && (this.upgradesUi.destroy(), this.upgradesUi = null)
    }, d.prototype.destroy = function() {
        this.game.getEventManager().removeListenerForType(h), this.container.html(""), this.container = null
    }, d
}());