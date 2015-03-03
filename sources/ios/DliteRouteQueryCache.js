__d("DliteRouteQueryCache",["DliteRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*t*/("DliteRoute"), {
        get: function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = require/*t*/.getCacheKey();
            if (global/*e*/.__queryCache) {
                var requireLazy/*r*/ = global/*e*/.__queryCache[requireDynamic/*n*/];
                if (requireLazy/*r*/) return requireLazy/*r*/
            }
            return null
        },
        set: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = require/*t*/.getCacheKey();
            global/*e*/.__queryCache || (global/*e*/.__queryCache = {}), global/*e*/.__queryCache[requireLazy/*r*/] = requireDynamic/*n*/
        }
    });
    module/*i*/.exports = o
});