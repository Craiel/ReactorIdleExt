RID.setModule("base/ConfirmedTimestamp", function() {
    var n = 0
    return {
        getConfirmedTimestamp: function() {
            return n
        },
        load: function(t) {
            t()
        }
    }
}());