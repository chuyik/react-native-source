__d("DliteRouteQueryCache",["DliteRoute"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*exports/*t*/*/("DliteRoute"), {
        get: function(global/*e*/, require/*exports/*t*/*/) {
            var requireDynamic/*n*/ = require/*exports/*t*/*/.getCacheKey();
            if (global/*e*/.__queryCache) {
                var requireLazy/*r*/ = global/*e*/.__queryCache[requireDynamic/*n*/];
                if (requireLazy/*r*/) return requireLazy/*r*/
            }
            return null
        },
        DliteRoute/*set*/: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = require/*exports/*t*/*/.getCacheKey();
            global/*e*/.__queryCache || (global/*e*/.__queryCache = {}), global/*e*/.__queryCache[requireLazy/*r*/] = requireDynamic/*n*/
        }
    });
    module/*i*/.exports = o
});