__d("BoundingDimensions",["PooledClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.width = global/*e*/, this.height = require/*t*/
    }
    var a = require/*t*/("PooledClass"),
        s = a.twoArgumentPooler;
    o.getPooledFromElement = function(global/*e*/) {
        return o.getPooled(global/*e*/.offsetWidth, global/*e*/.offsetHeight)
    }, a.addPoolingTo(o, s), module/*i*/.exports = o
});