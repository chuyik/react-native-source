__d("warning",["emptyFunction"],function (e, t, n, r, i) {
    "use strict";
    var emptyFunction/*o*/ = t("emptyFunction"),
        a = emptyFunction/*o*/;
    __DEV__ && (a = function(e, t) {
        for (var n = [], r = 2, i = arguments.length; i > r; r++) n.push(arguments[r]);
        if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!e) {
            var emptyFunction/*o*/ = 0;
            console.warn("Warning: " + t.replace(/%s/g, function() {
                return n[emptyFunction/*o*/++]
            }))
        }
    }), i.exports = a
});