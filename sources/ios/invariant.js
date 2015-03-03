__d("invariant",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s) {
        if (__DEV__ && void 0 === require/*exports/*t*/*/) throw new Error("invariant requires an error message argument");
        if (!global/*e*/) {
            var l;
            if (void 0 === require/*exports/*t*/*/) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s],
                    c = 0;
                l = new Error("Invariant Violation: " + require/*exports/*t*/*/.replace(/%s/g, function() {
                    return u[c++]
                }))
            }
            throw l.framesToPop = 1, l
        }
    };
    module/*i*/.exports = o
});