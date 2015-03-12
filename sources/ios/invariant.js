__d("invariant",[],function (e, t, n, r, i) {
    "use strict";
    var o = function(e, t, n, r, i, o, a, s) {
        if (__DEV__ && void 0 === t) throw new Error("invariant requires an error message argument");
        if (!e) {
            var l;
            if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, r, i, o, a, s],
                    c = 0;
                l = new Error("Invariant Violation: " + t.replace(/%s/g, function() {
                    return u[c++]
                }))
            }
            throw l.framesToPop = 1, l
        }
    };
    i.exports = o
});