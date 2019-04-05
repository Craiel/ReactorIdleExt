RID.setModule("base/EventManager", function() {

    let EventManager = function() {
        this.events = {}
    };

    EventManager.prototype.addListener = function(e, t, n) {
        this.events[e] || (this.events[e] = {}), this.events[e][t] = n
    };

    EventManager.prototype.removeListener = function(e, t) {
        this.events[e] && this.events[e][t] && delete this.events[e][t]
    };

    EventManager.prototype.removeListenerForType = function(e) {
        for (var t in this.events)
            for (var n in this.events[t]) n == e && delete this.events[t][n]
    };

    EventManager.prototype.invokeEvent = function(e, t, n, s, i, v) {
        if (this.events[e])
            for (var o in this.events[e]) this.events[e][o] && this.events[e][o](t, n, s, i, v)
    };

    return EventManager;

}());