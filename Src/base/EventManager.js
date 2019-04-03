define([], function() {
    var e = function() {
        this.events = {}
    }
    return e.prototype.addListener = function(e, t, n) {
        this.events[e] || (this.events[e] = {}), this.events[e][t] = n
    }, e.prototype.removeListener = function(e, t) {
        this.events[e] && this.events[e][t] && delete this.events[e][t]
    }, e.prototype.removeListenerForType = function(e) {
        for (var t in this.events)
            for (var n in this.events[t]) n == e && delete this.events[t][n]
    }, e.prototype.invokeEvent = function(e, t, n, s, i, v) {
        if (this.events[e])
            for (var o in this.events[e]) this.events[e][o] && this.events[e][o](t, n, s, i, v)
    }, e
})