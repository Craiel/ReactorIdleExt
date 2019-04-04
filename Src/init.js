RID = {
    isRunning: false,
    rq: {},
    getModule: function(e) {
        var module = RID.rq[e];
        if(module === undefined){
            console.error("MODULE_NOT_FOUND: " + e);
        }

        return module;
    },
    setModule: function(e, m) {
        RID.rq[e] = m;
        console.info("Loaded Module: " + e);
    }
};

String.prototype.lcFirst = function() {
    return this.charAt(0).toLowerCase() + this.slice(1)
};