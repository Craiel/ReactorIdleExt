RID.setModule("base/server/Paypal", function() {
    var t = "Paypal",
        e = function(t) {
            this.main = t
        }
    return e.prototype.init = function() {
        logger.info(t, "Init")
    }, e.prototype.isApiLoaded = function() {
        return !0
    }, e.prototype.getItemPriceStr = function(t) {
        return "$" + t.price_usd
    }, e.prototype.purchase = function(t) {
    }, e.prototype.loadPurchases = function(e) {
        i([])
    }, e.prototype.submitStatistic = function(t, e) {
    }, e
}());