__d("BoundingDimensions",["PooledClass"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        this.width = global/*e*/, PooledClass/*this.height*/ = require/*exports/*t*/*/
    }
    var a = require/*exports/*t*/*/("PooledClass"),
        s = a.twoArgumentPooler;
    o.getPooledFromElement = function(global/*e*/) {
        return o.getPooled(global/*e*/.offsetWidth, global/*e*/.offsetHeight)
    }, a.addPoolingTo(o, s), module/*i*/.exports = o
});