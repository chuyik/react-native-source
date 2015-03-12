__d("BoundingDimensions",["PooledClass"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        this.width = e, this.height = t
    }
    var PooledClass/*a*/ = t("PooledClass"),
        s = PooledClass/*a*/.twoArgumentPooler;
    o.getPooledFromElement = function(e) {
        return o.getPooled(e.offsetWidth, e.offsetHeight)
    }, PooledClass/*a*/.addPoolingTo(o, s), i.exports = o
});